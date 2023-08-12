import * as MessageAppInterfaces from "@/components/phoneComponents/MessageApp/MessageAppInterfaces";


export const allowedChoiceActions = [
  // Actions to be taken related to the page
  "goToPageIndex",
  // Actions to be taken related to the messages
  "displayMessage",
  "replaceMessage",
  "goToMessageIndex",
  // Actions to be taken related to the choices
  "hideChoices",
  "goToChoiceIndex",
  // Actions to be taken related to stateful variables
  "setStatefulVariable",
];

// User-defined type guard for the `replaceMessage` action
export function isReplaceMessageAction(action: MessageAppInterfaces.DiscussionChoicesActions):
  action is {
    type: "replaceMessage",
    target: Array<number>
  } {
    return action.type === "replaceMessage" && Array.isArray(action.target);
}
// User-defined type guard for the `replaceMessage` action but using DiscussionChoicesStartActions instead
export function isStartReplaceMessageAction(action: MessageAppInterfaces.DiscussionChoicesStartActions):
  action is {
    type: "replaceMessage",
    target: Array<number>,
    content: any
  } {
    return action.type === "replaceMessage" && action.content && Array.isArray(action.target);
}

// User-defined type guard for the `setStatefulVariable` action
export function isSetStatefulVariableAction( action: MessageAppInterfaces.DiscussionChoicesActions ):
  action is {
    type: "setStatefulVariable";
    variableSetter: Function;
    value: any
  } {
    return action.type === "setStatefulVariable" && typeof action.variableSetter === "function";
}