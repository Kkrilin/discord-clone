import { useState } from 'react';
import Addfriend from '../Friend/Addfriend';
import Friends from '../Friend/Friends';
import DirectMessageNavBar from './DirectMessageNavBar';
import DirectMessageSideBar from './DirectMessageSideBar';
import PendingRequest from '../Request/PendingRequest';



export default function DirectMessageRightDetail() {
    const [action, setAction] = useState('all')
    return (
        <div style={{
            flex: "1",
            height: "100%"
        }}>
            <div className='flex flex-col h-full'>
                <DirectMessageNavBar action={action} setAction={setAction} />
                <div style={{
                    flex: "1",
                }} className='flex'>
                    {action === 'addFriend' && < Addfriend />}
                    {['all', 'online'].includes(action) && <Friends />}
                    {action === 'pending' && <PendingRequest />}
                    <DirectMessageSideBar />
                </div>
            </div>
        </div>
    )
}