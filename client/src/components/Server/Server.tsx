import { Avatar } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import discordImg from '../../assets/Discord-Symbol-White.svg';
import { useNavigate } from "react-router-dom";
import CreateServerModal from "../Utils/Modal/CreateServerModal";
import { useEffect } from "react";

export default function MainNavBarOption({ server, type, setActiveNavbarTab, activeNavbarTab, activeSeverTab, setActiveServerTab, setServers }) {
    const navigate = useNavigate()
    const style = {
        width: "40px",
        height: "40px",
        borderRadius: " 10px",
        backgroundColor: activeNavbarTab === type ? "rgb(78, 84, 239)" : ''
    }
    if (activeNavbarTab === 'server') {
        style.backgroundColor = server && activeSeverTab === server.id ? "rgb(78, 84, 239)" : ''
    }
    useEffect(() => {
        if (activeNavbarTab === 'dm') {
            navigate('@me')
        }
    }, [])

    const handleMainNabarOptionClick = (navbarType: string, serverId: string) => {
        setActiveNavbarTab(navbarType)
        if (navbarType === 'dm') {
            navigate('@me')
        }
        if (navbarType === 'server' && server) {
            navigate(`${server.id}`)
            setActiveServerTab(serverId)
        } else {
            setActiveServerTab('')
        }
    }
    return (
        <div
            onClick={() => handleMainNabarOptionClick(type, server?.id)}
            style={style}
            className="server_button flex justify-center items-center cursor-pointer "
        >
            <button >
                {type === 'dm' && <Avatar sx={{ width: "25px", height: "20px" }} src={discordImg} />}
                {type === 'server' && <h1 className="font-normal"  >{(server.name as string).substring(0, 3)}</h1>}
                {type === 'add' && <CreateServerModal setServers={setServers} ><AddCircleIcon /></CreateServerModal>}
                {type === 'discover' && <ExploreIcon />}
                {type === 'download' && <VerticalAlignBottomIcon />}
            </button>
        </div>
    )
}