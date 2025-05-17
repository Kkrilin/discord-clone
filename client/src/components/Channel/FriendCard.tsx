import { Avatar } from '@mui/material'
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function FriendCard({ friend }) {
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
                            <h1>{friend.userName}</h1>
                            <h1>{friend.displayName}</h1>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <MessageIcon />
                            <MoreVertIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}