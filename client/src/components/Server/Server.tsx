import { Avatar } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import discordImg from '../../assets/Discord-Symbol-White.svg'

export default function Server({ server, type, setActiveServerTab, activeServertab }) {
    const style = {
        width: "50px",
        height: "50px",
        borderRadius: " 16px",
        backgroundColor: activeServertab === type ? "rgb(78, 84, 239)" : ''
    }
    return (
        <div
            onClick={() => setActiveServerTab(type)}
            style={style}
            className="server_button flex justify-center items-center cursor-pointer "
        >
            <button >
                {type === 'dm' && <Avatar sx={{ width: "25px", height: "20px" }} src={discordImg} />}
                {type === 'server' && <h1>{(server.name as string).substring(0, 3)}</h1>}
                {type === 'add' && <AddCircleIcon />}
                {type === 'discover' && <ExploreIcon />}
                {type === 'download' && <VerticalAlignBottomIcon />}
            </button>
        </div>
    )
}