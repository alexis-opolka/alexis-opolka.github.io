import { StaticImageData } from "next/image";

// Interface Definition
// We define the interface for the players
// The `DiscussionPlayer` interface stores the name of the player in the `name` property,
// the avatar of the player in the `avatar` property, and where we should display the player's
// messages in the `position` property.
//
// As an implicit rule, the position of the user (the one using the phone) is always "right"
// and the position of the other players is always "left".
export interface DiscussionPlayer {
  name: string,
  avatar: string | StaticImageData,
  position: "left" | "right",
}

// We define the base interface for the discussion
// This is the interface that defines the type of the interfaces
// we allow to be stored in the discussion.
export interface DiscussionBaseInterface {
  type: string,
  [x: string]: any,
}

// We define the interface for the messages as being an extension of the base interface
// (which is the interface that defines the type of the interface).
// The `DiscussionMessageInterface` stores the author of the message in the `author` property,
// the author being a `DiscussionPlayer` instance, and the content of the message
// in the `content` property, the content being the message to be displayed.
export interface DiscussionMessageInterface extends DiscussionBaseInterface {
  type: "message",
  author: DiscussionPlayer,
  content: string,
}

// We define the interface for the choices as being an extension of the base interface
// (which is the interface that defines the type of the interface).
// The `DiscussionChoicesInterfaces` stores the messages to be displayed before the choice
// in the `startMessages` array, the options to be displayed in the `options` array,
// and the `answered` and `infinite` properties that are used to determine whether
// the choice has been answered and whether the choice should be displayed again
// after it has been answered.
export interface DiscussionChoicesInterface extends DiscussionBaseInterface {
  type: "choices",
  startActions: DiscussionChoicesStartActions[],
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
export interface DiscussionChoicesOptions {
  name: string,
  messagesToShow: DiscussionMessageInterface[],
  actions: (
    | DiscussionChoicesActions
    | DiscussionChoicesStatefulVariableActions
  )[],
}

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
export interface DiscussionChoicesActions extends DiscussionBaseInterface {
  type: string,
  target?: string | number | Array<number>,
  [x: string]: any,
}

export interface DiscussionChoicesStatefulVariableActions extends DiscussionChoicesActions {
  value: any,
  variableSetter: Function,
}

// We define an extension of the base interface for the choice actions
// used in the `startActions` property of the `DiscussionChoicesInterface`.
// You attach the content of your action (e.g. the message to be displayed/replaced) inside
// your action object in the `content` property.
export interface DiscussionChoicesStartActions extends DiscussionChoicesActions {
  content: any,
}