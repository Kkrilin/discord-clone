import axios from "axios"
import { useState } from "react"
import { channelBaseurl, requestConfig } from "../../helper/api"


export default function CreateChannel({ server, setServer, handleClose }) {
    const [channelName, setChannelName] = useState('')
    console.log(server)
    const createChannel = async () => {
        try {
            const res = await axios.post(`${channelBaseurl}/${server.id}`, { channelName }, requestConfig)
            setServer(prv => {
                return {
                    ...prv,
                    Channels: [...prv.Channels, res.data.channel]
                }
            })
            handleClose()
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleCreateChannel = () => {
        createChannel()
    }
    return (
        <div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-left text-2xl font-medium'>Create Channel</h1>
                {/* <p style={{ fontSize: '14px' }} className='text-left'>channel type</p> */}
            </div>
            <div className='transition-transform' >
                <div >
                    <div>
                        <div className='py-5'>
                            <div className='server_input flex flex-col gap-4 uppercase font-bold'>
                                <label htmlFor="s_name" className='flex justify-between'>
                                    channel name
                                    {/* <span className='text-red-800 capitalize' >{error}</span> */}
                                </label>
                                <input
                                    onChange={(e) => setChannelName(e.target.value)}
                                    autoFocus
                                    value={channelName}
                                    id='s_name'
                                    className='rounded-md capitalize h-12 text-sm font-medium'
                                    type="text"
                                    placeholder="new-channel"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end gap-4 items-center'>
                    <button onClick={() => handleClose()} >cancel</button>
                    <button onClick={() => handleCreateChannel()} className='bg-indigo-500 py-2 px-6 text-sm rounded-md' >Create channel</button>
                </div>
            </div>
        </div>
    )
}