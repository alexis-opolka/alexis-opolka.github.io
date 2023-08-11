import { Avatar, Box, Text } from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";
import { StaticImageData } from "next/image";

// Intern Imports
import ProfilePicture from "@/content/img/profile-picture.png";
import GuestProfilePicture from "@/content/img/github-mark-white.svg";
import BardDiscussion from "./BardDiscussion";

interface DiscussionAvatarType extends StaticImageData {};
export interface DiscussionPlayer {
    name: string,
    avatar: string | StaticImageData,
    position: "left" | "right"
};
interface DiscussionBaseInterface {
    type: "choices" | "message"
}
export interface DiscussionMessageInterface extends DiscussionBaseInterface {
    type: "message",
    author: DiscussionPlayer,
    content: string
};
export interface DiscussionChoicesInterface extends DiscussionBaseInterface {
    type: "choices",
    startMessage: DiscussionMessageInterface,
    options: DiscussionChoicesOptions[],
    answered?: boolean,
    infinite?: boolean,
};
export interface DiscussionChoicesOptions {
    name?: string,
    messagesToShow?: DiscussionMessageInterface[]
};

export default function MessageDiscussionWrapper({}){

    const discussionStyle: BetterSystemStyleObject = {
        border: "1px solid green",
        flexGrow: 5,
        width: "100%",
        height: "100%",
        overflowY: "scroll"
    };
    // Let's set up the players
    const authorPlayer: DiscussionPlayer = {
        name: "Alexis Opolka",
        avatar: ProfilePicture,
        position: "left"
    };
    const guestPlayer: DiscussionPlayer = {
        name: "Guest",
        avatar: GuestProfilePicture,
        position: "right"
    };
    const bardPlayer: DiscussionPlayer = {
        name: "Bard",
        avatar: "https://api.dicebear.com/6.x/bottts-neutral/svg?seed=Annie",
        position: "left"
    };

    function popMessages(key: number, message: DiscussionMessageInterface){
        return(
            <DiscussionMessage key={key} player={message.author} message={message.content} />
        )
    }

    function renderMessages(){
        return(
            <Box sx={discussionStyle}>
                <BardDiscussion messageComponent={DiscussionMessage} players={[authorPlayer, guestPlayer, bardPlayer]}/>
            </Box>
        )
    }


    return renderMessages();
};

function DiscussionMessage({
    player,
    message
}: {
    player: DiscussionPlayer,
    message: string
}){

    var messageStyle: BetterSystemStyleObject;
    const messageContentStyle: BetterSystemStyleObject = {
        width: "80%",
        marginLeft: 2,
        backgroundColor: "#1f1f1f",
        padding: 2,
        borderRadius: 20
        // border: "1px solid cyan"
    };

    if (player.position === "left"){
        messageStyle = {
            width: "100%",
            height: "fit-content",
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            // border: "1px solid red",
            marginBottom: 2,
            marginTop: 2,
        };
    } else {
        messageStyle = {
            width: "100%",
            height: "fit-content",
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            alignItems: "center",
            // border: "1px solid red",
            marginBottom: 2,
            marginTop: 2,
        }
    }

    // Define the playerAvatar constant to be either player.avatar if it's a string or player.avatar.src if it's a StaticImageData
    var playerAvatar: string;
    if (typeof player.avatar === "string") {
        playerAvatar = player.avatar;
    } else {
        playerAvatar =  player.avatar.src;
    };

    const avatarComponent = <Avatar src={playerAvatar} size={30} />;
    const contentComponent = <Text>{message}</Text>;

    console.log("Here's the content of the message: " + message)

    return(
        <Box sx={messageStyle}>
            {player.position === "left" &&
            <>
                <Box sx={{ marginLeft: 2, marginBottom: 1 }}> {avatarComponent} </Box>
                <Box sx={messageContentStyle}> {contentComponent} </Box>
            </>}
            {player.position === "right" &&
            <>
                <Box sx={messageContentStyle}> {contentComponent} </Box>
                <Box sx={{ marginRight: 2, marginLeft: 2, marginBottom: 1 }}> {avatarComponent} </Box>
            </>}
        </Box>
    )
}