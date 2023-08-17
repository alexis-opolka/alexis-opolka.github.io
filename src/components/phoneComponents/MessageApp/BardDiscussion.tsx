/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState } from "react";
import { Box } from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";
import { useRouter } from "next/navigation";
import { DiscussionChoicesInterface, DiscussionMessageInterface, DiscussionChoicesOptions, DiscussionChoicesActions, DiscussionChoicesStatefulVariableActions, DiscussionChoicesStartActions } from "./MessageAppInterfaces";
import { isReplaceMessageAction, allowedChoiceActions} from "./ActionsHandlers";
import { messageChoices } from "./MessageChoices";

// Intern imports
import messageAppStyles from "@/sass/message-app.module.sass";


// Rendering work
export default function BardDiscussion(props: any){

  // The functions are defined here
  // The `ChoiceComponent` is the component used to render the choices,
  // it doesn't have any logic that is not related to rendering them.
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
      borderRadius: 20,
      margin: 2
    }

    return(
      <Box id={`phone.context.message-app.discussion.choices.${index}`} key={index} sx={choiceStyle} className={messageAppStyles.discussionChoice} onClick={onClickHandler}>
        {choiceContent}
      </Box>
    )
  }

  // The `renderMessage` function is the function that is used to render both
  // the messages and the choices using loops and conditions.
  function renderMessage(){
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
      flexGrow: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderTop: "1px solid",
      borderTopColor: "header.bg",
      // border: "1px solid orange"
    }

    // The style for the Box wrapping the messages and the choices (the discussion context)
    const discussionWrapperStyle: BetterSystemStyleObject = {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      maxHeight: "100%",
      flexBasis: 100,
      // border: "1px solid blue",
    };
    // The style for the Box wrapping the messages (at the center of the discussion context)
    const discussionMessagesWrapperStyle: BetterSystemStyleObject = {
      flexGrow: 3,
      maxHeight: "80%",
      overflowY: "scroll",
    }




    // This is the main rendering function, the one that decides the agencement of the messages
    /// and the choices.
    return (
      <Box id="phone.context.message-app.discussion" sx={discussionWrapperStyle}>
        <Box id="phone.context.message-app.discussion.messages-wrapper" sx={discussionMessagesWrapperStyle}>
          { // Looping through the messageHistory to render the messages
            messageHistory.map((message, index) => {
              // For debugging purposes -- should be removed in production
              console.debug("While rendering:", message.content)
              return (<MessageComponent key={index} player={message.author} message={message.content} />);
            })
          }

        </Box>
        <Box id="phone.context.message-app.discussion.choices-wrapper" sx={choicesStyle}>
          {showChoices && clickableChoices}
        </Box>
      </Box>
    );
  }

  // The router is used to navigate to pages
  const nextRouter = useRouter();

  // The message component is the component that will be used to render the messages
  const MessageComponent = props.messageComponent;

  // We have a list of messages that we want to display
  // that are in reality a list of choices and we add the messages
  // to display before the choice in the `startMessages` array of each choice
  //
  // The `setMessages` function should only be used to add choices to the list
  // dynamically and not otherwise.
  // If a choice is to be modified/removed/added, it should be done statically
  // in the `messages` array in the source code.
  const [messages, setMessages] = useState<DiscussionChoicesInterface[]>(messageChoices);

  // The current index is the index of the choice that is currently being displayed
  const [currentIndex, setCurrentIndex] = useState(0);
  // The messageHistory should be an array of its own (from the compiler viewpoint)
  const [messageHistory, setMessageHistory] = useState<DiscussionMessageInterface[]>(messages[currentIndex].startMessages.slice());
  const [showChoices, setShowChoices] = useState(true);

  function addMessageToHistory(message: DiscussionMessageInterface){
    setMessageHistory([...messageHistory, message]);
  }

  // The `handleClick` function is the default handler for the choices and their actions
  function handleClick(event: any){

    function ActionsHandler(action: (DiscussionChoicesActions | DiscussionChoicesStatefulVariableActions | DiscussionChoicesStartActions), type: string){
      if (!allowedChoiceActions.includes(action.type)) {
        console.error(`The action "${action.type}" is not allowed!`);
        return false;
      }

      if (action.type === "goToChoiceIndex") {
        if (typeof action.target === "number"){
          // Before going to the next choice, we need to verify that there's
          // indeed a choice at the given index.
          // After that, we do any startActions we are required to do, then
          // we add the startMessages of the choice to the history
          // of messages. Then, we set the current index to the index of the
          // choice.
          // As a last step, we make sure that the choices are shown.

          const choice = messages[action.target];

          if (choice){ // There's indeed a choice at the given Index

            // We add all the necessary messages to the history
            setMessageHistory([...messageHistory, ...choice.startMessages])

            setCurrentIndex(action.target);
            setShowChoices(true);
          } else {
            console.error(`There's no choice at index "${action.target}"!`);
          }
        } else {
            console.error("The target of the action is not a number!");
        }
      } else if (action.type === "displayMessage") {
        let message;

        if (type === "startAction"){
          message = action.content;

        } else {
          if (isReplaceMessageAction(action)){
            message = messages[currentIndex].options[action.target[0]].messagesToShow[action.target[1]];
          }
        }
        console.debug("[DEBUG: displayMessage Action]", message);
        return addMessageToHistory(message);
      } else if (action.type === "goToPageIndex") {
        nextRouter.push(action.target);
      } else {
        console.error(`The action "${action.type}" is not implemented!`);
      }
    }


    const selectedChoice = event.target.textContent;
    const selectedChoiceIndex = Number(event.target.id.split(".")[5]);

    console.log("The selected choice is:", selectedChoice, selectedChoiceIndex);

    if (!showChoices) {
      setShowChoices(true);
    }

    for (let i = 0; i < messages[currentIndex].options[selectedChoiceIndex].actions.length; i++) {
      const action: (DiscussionChoicesActions | DiscussionChoicesStatefulVariableActions) = messages[currentIndex].options[selectedChoiceIndex].actions[i];

      ActionsHandler(action, "choiceAction");
    }
  }

  return renderMessage();
}