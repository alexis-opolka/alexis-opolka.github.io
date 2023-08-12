// NextJS Imports
import { Avatar, Box, Text } from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";
import {useRef, useEffect} from "react";

// Intern Imports
import BardDiscussion from "./BardDiscussion";
import { DiscussionPlayer } from "./MessageAppInterfaces";

export default function MessageDiscussionWrapper(){

    const discussionStyle: BetterSystemStyleObject = {
        // border: "1px solid green",
        flexGrow: "3 1 1px",
        width: "100%",
        height: "100%",
        overflowY: "scroll",
        maxHeight: "100%",
    };

    return(
        <Box sx={discussionStyle}>
            <BardDiscussion messageComponent={DiscussionMessage} />
        </Box>
    )
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
        borderRadius: 20,
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

    // Define the playerAvatar constant to be either player.avatar
    // if it's a string or player.avatar.src if it's a StaticImageData
    var playerAvatar: string;
    if (typeof player.avatar === "string") {
        playerAvatar = player.avatar;
    } else {
        playerAvatar =  player.avatar.src;
    };

    const avatarComponent = <Avatar src={playerAvatar} size={30} />;
    const contentComponent = <Text>{message}</Text>;

    var currentLastMessageRef = useRef();
    useEffect(() => {
        if (currentLastMessageRef.current) {
            currentLastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return(
        <div ref={currentLastMessageRef}>
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
        </div>
    )
}