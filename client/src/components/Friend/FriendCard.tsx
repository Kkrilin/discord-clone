import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CustomAvatar from '../Utils/CustomAvatar';


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
                        <CustomAvatar statusSize={{ width: "12px", height: '12px', }} showStatusSize={{ width: "20px", height: '20px', }} containerSize={{ width: "40px", height: '40px', }} avatarSize={{ width: "25px", height: "25px" }} bgColor='orange' status={friend.status} />

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