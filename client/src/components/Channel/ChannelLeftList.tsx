import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import ServerOptionPopOver from '../Popover/ServerPopOver/ServerOptionPopOver';
import ClearIcon from '@mui/icons-material/Clear';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { chatServerBaseUrl, requestConfig } from '../../helper/api';
import ChannelCards from './ChannelCards';
import ChannelCategories from './ChannelCategories';

export default function ChannelLeftList() {
    const [server, setServer] = useState({})
    const [showServerOption, setShowServerOption] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    const { Channels: channels = [], ChannelCategories: channelCategories = [] } = server
    const { serverId } = params
    console.log('params channel left list', params)

    const fetchServerData = async () => {
        try {
            const res = await axios.get(`${chatServerBaseUrl}/${serverId}`, requestConfig)
            setServer(res.data.server)
            console.log(res.data.server)
        } catch (error) {
            console.log(error.messages)
        }
    }

    useEffect(() => {
        fetchServerData()
    }, [serverId])

    return (
        <div
            style={{
                fontSize: "13px",
                backgroundColor: "#121214",
                height: "100%",
                borderTopLeftRadius: "10px",
                width: "12rem"
            }}
        >
            <div className='transition-all hover:bg-neutral-800'>
                <ServerOptionPopOver server={server} setServer={setServer} showServerOption={showServerOption} setShowServerOption={setShowServerOption}>
                    <div
                        style={{
                            borderBottom: "1px solid rgb(49, 49, 53)",
                            padding: "6px 10px",
                            height: "46px"
                        }}
                        className='flex items-center justify-between'
                        onClick={() => setShowServerOption(prv => !prv)}
                    >
                        <h1 className='text-sm capitalize font-bold'>
                            {server.name}
                        </h1>
                        {showServerOption && <ClearIcon className='text-neutral-600 w-3 h-3' />}
                        {!showServerOption && <KeyboardArrowDownIcon className='text-neutral-600' />}
                    </div>
                </ServerOptionPopOver>
            </div>
            <div className='p-2'>
                <ChannelCards channels={channels} />
                {channelCategories.length > 0 &&
                    <ChannelCategories server={server} setServer={setServer} channelCategories={channelCategories} />
                }
            </div>
        </div>
    )
}