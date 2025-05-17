import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';

import { useState } from 'react';
import Addfriend from '../Channel/Addfriend';
import Friends from '../Channel/Friends';
import PendingRequest from '../Channel/PendingRequest';



export default function DirectMessageRightDetail() {
    const [action, setAction] = useState('all')
    return (
        <div style={{
            flex: "1",
            height: "100%"
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
                            <h1 className='flex items-center gap-3'> <GroupIcon /> Friends <span className='text-gray-600'>&#8226;</span></h1>
                            <div className='action_button flex items-center gap-5'>
                                <button
                                    className='rounded-md'
                                    onClick={() => setAction('online')}
                                    style={{
                                        padding: "4px 10px",
                                        backgroundColor: action === 'online' ? "#29292D" : ''
                                    }}
                                >Online</button>
                                <button
                                    className='rounded-md'
                                    onClick={() => setAction('pending')}
                                    style={{
                                        padding: "4px 10px",
                                        backgroundColor: action === 'pending' ? "#29292D" : ''
                                    }}
                                >Pending</button>
                                <button
                                    onClick={() => setAction('all')}
                                    className='rounded-md'
                                    style={{
                                        padding: "4px 10px",
                                        backgroundColor: action === 'all' ? "#29292D" : ''
                                    }}>All</button>
                            </div>
                            <button
                                onClick={() => setAction('addFriend')}
                                style={{
                                    padding: "4px 16px",
                                    backgroundColor: action === 'addFriend' ? "#242640" : '',
                                    color: action === 'addFriend' ? "#6071CA" : 'white',
                                    marginLeft: "20px"
                                }}
                                className='bg-indigo-500 rounded-md'
                            >Add Friend</button>
                        </div>
                        <div className='relative'>
                            <MessageIcon className='text-gray-400' />
                            <span className='absolute -bottom-2 -right-1 font-bold text-xl text-white'>+</span>
                        </div>
                    </div>
                </div>
                <div style={{
                    flex: "1",
                }} className='flex'>
                    {action === 'addFriend' && < Addfriend />}
                    {['all', 'online'].includes(action) && <Friends />}
                    {action === 'pending' && <PendingRequest />}
                    <div
                        style={{
                            backgroundColor: "#202024",
                            width: "23vw",
                            padding: "16px",
                            borderLeft: "1px solid rgb(49, 49, 53)",
                        }}
                    >
                        <h1 className='text-xl font-bold'>Active now</h1>
                        <div className='flex gap-2 flex-col items-center text-gray-400 py-4 px-4'>
                            <h1 className='text-white'>it's quite for now...</h1>
                            <p className='text-center text-sm'>When friends start an activity &#8722; like playing a game or hanging out on voice &#8722; we'll show it here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}