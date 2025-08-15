import { StatusEnum } from '../../helper/type';

type Props = {
    displayName: string,
    userName: string,
    status: StatusEnum
}

export default function ChannelSideBar({ channel }: Props) {
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
        </div>
    )
}