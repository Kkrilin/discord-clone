import { Avatar } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';
import { getAcceptFrientRequestUrl, requestConfig } from '../../helper/api';


type Props = {
    type: string
}

export default function RequestCard({ type, sender, receive, frId }: Props) {

    const handleAcceptRequest = () => {
        console.log('accept')
        // return
        axios.post(getAcceptFrientRequestUrl(frId), {}, requestConfig)
            .then((res) => console.log(res.data))
            .catch((error) => console.log(error))
    }
    return (
        <div>
            <div
                style={{
                    borderTop: "1px solid rgb(49, 49, 53)",
                }}
            >
                <div
                    style={{
                        padding: '8px 0 14px 8px',
                        borderRadius: "10px"
                    }}
                    className='friend_card flex justify-between items-center'
                >
                    <div className='flex items-center gap-3'>
                        <Avatar />
                        <div>
                            <h1>{type === 'recieve' ? sender.userName : receive.userName}</h1>
                            <h1>{type === 'recieve' ? sender.displayName : receive.displayName}</h1>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            {type === 'recieve' && < DoneIcon onClick={handleAcceptRequest} />}
                            <ClearIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}