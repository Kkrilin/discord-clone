import { Avatar } from '@mui/material'
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
export default function FriendCard() {
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
                            <h1>name</h1>
                            <h1>Offline</h1>
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