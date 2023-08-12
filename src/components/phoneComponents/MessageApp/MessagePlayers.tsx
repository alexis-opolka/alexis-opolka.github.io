import ProfilePicture from "@/content/img/profile-picture.png";
import GuestProfilePicture from "@/content/img/github-mark-white.svg";
import { DiscussionPlayer } from "@/components/phoneComponents/MessageApp/MessageAppInterfaces";


// Let's set up the players
export const authorPlayer: DiscussionPlayer = {
    name: "Alexis Opolka",
    avatar: ProfilePicture,
    position: "left"
};
export const guestPlayer: DiscussionPlayer = {
    name: "Guest",
    avatar: GuestProfilePicture,
    position: "right"
};
export const bardPlayer: DiscussionPlayer = {
    name: "Bard",
    avatar: "https://api.dicebear.com/6.x/bottts-neutral/svg?seed=Annie",
    position: "left"
};