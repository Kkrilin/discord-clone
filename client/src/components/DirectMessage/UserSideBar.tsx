import { Avatar } from '@mui/material'
import { MoreVerticalIcon, UserRoundCheck } from 'lucide-react'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CustomAvatar from '../Utils/CustomAvatar';
import { StatusEnum } from '../../helper/type';

type Props = {
    displayName: string,
    userName: string,
    status: StatusEnum
}

export default function UserSideBar({ displayName, userName, status }: Props) {
    return (
        <div
            style={{
                backgroundColor: "#202024",
                width: "18.4vw",
                height: "100%",
                // padding: "16px",
                borderLeft: "1px solid rgb(49, 49, 53)",
            }}
            className='flex flex-col'
        >
            <div
                style={{
                    backgroundColor: "#EC449C"
                }}
                className='h-1/7 relative'>
                <div className='flex justify-end p-2 gap-2'>
                    {userName
                        ? <UserRoundCheck style={{ backgroundColor: "#6D1F48", width: "30px", height: "30px", padding: "6px" }} className='rounded-full' />
                        : <PersonAddAltIcon style={{ backgroundColor: "#6D1F48", width: "30px", height: "30px", padding: "6px" }} className='rounded-full' />
                    }
                    <MoreVerticalIcon style={{ backgroundColor: "#6D1F48", width: "30px", height: "30px", padding: "5px" }} className='rotate-90 rounded-full' />
                </div>
                <div className='border-8 rounded-full border-neutral-900 flex items-center justify-center' style={{ position: "absolute", bottom: "-40px", left: "10px", width: "96px", height: '96px' }}>
                    <CustomAvatar statusSize={{ width: "16px", height: '16px', }} showStatusSize={{ width: "28px", height: '28px', }} containerSize={{ width: "80px", height: '80px', }} avatarSize={{ width: "40px", height: "40px", }} bgColor='orange' status={status} />
                </div>
            </div>
            <div style={{
                background: 'linear-gradient(#5F2543 5%, #624655 80%)',
                flex: "1"
            }}
            >
                <div className='py-12 px-4'>
                    <h1 className='text-2xl font-bold'>{displayName}</h1>
                    <h1 className='text-sm'>{userName}</h1>
                </div>
            </div>
        </div>
    )
}