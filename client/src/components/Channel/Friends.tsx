import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useEffect, useState } from 'react';
import FriendCard from './FriendCard';
import FIlterSearch from '../Search/FIlterSearch';
import axios from 'axios';
import { directMessageUrlBaseUrl, friendBaseUrl, requestConfig } from '../../helper/api';
import { useNavigate } from 'react-router-dom';

export default function Friends() {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        axios.get(friendBaseUrl, requestConfig)
            .then((res) => setFriends(res.data.friends))
            .catch((error) => console.log(error))
    }, [])


    const navigate = useNavigate()
    const handleFrienCardClick = (friend) => {
        const payload = {
            user: friend
        }
        axios.post(directMessageUrlBaseUrl, payload, requestConfig)
            .then((res) => {
                console.log(res.data)
                navigate(`${res.data.directMessage.id}`, { state: { friendData: friend, isFriend: true } })
            })
            .catch((error) => console.log(error))
    }

    return (
        <div style={{ flex: "1" }}>
            <FIlterSearch />
            <div className='px-6 py-4'>
                <h1 className='text-sm'>All friends <HorizontalRuleIcon /> {friends.length}</h1>
                <div className='py-4'>
                    {friends.map((fr) => <div onClick={() => handleFrienCardClick(fr)}>  <FriendCard friend={fr} /></div>)}
                </div>
            </div>
        </div>
    )
}