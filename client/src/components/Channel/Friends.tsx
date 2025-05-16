import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useState } from 'react';
import FriendCard from './FriendCard';
import FIlterSearch from '../Search/FIlterSearch';


export default function Friends() {
    const [friends, setFriends] = useState(Array(3).fill('null'))

    return (
        <div style={{ flex: "1" }}>
            <FIlterSearch />
            <div className='px-6 py-4'>
                <h1 className='text-sm'>All friends <HorizontalRuleIcon /> {friends.length}</h1>
                <div className='py-4'>
                    {friends.map(() => <FriendCard />)}
                </div>
            </div>
        </div>
    )
}