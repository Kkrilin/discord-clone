import { StatusEnum } from '../../helper/type';
import CustomAvatar from '../Utils/CustomAvatar';

type Props = {
    displayName: string,
    userName: string,
    status: StatusEnum
}

export default function ChannelSideBar({ channel }: Props) {
    console.log('qqqqqqqqqqqqqqq', channel)
    const serverMemeber = channel?.Server?.ServerMembers || []
    return (
        <div
            style={{
                backgroundColor: "#202024",
                width: "15vw",
                height: "100%",
                // padding: "16px",
                borderLeft: "1px solid rgb(49, 49, 53)",
            }}
            className='flex flex-col'
        >
            {serverMemeber.map(sm => {
                return (<>
                    <CustomAvatar statusSize={{ width: "12px", height: '12px', }} showStatusSize={{ width: "20px", height: '20px', }} containerSize={{ width: "40px", height: '40px', }} avatarSize={{ width: "25px", height: "25px" }} bgColor='#5865F2' status={sm.status} />
                    <h1>{sm.displayName}</h1>
                </>
                )
            })}
        </div>
    )
}