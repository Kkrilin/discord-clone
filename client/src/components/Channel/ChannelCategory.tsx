import AddIcon from '@mui/icons-material/Add';
import ChannelCards from './ChannelCards'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import CreateChannelModal from '../Utils/Modal/CreateChannelModal';

export default function ChannelCategory({ channelCategory, server, setServer }) {
    const [showChannel, setShowChannel] = useState(true)
    return (
        <>
            <div className='flex justify-between items-center p-2' onClick={() => setShowChannel(prv => !prv)}>
                <span className=' font-medium capitalize text-neutral-500 hover:text-white flex-1 flex items-center    ' >
                    {channelCategory.name}
                    <KeyboardArrowDownIcon
                        style={{
                            padding: "4px",
                            transition: 'transform 0.1s ease',
                            transform: showChannel ? 'rotate(-90deg)' : 'rotate(0deg)',
                        }}
                    />
                </span>
                <CreateChannelModal server={server} setServer={setServer} channelCategory={channelCategory}>
                    <AddIcon
                        className="text-md text-neutral-500 font-medium p-1 hover:text-white cursor-pointer"
                        titleAccess="Add Channel"
                    />
                </CreateChannelModal>

            </div >
            {showChannel && <ChannelCards channels={channelCategory.Channels} />
            }
        </>
    )
}