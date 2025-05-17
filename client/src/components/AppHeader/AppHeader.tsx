import HelpIcon from '@mui/icons-material/Help';
import InboxIcon from '@mui/icons-material/Inbox';


export default function AppHeader() {
    return (
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
    )
}