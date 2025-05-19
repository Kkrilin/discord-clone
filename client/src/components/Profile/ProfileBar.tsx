import { useSelector } from "react-redux"
import { Avatar, IconButton } from "@mui/material"
import MicOffIcon from '@mui/icons-material/MicOff';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import discordImg from '../../assets/Discord-Symbol-White.svg'
import { RootState } from "../../redux/store";

export default function ProfileBar() {
    const profileData = useSelector((state: RootState) => state.profile)

    return (
        <div className="absolute bottom-2 left-2 w-62">
            <div className="flex p-2 rounded-md justify-between" style={{
                backgroundColor: '#202024'
            }}>
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center" style={{
                        width: "40px",
                        height: '40px',
                        borderRadius: "50%",
                        backgroundColor: '#5865F2'
                    }}>
                        <Avatar sx={{
                            width: "25px",
                            height: "20px"
                        }} src={discordImg} />
                    </div>
                    <div className="overflow-hidden w-14">
                        <h1>{profileData.displayName}</h1>
                        <h1 className="text-sm">{profileData.userName}</h1>
                    </div>
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