// NextJS Imports
import { Avatar, Box, Text } from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";

// Intern Imports
import ProfilePicture from "@/content/img/profile-picture.png";
import MessageDiscussionWrapper from "@/components/phoneComponents/MessageApp/MessageDiscussion";
import Link from "next/link";

export default function MessageAppWrapper(){

    const messageAppStyle: BetterSystemStyleObject = {
        width: "100%",
        height: "100%",
        // We put both the background and the foreground in
        // static values as we know they won't change
        // with the theme
        backgroundColor: "#121212",
        color: "#ffffff",
        // Now we are styling the display of the elements
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // Some easy style debugging
        // border: "1px solid red"
    }

    return(
        <Box sx={messageAppStyle}>
            <MessageContactHeader />
            <MessageDiscussionWrapper />
        </Box>
    )
}

/////////////////////////////////////////////////////////////////////////
////
////
//// MessageContactHeader
////
////
/////////////////////////////////////////////////////////////////////////
function MessageContactHeader(){

    const contactHeaderStyle: BetterSystemStyleObject = {
        display: "flex",
        // border: "1px solid cyan",
        // flexGrow: 0.2,
        width: "100%",
        flexDirection: "row",
        borderBottom: "1px solid",
        borderBottomColor: "header.bg"
    }


    return(
        <Box sx={contactHeaderStyle}>
            <Box sx={{
                display: "flex",
                // border: "1px solid cyan",
                flexGrow: 0.5,
                width: "100%",
                flexDirection: "row",
                margin: 2,
                justifyContent: "start",
                alignItems: "center",
                zIndex: 99
            }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // border: "1px solid green",
                    margin: 1,
                    width: "max-content",
                    height: "max-content"
                }}>
                    <Box sx={{
                        // border: "1px solid red",
                        margin: 2,
                        marginRight: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Avatar src={ProfilePicture.src} size={40} />
                    </Box>
                    <Box sx={{
                        // border: "1px solid red",
                        margin: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Link href={"/test"}><Text sx={{
                            color: "fg.default"
                        }}>Alexis Opolka</Text></Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}