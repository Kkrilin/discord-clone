import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useEffect, useState } from 'react';
import FriendCard from './FriendCard';
import FIlterSearch from '../Search/FIlterSearch';
import axios from 'axios';
import { friendBaseUrl, requestConfig } from '../../helper/api';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Friends() {
    const [friends, setFriends] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(friendBaseUrl, requestConfig)
            .then((res) => setFriends(res.data.friends))
            .catch((error) => console.log(error))
    }, [])

    const handleFriendCardClick = () => {
        navigate('a')
    }

    return (
        <div style={{ flex: "1" }}>
            <FIlterSearch />
            <div className='px-6 py-4'>
                <h1 className='text-sm'>All friends <HorizontalRuleIcon /> {friends.length}</h1>
                <div className='py-4'>
                    {friends.map((fr) => <div onClick={() => navigate('a', { state: { friendData: fr } })}>  <FriendCard friend={fr} /></div>)}
                </div>
            </div>
        </div>
    )
}