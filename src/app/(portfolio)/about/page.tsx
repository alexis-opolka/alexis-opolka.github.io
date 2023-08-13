"use client"

// NextJS Imports
import { Avatar, Box, PageLayout } from "@primer/react";

// Intern Imports
import ProfilePicture from "@/content/img/profile-picture.png";

// Rendering page
export default function AboutPage(){

    return(
        <PageLayout sx={{
            border: "1px solid",
            borderColor: "border.default",
            borderRadius: "1rem",
            bg: "canvas.default"
        }}>
            <PageLayout.Content>
                <Avatar src={ProfilePicture.src} size={256} />
            </PageLayout.Content>
        </PageLayout>
    )
}