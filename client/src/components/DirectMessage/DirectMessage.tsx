import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Pin, UserPlus, UserRound } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Avatar } from '@mui/material';
import Search from '../Search/Search';
import { useLocation } from 'react-router-dom';
import UserSideBar from './UserSideBar';
import MessageInput from '../Message/MessageInput';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { config } from '../../config';
import { useParams } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { mergeMessagesWithDateAndTime } from '../../helper/utils';
import axios from 'axios';
import { getAllDmMessageUrl, requestConfig } from '../../helper/api';
import CustomAvatar from '../Utils/CustomAvatar';
import CircularLoader from '../Loader/CircularLoader';
const { serverBaseUrl } = config

let socket: Socket;


export type Messages = {
    userName: string,
    content: string,
    createdAt: string
}

export type ReduceedMessage = {
    userName: string,
    date: string,
    time: string,
    contents: string[]
}

export default function DirectMessage() {
    const [showProfile, setShowProfile] = useState(true)
    const [messages, setMessages] = useState<Messages[]>([])
    const [messageText, setMessageText] = useState('')
    const [loading, setLoading] = useState(false)
    const profileData = useSelector((state: RootState) => state.profile)
    const location = useLocation()
    const { friendData, isFriend } = location.state
    const messageEndRef = useRef<HTMLDivElement>(null)
    const params = useParams()
    const token = localStorage.getItem('token');
    console.log('isFriend', isFriend)
    console.log('friendData', friendData)
    useEffect(() => {
        setLoading(true)
        axios.get(`${getAllDmMessageUrl}/${params.dmId}`, requestConfig)
            .then((res) => {
                console.log(res.data.messages)
                setMessages(res.data.messages)
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }, [])
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!messageText.trim()) {
            return
        }
        const messagePayload = {
            content: messageText,
            // userName: profileData.userName,
            // messagerId: profileData.id,
            createdAt: new Date().toISOString(),
            directMessageId: params.dmId
        }
        if (e.key === 'Enter') {
            e.preventDefault()
            socket.emit('chat message', messagePayload);
            setMessageText('')
        }
    }
    useEffect(() => {
        if (!token) return;
        socket = io(serverBaseUrl, {
            auth: {
                token,
            },
            withCredentials: true,
        });

        socket.on('connect', () => {
            console.log('Socket connected');
        });

        socket.on('chat message', (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => {
            socket.disconnect();
        };
    }, [token]);

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "auto" })
    }, [messages])

    const mergedMessages = mergeMessagesWithDateAndTime(messages)

    if (loading) {
        <div
            className='flex justify-center items-center'
            style={{
                flex: "1",
                height: "100%",

            }}>
            <CircularLoader />
        </div>
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
                            {/* <Avatar sx={{ width: "25px", height: "25px" }} /> */}
                            <CustomAvatar statusSize={{ width: "8px", height: '8px' }} showStatusSize={{ width: "12px", height: '12px', }} containerSize={{ width: "25px", height: '25px', }} avatarSize={{ width: "16px", height: "16px" }} status={friendData.status} bgColor='orange' />
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
                    <div className='flex justify-end flex-col' style={{ flex: "1" }}>
                        <div className='message_scroll' style={{ maxHeight: "79vh", overflowY: "auto" }} >
                            <div className='px-4'>
                                <div className='flex flex-col gap-3'>
                                    <Avatar sx={{ width: "80px", height: "80px", backgroundColor: "pink" }} />
                                    <div className='flex flex-col gap-3.5'>
                                        <h1 className='text-4xl capitalize font-bold'>{friendData.displayName}</h1>
                                        <h1 className='text-2xl'>{friendData.userName}</h1>
                                    </div>
                                </div>
                                <p className='py-5'>this is the beginning of your direct message history with <strong className='capitalize' >{friendData.displayName}</strong>  </p>
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
                                        className={'bg-indigo-500 rounded-md font-semibold'}
                                    >{isFriend ? 'Remove Friend' : 'Add Friend'}</button>
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
                                <ul style={{ paddingTop: "20px" }} className='flex flex-col gap-5'>
                                    {mergedMessages.map((msg) => {
                                        return (
                                            <div className=' hover:bg-neutral-800'>
                                                <div className='flex px-5 gap-3 items-start'>
                                                    <div>
                                                        <Avatar sx={{ width: "40px", height: "40px", backgroundColor: "pink" }} />
                                                    </div>
                                                    <div>
                                                        <div className='flex gap-2 items-center'>
                                                            <h1 className='capitalize font-medium '>{msg.userName}</h1>
                                                            <div className='text-neutral-400 text-sm'> <span>{msg.date}</span>, <span>{msg.time}</span> </div>
                                                        </div>
                                                        {msg.contents.map((cont) => <li>{cont}</li>)}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div ref={messageEndRef}></div>
                                </ul>
                            }
                        </div>
                        <MessageInput handleKeyDown={handleKeyDown} messageText={messageText} setMessageText={setMessageText} displayName={friendData.displayName} />
                    </div>
                    {showProfile && <UserSideBar displayName={friendData.displayName} userName={friendData.userName} status={friendData.status} />}
                </div>
            </div>
        </div>
    )
}