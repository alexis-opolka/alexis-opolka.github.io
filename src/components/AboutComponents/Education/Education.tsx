// NextJS Imports
import { Box, Timeline, Octicon, Text } from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";
import {FlameIcon} from "@primer/octicons-react";

export default function AboutMyEducation(){

    const educationPartStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        maxWidth: "100%",
        padding: 20,
        backgroundColor: "bg.default"
    }


    // For this component / Part
    // We're going to go a bit differently than the others
    // as studies / education is continuous (until you stop)

    return(
        <Box id="About.Education" sx={educationPartStyle}>
            <Timeline>
                <EducationTimelineItem
                    diploma="BUT Networks and Telecommunications"
                    grade="college"
                    school="IUT Béziers, France"
                    years={[2023, 2025]}
                />
                <EducationTimelineItem
                    diploma="High School Diploma"
                    grade="high-school"
                    school="Marc Bloch, France"
                    years={[2019, 2022]}
                    mention={"Good mention"}
                />
                <EducationTimelineItem
                    diploma="General Certificate of Secondary Education"
                    grade="middle-school"
                    school="Marcel Pagnol, France"
                    years={[2019, 2022]}
                    mention={"Very Good mention"}
                />
            </Timeline>
        </Box>
    )
}

//
function EducationTimelineItem({
    diploma,
    grade,
    school,
    years,
    mention
}: {
    diploma: string,
    grade: "middle-school" | "high-school" | "college" | "graduate-school",
    school: string,
    years: [number, number],
    mention?: string
}){

    const educationTimelineBodyStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "flex-start",
        ml: 2,
        flexWrap: "wrap",
    }

    const gradeDisplayNames = {
        "middle-school": "Middle School",
        "high-school": "High School",
        "college": "College",
        "graduate-school": "Graduate School"
    }

    const gradeDisplay = gradeDisplayNames[grade];

    return(
        <Timeline.Item>
            <Timeline.Badge>
                <Octicon icon={FlameIcon} />
            </Timeline.Badge>
            <Timeline.Body sx={educationTimelineBodyStyle}>
                {years[0]}-{years[1]}&nbsp; | &nbsp;{gradeDisplay}, {diploma}{mention? (<Text>&nbsp;({mention}),</Text>): ","} {school}
            </Timeline.Body>
        </Timeline.Item>
    )
}
