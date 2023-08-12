import { DiscussionChoicesInterface } from "./MessageAppInterfaces";
import { authorPlayer, guestPlayer } from "./MessagePlayers";

export const messageChoices: DiscussionChoicesInterface[] = [
    // The first choice and the default one
    {
      type: "choices",
      startActions: [],
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
          name: "About you",
          messagesToShow: [],
          actions: [
            {
              type: "goToChoiceIndex",
              target: 1
            },
          ]
        },
        {
          name: "About your projects",
          messagesToShow: [],
          actions: [
            {
              type: "goToChoiceIndex",
              target: 2
            }
          ]
        }
      ]
    },
    // The choice about the author
    {
      type: "choices",
      startMessages: [
        {
          type: "message",
          author: guestPlayer,
          content: "About you!"
        },
        {
          type: "message",
          author: authorPlayer,
          content: "Oh, I see. Well, Here's the link you'll want."
        },
      ],
      startActions: [],
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
        {
          name: "I wanted to talk about something else",
          messagesToShow: [],
          actions: [
            {
              type: "goToChoiceIndex",
              target: 0
            }
          ]
        }
      ]
    },
    // The choice about the projects
    {
      type: "choices",
      startMessages: [
        {
          type: "message",
          author: guestPlayer,
          content: "About your projects!"
        },
        {
          type: "message",
          author: authorPlayer,
          content: "Oh, I see. Well, Here's the link you'll want."
        },
      ],
      startActions: [],
      options: [
        {
          name: "Go to the projects page",
          messagesToShow: [],
          actions: [
            {
              type: "goToPageIndex",
              target: "/projects"
            }
          ]
        },
        {
          name: "I wanted to talk about something else",
          messagesToShow: [],
          actions: [
            {
              type: "goToChoiceIndex",
              target: 0
            }
          ]
        }
      ]
    }
  ]