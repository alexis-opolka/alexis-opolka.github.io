// NextJS Imports
import {Box, Heading, Link, Text} from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";

import InvestmentData from "./src/investment.json";

interface investmentEventInterface {
    id: string,
    name: string,
    category: string,
    description: string,
    url?: string
}


export default function MyInvestment(){

    const investmentExperienceStyle: BetterSystemStyleObject = {
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

    const investmentInConference: investmentEventInterface[] = [];
    const investmentInSchoolEvents: investmentEventInterface[] = [];
    const investmentUnrelatedButInteresting: investmentEventInterface[] = [];

    // We preload the content on different lists so that we can easily map them to the cards
    InvestmentData.content.map((investmentEvent, investmentIndex) => {
        if (investmentEvent.category === "conference"){
            // We add the investmentEvent object to the investmentInConference list
            investmentInConference.push(investmentEvent);
        } else if (investmentEvent.category === "school-event"){
            // We add the investmentEvent object to the investmentInSchoolEvents list
            investmentInSchoolEvents.push(investmentEvent);
        } else if (investmentEvent.category === "other"){
            investmentUnrelatedButInteresting.push(investmentEvent);
        } else {
            // We shouldn't be here, so we just throw a log with the content
            console.log("We couldn't find the category for this investment event: ", investmentEvent, `with the index n°${investmentIndex}!`)
        }
    })


    return(
        <Box id="About.Investment.Content.Holder" sx={investmentExperienceStyle}>
            <Box id="About.Investment.Content.Headings" sx={{ml: 2, mb: 0, maxWidth: "100%"}}>
                <Link href='#About.Investment.Content' sx={{color: "fg.default"}}>
                    <Heading as={"h3"} sx={{fontSize: 4, mr: 4}}> My Investment </Heading>
                </Link>
            </Box>
            <Box id="About.Investment.Content.Experience.Holder" sx={{display: "flex", flexDirection: "column", maxWidth: "100%", width: "100%"}}>
                <Box id="About.Investment.Content.Experience" sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", maxWidth: "100%", width: "100%"}}>
                    <Box id="About.Investment.Content.Experience.Conferences" sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>

                        <Box id="About.Investment.Content.Experience.Conferences.Headings">
                            <Heading as={"h4"} sx={{fontSize: 3, ml: 4, mt: 4}}>
                                Conferences

                                <Text as={"p"} sx={{fontSize: 1, color: "fg.subtle", mt: 2, mb: 2, ml: 4, mr: 4}}>
                                    I attended the following conferences, either digitally or physically.
                                </Text>
                            </Heading>
                        </Box>

                        <Box id="About.Investment.Content.Experience.Conferences.Content" sx={{mt: 2, mb: 2, ml: 4, mr: 4}}>
                            {
                                investmentInConference.map((investmentEvent, investmentIndex) => {
                                    return(
                                        <InvestmentCard key={investmentIndex} id="About.Investment.Content.Experience.Conferences.Content" type={investmentEvent.category} content={investmentEvent} />
                                    )
                                })
                            }
                        </Box>
                    </Box>
                    <Box id="About.Investment.Content.Experience.School-Events" sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <Box id="About.Investment.Content.Experience.School-Events.Headings">
                            <Heading as={"h4"} sx={{fontSize: 3, ml: 4, mt: 4}}>
                                School Events

                                <Text as={"p"} sx={{fontSize: 1, color: "fg.subtle", mt: 2, mb: 2, ml: 4, mr: 4}}>
                                    I either participated or helped organize the following school events.
                                </Text>
                            </Heading>
                        </Box>

                        <Box id="About.Investment.Content.Experience.School-Events.Content" sx={{mt: 2, mb: 2, ml: 4, mr: 4}}>
                            {
                                investmentInSchoolEvents.map((investmentEvent, investmentIndex) => {
                                    return(
                                        <InvestmentCard key={investmentIndex} id="About.Investment.Content.Experience.School-Events.Content" type={investmentEvent.category} content={investmentEvent} />
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </Box>
                <Box id="About.Investment.Content.Experience.Others" sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <Box id="About.Investment.Content.Experience.Others.Headings">
                        <Heading as={"h4"} sx={{fontSize: 3, ml: 4, mt: 4}}>
                            Others

                            <Text as={"p"} sx={{fontSize: 1, color: "fg.subtle", mt: 2, mb: 2, ml: 4, mr: 4}}>
                                It&apos;s not really related to anything but I thought it would be nice to show it.
                            </Text>
                        </Heading>
                    </Box>

                    <Box id="About.Investment.Content.Experience.Others.Content" sx={{mt: 2, mb: 2, ml: 4, mr: 4}}>
                        {
                            investmentUnrelatedButInteresting.map((investmentEvent, investmentIndex) => {
                                return(
                                    <InvestmentCard key={investmentIndex} id="About.Investment.Content.Experience.Others.Content" type={investmentEvent.category} content={investmentEvent} />
                                )
                            })
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function InvestmentCard({
    id,
    type,
    content
}: {
    id: string,
    type: string,
    content: investmentEventInterface
}){

    const baseID = `${id}.${type}.${content.id}`;

    const investmentCardStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        color: "text.primary",
        backgroundColor: "canvas.inset",
        padding: 15,
        margin: 4,
        maxWidth: "100%",
    }

    return(
        <Box id={baseID} sx={investmentCardStyle}>
            <Box>
                {content.url ? (
                    <Link href={content.url} sx={{color: "fg.default"}}>
                        <Heading as={"h4"} sx={{fontSize: 3, mr: 4}}>{content.name}</Heading>
                    </Link>
                ) : (
                    <Heading as={"h4"} sx={{fontSize: 3, mr: 4}}>{content.name}</Heading>
                )}
                <Heading as="h6" sx={{fontSize: 1, color: "fg.subtle", display: "flex", alignItems: "center", justifyContent: "start"}}>{content.description}</Heading>
            </Box>
        </Box>
    )
}