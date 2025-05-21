import { useSelector } from "react-redux"
import { IconButton } from "@mui/material"
import MicOffIcon from '@mui/icons-material/MicOff';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import { RootState } from "../../redux/store";
import ProfilePopOver from "../Popover/ProfilePopOver/ProfilePopOver";
import CustomAvatar from "../Utils/CustomAvatar";

export default function ProfileBar() {
    const profileData = useSelector((state: RootState) => state.profile)
    console.log('profileData', profileData)
    return (
        <div className="absolute bottom-2 left-2 w-62">
            <div className="flex p-2 rounded-md justify-between" style={{
                backgroundColor: '#202024'
            }}>
                <div className="flex items-center gap-2 hover:bg-neutral-700 h-10 rounded-l-full rounded-r-2xl">
                    <CustomAvatar statusSize={{ width: "12px", height: '12px', }} showStatusSize={{ width: "20px", height: '20px', }} containerSize={{ width: "40px", height: '40px', }} avatarSize={{ width: "25px", height: "25px" }} bgColor='#5865F2' status={profileData.status} />
                    <ProfilePopOver profile={profileData}>
                        <div className="overflow-hidden w-14 ">
                            <h1>{profileData.displayName}</h1>
                            <h1 className="text-sm">{profileData.userName}</h1>
                        </div>
                    </ProfilePopOver>
                </div>
                <div className="flex justify-center items-center mx-2">
                    <IconButton
                        className="profile_icon"
                    >
                        <MicOffIcon />
                    </IconButton >
                    <IconButton
                        className="profile_icon"
                    >
                        <HeadsetIcon />
                    </IconButton>
                    <IconButton
                        className="profile_icon"
                    >
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}