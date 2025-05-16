import HelpIcon from '@mui/icons-material/Help';
import InboxIcon from '@mui/icons-material/Inbox';
import Servers from '../components/Server/Servers';
import DirectMessage from '../components/Channel/DirectMessage';
import DirectMessagePage from '../components/Channel/DirectMessagePage';

export default function HomePage() {
    return (
        <div className=" h-lvh">
            <div
                style={{
                    backgroundColor: "#121214",
                    height: "4vh"
                }}
                className='flex justify-between items-center px-3 py-2'>
                <div></div>
                {/* <header className='flex justify-between  py-2'> */}
                <h1>Friends</h1>
                <div
                    style={{
                        color: "#AAAAB1"
                    }}
                    className='flex gap-5 text-sm'>
                    <InboxIcon />
                    <HelpIcon />
                </div>
                {/* </header> */}
            </div>
            <div
                style={{ backgroundColor: "#1A1A1E", height: "96vh" }}
                className='flex '
            >
                <Servers />
                <div
                    style={{
                        borderLeft: "1px solid rgb(49, 49, 53)",
                        borderTop: "1px solid rgb(49, 49, 53)",
                        overflow: "hidden",
                        flex: "1",
                        height: "100%",
                        borderRadius: "10px"
                    }}
                    className='flex'>
                    <DirectMessage />
                    <DirectMessagePage />
                </div>
            </div>
        </div>
    )
}