import GestureIcon from '@mui/icons-material/Gesture';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupsIcon from '@mui/icons-material/Groups';
import { Pin } from 'lucide-react';
import { Avatar } from '@mui/material';
import Search from '../Search/Search';
import MessageInput from '../Message/MessageInput';
import { useParams } from 'react-router-dom';

import CustomAvatar from '../Utils/CustomAvatar';
import ChannelSideBar from './ChannelSideBar';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { channelBaseurl, requestConfig, serverBaseUrl } from '../../helper/api';
import { io, Socket } from 'socket.io-client';
import { Messages } from '../DirectMessage/DirectMessage';


let socket: Socket;

export default function ChannelMessage() {
    const [showSideBar, setShowSideBar] = useState(true);
    const [channel, setChannel] = useState({})
    const [messages, setMessages] = useState<Messages[]>([])
    const [messageText, setMessageText] = useState('')
    const [loading, setLoading] = useState(false)
    const messageEndRef = useRef<HTMLDivElement>(null)
    const token = localStorage.getItem('token');
    const params = useParams()
    const { channelId } = params
    console.log(channelId, 1)
    const fetchChannel = async () => {
        try {
            const res = await axios.get(`${channelBaseurl}/${channelId}`, requestConfig)
            setChannel(res.data.channel)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchChannel()
    }, [channelId])

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
                            {/* <CustomAvatar statusSize={{ width: "8px", height: '8px' }} showStatusSize={{ width: "12px", height: '12px', }} containerSize={{ width: "25px", height: '25px', }} avatarSize={{ width: "16px", height: "16px" }} status={friendData.status} bgColor='orange' /> */}
                            <h1 className='flex items-center gap-3'> <span className='text-2xl text-neutral-500' >#</span>{channel.name}</h1>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <GestureIcon className='text-gray-400' />
                            <NotificationsIcon className='text-gray-400' />
                            <Pin className='text-gray-400 rotate-45' />
                            <GroupsIcon onClick={() => setShowSideBar(prv => !prv)} style={{
                                color: showSideBar ? 'white' : '#99a1af'
                            }} className='text-gray-400' />
                            <Search />
                        </div>
                    </div>
                </div>
                <div style={{ flex: "1" }} className='flex'>
                    <div className='flex justify-end flex-col' style={{ flex: "1" }}>
                        <div className='message_scroll' style={{ maxHeight: "79vh", overflowY: "auto" }} >
                            <div className='px-4'>
                                <div className='flex flex-col gap-3'>
                                    <Avatar sx={{ width: "65px", height: "65px", fontSize: "3rem", backgroundColor: "#404040" }} >
                                        #
                                    </Avatar>
                                    <h1 className='text-4xl font-bold'>
                                        Welcome to #{channel.name}!
                                    </h1>
                                    <p className='text-md font-medium text-neutral-500'>
                                        this is the start of the #{channel.name} channel.
                                    </p>
                                </div>
                            </div>
                            {/* {messages.length > 0 &&
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
                            } */}
                        </div>
                        <MessageInput handleKeyDown={handleKeyDown} messageText={messageText} setMessageText={setMessageText} displayName={channel.name} />
                    </div>
                    {showSideBar && <ChannelSideBar channel={channel} />}
                </div>
            </div>
        </div>
    )
}