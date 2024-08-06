import profilePictureHolder from "@/content/img/profile.svg";
import styleSheet from "./cyberpunk.module.sass";

export function CyberComponentPhoneAvatar(){

    return(
        <div className={styleSheet.phoneAvatarHolder}>
            <div style={{backgroundImage: profilePictureHolder.src}}>
                <img src={profilePictureHolder.src} alt={""}/>
            </div>
        </div>
    )
}