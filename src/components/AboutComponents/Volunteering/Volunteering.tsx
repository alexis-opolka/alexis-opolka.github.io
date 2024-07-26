// NextJS Imports
import { Box, Heading, Link } from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";


export default function VolunteeringExperience(){

    const volunteeringExperienceStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        color: "text.primary",
        width: "100%",
        maxWidth: "100%",
        padding: 20,
        backgroundColor: "canvas.default",
    }

    return(
        <Box id="About.Volunteering.Content.Holder" sx={volunteeringExperienceStyle}>
            <Box id="About.Volunteering.Content.Headings" sx={{ml: 2, mb: 0, maxWidth: "100%"}}>
                <Link href='#About.Volunteering.Content' sx={{color: "fg.default"}}>
                    <Heading as={"h3"} sx={{fontSize: 4, mr: 4}}> My Volunteering </Heading>
                </Link>
            </Box>
            <Box id="About.Volunteering.Content.Experience" sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", maxWidth: "100%", width: "100%"}}>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <VolunteeringCard association="Heimdall" occupiedFunction="Co-President" date={"1st August 2023 - December 2023"} />
                    <VolunteeringCard association="Petits Papiers d'Architecture" occupiedFunction="Technical Director" date={"1st August 2022 - Present"} />
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <VolunteeringCard association="Maison des Lycéens du Lycée Marc Bloch" occupiedFunction="President" date={"October 2019 - January 2022"} />
                    <VolunteeringCard association="Foyer Social et Educatif (FSE) du Collège Marcel Pagnol" occupiedFunction="Vice-President" date={"October 2016 - July 2019"} />
                </Box>
            </Box>
        </Box>
    )
}

function VolunteeringCard({
    association,
    occupiedFunction,
    date
}: {
    association: string,
    occupiedFunction: string,
    date: string
}){

    const volunteeringCardStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        color: "text.primary",
        backgroundColor: "canvas.inset",
        padding: 15,
        margin: 4,
        maxWidth: "100%",
    }

    return(
        <Box sx={volunteeringCardStyle}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "start", width: "100%"}}>
                <Heading as={"h4"} sx={{fontSize: 3, mr: 4}}>{association}</Heading>
                <Heading as="h6" sx={{fontSize: 1, color: "fg.subtle", display: "flex", alignItems: "end", justifyContent: "end"}}>{date}</Heading>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "start"}}>
                <Heading as="h6" sx={{fontSize: 1}}>{occupiedFunction}</Heading>
            </Box>
        </Box>
    )
}