import React, {useEffect} from "react";

import {Box} from "@primer/react";
import {CyberComponentPhoneAvatar} from "@/components/CyberComponents/PhoneAvatar";
import {NCPDTitle} from "@/components/CyberComponents/NcpdRecords";

import styleSheet from "@/components/CyberComponents/cyberpunk.module.sass";

export default function DynamicAboutPage() {

    let pageWidth = 600;
    if (window) {
        pageWidth = window.innerWidth;
    }

    return (
        <Box id={"modifications"} style={{height: "200vh"}}>
            <NCPDTitle />
            <Box className={styleSheet.NCPDRecordLayout}>
                <CyberComponentPhoneAvatar />

                <section>

                    <table className={styleSheet.NCPDRecordTable}>
                        <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>Alexis</td>

                            <td>Charges</td>
                            <td>55</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>Opolka</td>

                            <td>Arrests</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Middle Name</td>
                            <td>V</td>

                            <td>Convictions</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>

                            <td>Outstanding Warrants</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Damage to Corporations Property</td>
                            <td></td>
                            <td></td>
                            <td>€$15,832,568</td>
                        </tr>
                        </tbody>
                    </table>
                </section>

            </Box>
        </Box>
    )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////
///////////// Cyber Components down below
/////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

