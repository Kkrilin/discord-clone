import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';

type Props = {
    action: string,
    setAction: React.Dispatch<React.SetStateAction<string>>
}

export default function DirectMessageNavBar({ action, setAction }: Props) {
    return (
        <div
            className='flex items-center'
            style={{
                borderBottom: "1px solid rgb(49, 49, 53)",
                height: "46px",
                fontSize: "15px",
            }}>
            <div className='flex justify-between items-center px-8 w-full'>
                <div className='flex gap-2 items-center'>
                    <h1 className='flex items-center gap-3'> <GroupIcon /> Friends <span className='text-gray-600'>&#8226;</span></h1>
                    <div className='action_button flex items-center gap-5'>
                        <button
                            className='rounded-md'
                            onClick={() => setAction('online')}
                            style={{
                                padding: "4px 10px",
                                backgroundColor: action === 'online' ? "#29292D" : ''
                            }}
                        >Online</button>
                        <button
                            className='rounded-md'
                            onClick={() => setAction('pending')}
                            style={{
                                padding: "4px 10px",
                                backgroundColor: action === 'pending' ? "#29292D" : ''
                            }}
                        >Pending</button>
                        <button
                            onClick={() => setAction('all')}
                            className='rounded-md'
                            style={{
                                padding: "4px 10px",
                                backgroundColor: action === 'all' ? "#29292D" : ''
                            }}>All</button>
                    </div>
                    <button
                        onClick={() => setAction('addFriend')}
                        style={{
                            padding: "4px 16px",
                            backgroundColor: action === 'addFriend' ? "#242640" : '',
                            color: action === 'addFriend' ? "#6071CA" : 'white',
                            marginLeft: "20px"
                        }}
                        className='bg-indigo-500 rounded-md'
                    >Add Friend</button>
                </div>
                <div className='relative'>
                    <MessageIcon className='text-gray-400' />
                    <span className='absolute -bottom-2 -right-1 font-bold text-xl text-white'>+</span>
                </div>
            </div>
        </div>
    )
}