import { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import axios from 'axios';
import { chatServerBaseUrl, requestConfig } from '../../helper/api';


export default function CreateServer({ setServers, handleClose }) {
    const userProfile = useSelector((state: RootState) => state.profile)
    const [isServerCreate, setIsServerCreate] = useState(false);
    const [serverName, setServerName] = useState(`${userProfile.userName}'s server`)
    const [error, setError] = useState('')
    const handleServerCreate = () => {
        if (!serverName.trim()) {
            setError('Server name is Empty')
            return
        }
        axios.post(chatServerBaseUrl, { serverName }, requestConfig)
            .then((res) => {
                setServers((prv) => [...prv, res.data.server])
                handleClose()
            }).catch((error) => toast.error('something error'))
    }

    return (
        <div>
            {!isServerCreate &&
                <div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-center text-2xl font-semibold'>Create Your Server</h1>
                        <p style={{ fontSize: '14px' }} className='text-center'>Your server is where you and your friends hang out. Make yours and start talking</p>
                    </div>
                    <div onClick={() => setIsServerCreate(true)} className='py-4'>
                        <div className=' cursor-pointer flex justify-between items-center opacity-85  rounded-md px-2 py-3 border border-neutral-700 hover:opacity-100'>
                            <h1 className='font-normal text-gray-100 text-sm px-2' >Create My Own</h1>
                            <KeyboardArrowRightIcon className='text-neutral-300' />
                        </div>
                    </div>
                    <div>
                        <div className='py-4'>
                            <h1 className='font-semibold text-gray-100 text-xl px-2 text-center' >Have an invite already?</h1>
                            <div style={{ backgroundColor: "#2e2e33" }} className='my-2 cursor-pointer opacity-85 hover:opacity-100 flex justify-center items-center border border-neutral-700 rounded-md'>
                                <button className=' cursor-pointer py-1 '>
                                    Join a Server
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {isServerCreate &&
                <div className='transition-transform' >
                    <div >
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-center text-2xl font-semibold'>Customize Your Server</h1>
                            <p style={{ fontSize: '14px' }} className='text-center'>Give your new server a personality with a name and an icon. You can always change it later</p>
                        </div>
                        <div>
                            <div className='py-5'>
                                <div className='server_input flex flex-col gap-4 uppercase font-bold'>
                                    <label htmlFor="s_name" className='flex justify-between'>
                                        server name
                                        <span className='text-red-800 capitalize' >{error}</span>
                                    </label>
                                    <input
                                        autoFocus value={serverName}
                                        onChange={(e) => {
                                            setServerName(e.target.value)
                                            setError('')
                                        }}
                                        id='s_name' className='rounded-md capitalize h-12 text-sm font-medium' type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <button
                            onClick={() => {
                                setIsServerCreate(false)
                                setError('')
                            }} >Back</button>
                        <button onClick={() => handleServerCreate()} className='bg-indigo-500 py-2 px-6 text-sm rounded-md' >Create</button>
                    </div>
                </div>}
        </div>
    )
}