import HelpIcon from '@mui/icons-material/Help';
import InboxIcon from '@mui/icons-material/Inbox';

export default function HomePage() {
    return (
        <div className="bg-black h-lvh">
            <div
                style={{
                    backgroundColor: "#121214",
                    height: "4%"
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
            <div style={{ backgroundColor: "#1A1A1E", height: "96%" }}>

            </div>
        </div>
    )
}