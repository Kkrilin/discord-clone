import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useEffect, useState } from 'react';
import FIlterSearch from '../Search/FIlterSearch';
import RequestCard from './RequestCard';
import axios from 'axios';
import { requestConfig, sendFriendRequestUrl } from '../../helper/api';

export default function PendingRequest() {
    const [pendingRequest, setPendingRequest] = useState({})
    const { receivedRequest = [], sentRequest = [] } = pendingRequest

    const fetchRequest = async () => {
        try {
            const res = await axios.get(sendFriendRequestUrl, requestConfig)
            setPendingRequest(res.data.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchRequest()
    }, [])

    return (
        <div style={{ flex: "1" }}>
            {(receivedRequest.length > 0 || sentRequest.length > 0) && <FIlterSearch />}
            {receivedRequest.length > 0 &&
                <div className='px-6 py-4'>
                    <h1 className='text-sm'>Received <HorizontalRuleIcon /> {receivedRequest.length}</h1>
                    <div className='py-4'>
                        {receivedRequest.map((rec) => <RequestCard sender={rec.Sender} frId={rec.id} type='recieve' />)}
                    </div>
                </div>
            }
            {sentRequest.length > 0 &&
                <div className='px-6 py-4'>
                    <h1 className='text-sm'>Sent <HorizontalRuleIcon /> {sentRequest.length}</h1>
                    <div className='py-4'>
                        {sentRequest.map((sent) => <RequestCard receive={sent.Receiver} frId={sent.id} type='sent' />)}
                    </div>
                </div>
            }
            {!sentRequest.length && !receivedRequest.length && <div className='h-full flex justify-center items-center' >
                <h1 className='w-100 text-center text-sm my-50 text-neutral-400'>There is no pending friend requests. Click 'Add Friend to send friend request' </h1>
            </div>}
        </div>
    )
}