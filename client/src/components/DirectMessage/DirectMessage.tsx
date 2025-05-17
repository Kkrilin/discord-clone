import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Pin, UserPlus, UserRound, UserRoundCheck } from 'lucide-react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton, { Button } from '@mui/material';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import Search from '../Channel/Search';
import { useLocation } from 'react-router-dom';
import UserSideBar from './UserSideBar';
import MessageInput from '../Message/MessageInput';



export default function DirectMessage() {
    const [showProfile, setShowProfile] = useState(true)
    const location = useLocation()
    const friendData = location.state?.friendData
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
                <div style={{
                    flex: "1",
                }} className='flex'>
                    <div className='flex items-end' style={{ flex: "1" }}>
                        <div>
                            <div className=' px-4'>
                                <div className='flex flex-col '>
                                    <Avatar sx={{ width: "80px", height: "80px", backgroundColor: "pink" }} />
                                    <h1 className='text-2xl font-bold'>{friendData.displayName}</h1>
                                    <h1 className='text-sm'>{friendData.userName}</h1>
                                </div>
                                <p>this is the beginning of your direct message history with <strong>{friendData.displayName}</strong>  </p>
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
                        </div>
                        {/* <MessageInput /> */}
                    </div>
                    {showProfile && <UserSideBar displayName={friendData.displayName} userName={friendData.userName} />}
                </div>
            </div>
        </div>
    )
}