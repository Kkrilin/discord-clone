import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Pin, UserPlus, UserRound } from 'lucide-react';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import Search from '../Channel/Search';
import { useLocation } from 'react-router-dom';
import UserSideBar from './UserSideBar';
import MessageInput from '../Message/MessageInput';



export default function DirectMessage() {
    const [showProfile, setShowProfile] = useState(true)
    const [messages, setMessages] = useState<string[]>([])
    const [messageText, setMessageText] = useState('')
    const location = useLocation()
    const friendData = location.state?.friendData


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            setMessages(prv => [...prv, messageText])
            setMessageText('')
        }
    }

    return (
        <div style={{
            flex: "1",
            height: "100%",
        }}>
            <div className='flex flex-col h-full'>
                <div
                    className='flex items-center'
                    style={{
                        borderBottom: "1px solid rgb(49, 49, 53)",
                        height: "46px",
                        fontSize: "15px",
                    }}>
                    <div className='flex justify-between items-center px-8 w-full'>
                        <div className='flex gap-2 items-center'>
                            <Avatar sx={{ width: "25px", height: "25px" }} />
                            <h1 className='flex items-center gap-3'> {friendData.displayName} </h1>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <WifiCalling3Icon className='text-gray-400' />
                            <VideocamIcon className='text-gray-400' />
                            <Pin className='text-gray-400 rotate-45' />
                            <UserPlus className='text-gray-400' />
                            <UserRound onClick={() => setShowProfile(prv => !prv)} style={{
                                color: showProfile ? 'white' : '#99a1af'
                            }} />
                            <Search />
                        </div>
                    </div>
                </div>
                <div style={{ flex: "1" }} className='flex'>
                    <div className='flex justify-end  flex-col' style={{
                        flex: "1", height: "80vh",
                        overflowY: "auto"
                    }}>
                        <div >
                            <div className='px-4'>
                                <div className='flex flex-col gap-3'>
                                    <Avatar sx={{ width: "80px", height: "80px", backgroundColor: "pink" }} />
                                    <div className='flex flex-col gap-3.5'>
                                        <h1 className='text-4xl capitalize font-bold'>{friendData.displayName}</h1>
                                        <h1 className='text-2xl'>{friendData.userName}</h1>
                                    </div>
                                </div>
                                <p className='py-5'>this is the beginning of your direct message history with <strong>{friendData.displayName}</strong>  </p>
                                <div className='flex items-center'>
                                    <div className='flex items-center'>
                                        <h1 className='flex items-center text-sm text-neutral-400'> 1 Mutual Server</h1>
                                        <span className='text-gray-600 mx-2'>&#8226;</span>
                                    </div>
                                    <button
                                        style={{
                                            padding: "2px 16px",
                                            color: 'white',
                                            marginLeft: "20px",
                                            fontSize: "12px"
                                        }}
                                        className='bg-indigo-500 rounded-md font-semibold'
                                    >Add Friend</button>
                                    <button
                                        style={{
                                            padding: "2px 16px",
                                            color: 'white',
                                            marginLeft: "20px",
                                            fontSize: "12px"
                                        }}
                                        className='bg-neutral-700 rounded-md font-semibold'
                                    >Block</button>
                                </div>
                            </div>
                            {messages.length > 0 &&
                                <ul className='overflow-y-auto'>
                                    {messages.map((msg) => <li>{msg}</li>)}
                                </ul>
                            }
                        </div>
                        <MessageInput handleKeyDown={handleKeyDown} messageText={messageText} setMessageText={setMessageText} displayName={friendData.displayName} />
                    </div>
                    {showProfile && <UserSideBar displayName={friendData.displayName} userName={friendData.userName} />}
                </div>
            </div>
        </div>
    )
}