import { Avatar, IconButton } from "@mui/material"
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import discordImg from '../../assets/Discord-Symbol-White.svg'

export default function ProfileBar() {
    return (
        <div className="absolute bottom-2 left-2">
            <div className="flex p-2 rounded-md" style={{
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
                            height: "25px"
                        }} src={discordImg} />
                    </div>
                    <div>
                        <h1>kundan</h1>
                        <h1 className="text-sm">Invinsible</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center">
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