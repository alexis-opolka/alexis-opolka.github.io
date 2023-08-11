"use client"

import React, { useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import { Box } from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";
import { useRouter } from "next/navigation";
import { setTimeout } from "timers";

// Interface Definition
// We define the interface for the players
// The `DiscussionPlayer` interface stores the name of the player in the `name` property,
// the avatar of the player in the `avatar` property, and where we should display the player's
// messages in the `position` property.
//
// As an implicit rule, the position of the user (the one using the phone) is always "right"
// and the position of the other players is always "left".
interface DiscussionPlayer {
  name: string;
  avatar: string | StaticImageData;
  position: "left" | "right";
}

// We define the base interface for the discussion
// This is the interface that defines the type of the interfaces
// we allow to be stored in the discussion.
interface DiscussionBaseInterface {
  type: "choices" | "message";
}

// We define the interface for the messages as being an extension of the base interface
// (which is the interface that defines the type of the interface).
// The `DiscussionMessageInterface` stores the author of the message in the `author` property,
// the author being a `DiscussionPlayer` instance, and the content of the message
// in the `content` property, the content being the message to be displayed.
interface DiscussionMessageInterface extends DiscussionBaseInterface {
  type: "message";
  author: DiscussionPlayer;
  content: string;
}

// We define the interface for the choices as being an extension of the base interface
// (which is the interface that defines the type of the interface).
// The `DiscussionChoicesInterfaces` stores the messages to be displayed before the choice
// in the `startMessages` array, the options to be displayed in the `options` array,
// and the `answered` and `infinite` properties that are used to determine whether
// the choice has been answered and whether the choice should be displayed again
// after it has been answered.
interface DiscussionChoicesInterface extends DiscussionBaseInterface {
  type: "choices",
  startMessages: DiscussionMessageInterface[],
  options: DiscussionChoicesOptions[],
  answered?: boolean,
  infinite?: boolean,
}

// We define the option of a choice
// This is the object that defines the name to be displayed,
// the messages to be displayed after the choice has been clicked on,
// and the actions to be taken after the choice has been clicked on.
// There can be a misunderstanding here: the `actions` are what the handler
// is going to loop through and execute in order, and the `messagesToShow`
// is where we store the messages. If there are no actions telling the handler
// to display any messages, then the `messagesToShow` array will be ignored.
//
// Also, the `actions` array should always be defined.
interface DiscussionChoicesOptions {
  name: string,
  messagesToShow: DiscussionMessageInterface[],
  actions: (DiscussionChoicesActions | DiscussionChoicesStatefulVariableActions)[],
};

// We define the actions that are to be taken when a choice has been clicked on.
// It supports a list of predefined actions that are authorized
// -- and helps the handler to know what to do and in what order --
// such as: "goToPageIndex", "displayMessage", "hideChoices", etc.
// The `target` property is used to determine what the action should be applied to.
// For example, if the action is "goToIndex", then the `target` property should be
// the page path to go to.
//
// The `target` property is set as optional to allow for actions to be set up
// without a target. For example, if the action is "hideChoices", then the `target`,
// if set, should be the index of the choice to hide. If the `target` is not set
// then the handler will hide all the choices.
interface DiscussionChoicesActions {
  type: string,
  target?: string | number | Array<number>,
}

interface DiscussionChoicesStatefulVariableActions extends DiscussionChoicesActions {
  value: any,
  variableSetter: Function
}

const allowedChoiceActions = [
  // Actions to be taken related to the page
  "goToPageIndex",
  // Actions to be taken related to the messages
  "displayMessage", "replaceMessage", "goToMessageIndex",
  // Actions to be taken related to the choices
  "hideChoices", "goToChoiceIndex",
  // Actions to be taken related to stateful variables
  "setStatefulVariable"
]
// User-defined type guard for the `replaceMessage` action
function isReplaceMessageAction(action: DiscussionChoicesActions): action is { type: "replaceMessage", target: Array<number> } {
  return action.type === "replaceMessage" && Array.isArray(action.target);
}


// Rendering work
export default function BardDiscussion(props: any){

  const nextRouter = useRouter();

  const MessageComponent = props.messageComponent;
  // We have three players: the author, the guest, and the bard
  // They should be passed in as props in an array via the "players" prop
  // the `setPlayers` shouldn't be used other than to either set the initial state
  // or update the `Players` instances.
  const [players, setPlayers] = useState<DiscussionPlayer[]>(props.players);
  const [authorPlayer, guestPlayer, bardPlayer] = players;

  // We have a list of messages that we want to display
  // that are in reality a list of choices and we add the messages
  // to display before the choice in the `startMessages` array of each choice
  //
  // The `setMessages` function should only be used to add choices to the list
  // dynamically and not otherwise.
  // If a choice is to be modified/removed/added, it should be done statically
  // in the `messages` array in the source code.
  const [messages, setMessages] = useState<DiscussionChoicesInterface[]>([
    {
      type: "choices",
      startMessages: [
        {
          type: "message",
          author: authorPlayer,
          content: "Hi, did you want to talk about something?"
        },
        {
          type: "message",
          author: guestPlayer,
          content: "Hi, I wanted to talk..."
        },
      ],
      options: [
        {
          name: "about you",
          messagesToShow: [
            {
              type: "message",
              author: guestPlayer,
              content: "Hi, I wanted to talk about you!"
            }
          ],
          actions: [
            {
              type: "replaceMessage",
              target: [0, 1]
            },
            {
              type: "goToChoiceIndex",
              target: 1
            },
          ]
        },
        {
          name: "Option 2",
          messagesToShow: [
            {
              type: "message",
              author: bardPlayer,
              content: "This is the content of message 2."
            }
          ],
          actions: []
        }
      ]
    },
    {
      type: "choices",
      startMessages: [
        {
          type: "message",
          author: authorPlayer,
          content: "Oh, I see. Well, Here's the link you'll want."
        },
      ],
      options: [
        {
          name: "Go to the about page",
          messagesToShow: [],
          actions: [
            {
              type: "goToPageIndex",
              target: "/about"
            }
          ]
        },
      ]
    }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [messageHistory, setMessageHistory] = useState<DiscussionMessageInterface[]>(messages[currentIndex].startMessages);
  const [showChoices, setShowChoices] = useState(true);

  // We define the handler that will be used to update the history of messages
  function addMessageToHistory(message: DiscussionMessageInterface){
    setMessageHistory([...messageHistory, message]);
  }
  function replaceMessageInHistory(message: DiscussionMessageInterface, index: number){
    const newMessageHistory: DiscussionMessageInterface[] = messageHistory.splice(index);
    newMessageHistory.push(message)
    setMessageHistory(newMessageHistory);

    console.log("The difference:", newMessageHistory, messageHistory);
  }
  function setStatefulVariables(statefulVariableSetter: Function, value: any){
    statefulVariableSetter(value);
  }

  function ChoiceComponent({
    index,
    choiceContent,
    onClickHandler
  }: {
    index: number,
    choiceContent: string,
    onClickHandler: typeof handleClick
  }){
    const choiceStyle: BetterSystemStyleObject = {
      padding: 2,
      backgroundColor: "#1f1f1f",
      borderRadius: 20,
      margin: 2
    }

    return(
      <Box id={`phone.context.message-app.discussion.choices.${index}`} key={index} sx={choiceStyle} onClick={onClickHandler}>
        {choiceContent}
      </Box>
    )
  }

  function renderMessage(){
    const message = messages[currentIndex];
    const choices = messages[currentIndex].options;
    const clickableChoices: React.JSX.Element[] = choices.map(
      (choice: DiscussionChoicesOptions, index: number) => {
        return(
          <ChoiceComponent key={index} index={index} choiceContent={choice.name} onClickHandler={handleClick} />
        )
      }
    );

    // The style for the Box wrapping the choices (at the bottom of the discussion context)
    const choicesStyle: BetterSystemStyleObject = {
      flexGrow: 0.1,
      border: "1px solid red"
    }

    // The style for the Box wrapping the messages and the choices (the discussion context)
    const discussionWrapperStyle: BetterSystemStyleObject = {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      border: "1px solid blue",
    };
    // The style for the Box wrapping the messages (at the center of the discussion context)
    const discussionMessagesWrapperStyle: BetterSystemStyleObject = {
      flexGrow: 3,
    }

    console.debug("The history is:", messageHistory);

    // This is the main rendering function, the one that decides the agencement of the messages
    /// and the choices.
    return (
      <Box id="phone.context.message-app.discussion" sx={discussionWrapperStyle}>
        <Box id="phone.context.message-app.discussion.messages-wrapper" sx={discussionMessagesWrapperStyle}>
          {messageHistory.map((message, index) => {
            // For debugging purposes -- should be removed in production
            console.debug("Before render:", message.content)
            return (<MessageComponent key={index} player={message.author} message={message.content} />);
          })
          }

        </Box>
        <Box id="phone.context.message-app.discussion.choices-wrapper" sx={choicesStyle}>
          {showChoices && clickableChoices}
        </Box>
      </Box>
    );
  };

  function handleClick(event: any){
    const selectedChoice = event.target.textContent;
    const selectedChoiceIndex = Number(event.target.id.split(".")[5]);

    console.log("The selected choice is:", selectedChoice, selectedChoiceIndex);

    if (!showChoices) {
      setShowChoices(true);
    }

    // We define the `lockedRuntime` variable, which will be used to prevent the loop to continue
    // until the end of the current iteration.
    for (var i = 0; i < messages[currentIndex].options[selectedChoiceIndex].actions.length; i++) {
      const action = messages[currentIndex].options[selectedChoiceIndex].actions[i];

      if (!allowedChoiceActions.includes(action.type)) {
        console.error(`The action "${action.type}" is not allowed!`);
        continue;
      };

      switch(action.type) {
        case "goToPageIndex":
          if (typeof action.target === "string"){
            nextRouter.push(action.target);
          }
          break;

        case "displayMessage":
          if (typeof action.target === "number"){
            const message = messages[currentIndex].options[selectedChoiceIndex].messagesToShow[action.target];

            console.debug("[displayMessage] Before render:", message)
            addMessageToHistory(message);
          }
          break;

        case "replaceMessage":
          if (isReplaceMessageAction(action)){
            const message = messages[currentIndex].options[selectedChoiceIndex].messagesToShow[action.target[0]];

            replaceMessageInHistory(message, action.target[1]);

          } else {
            console.error("The target of the action is not an array!");
          }
          break;

        case "hideChoices":
          setShowChoices(false);
          break;

        case "goToChoiceIndex":
          if (typeof action.target === "number"){
            // Before going to the next choice, we need to verify that there's
            // indeed a choice at the given index.
            // After that, we add the startMessages of the choice to the history
            // of messages. Then, we set the current index to the index of the
            // choice.
            // As a last step, we make sure that the choices are shown.

            const choice = messages[action.target];
            if (choice){
              choice.startMessages.forEach((message) => {
                addMessageToHistory(message);
              });
              setCurrentIndex(action.target);
              setShowChoices(true);
            } else {
              console.error(`There's no choice at index "${action.target}"!`);
            }
          } else {
            console.error("The target of the action is not a number!");
          }
          break;

        case "setStatefulVariable":
          // As there isn't a well made way to assure
          // that the action has the `value` and `statefulVariableSetter`
          // I won't put a verification test here yet
          // TODO: Implement a way to verify that the action passed
          // TODO: as a `setStateVariable` is indeed one

          setStatefulVariables(action.variableSetter, action.value);
          break;

        default:
          console.error(`The action "${action.type}" is not implemented!`);
          break;
      };
    }
  };

  return renderMessage();
};