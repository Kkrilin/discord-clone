import EditIcon from '@mui/icons-material/Edit';
import CustomAvatar from '../../Utils/CustomAvatar';
import Online from '../../Status/Online';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import axios from 'axios';
import { requestConfig, userBaseUrl } from '../../../helper/api';
import { toast } from 'sonner';
import { StatusEnum } from '../../../helper/type';
import Invisible from '../../Status/Invisible';
import Idle from '../../Status/Idle';
import DoNotDisturb from '../../Status/DoNotDisturb';
import { setProfileStatus } from '../../../redux/slice/profileSlice';
import { useDispatch } from 'react-redux';

type Props = {}

export default function EditProfile({ profile, setShowStatusOption, showStatusOption }: Props) {
    const dispatch = useDispatch()
    const updateUserStatus = async (status: string) => {
        try {
            const res = await axios.post(userBaseUrl, { status }, requestConfig)
            console.log('res------', res.data)
            dispatch(setProfileStatus(status))
        } catch (error) {
            toast.error(error.status)
        }
    }

    const handleUserStatus = (status: string) => {
        updateUserStatus(status)
    }
    const statusStyle = { width: "14px", height: '14px' }
    let statusComponents = <Online statusSize={statusStyle} />
    if (profile.status === StatusEnum.Invisible) {
        statusComponents = <Invisible statusSize={statusStyle} />
    }
    if (profile.status === StatusEnum.Idle) {
        statusComponents = <Idle statusSize={statusStyle} />
    }
    if (profile.status === StatusEnum.DoNotDisturb) {
        statusComponents = <DoNotDisturb statusSize={statusStyle} />
    }

    return (
        <div className='border-4 h-100 w-78 border-indigo-700 flex flex-col relative overflow-hidden' >
            <div
                style={{
                    backgroundColor: "#173b64"
                }}
                className='h-30 relative' >
                <div className='flex justify-end p-2 gap-2'>
                </div>
                <div className='border-8 rounded-full border-neutral-900 flex items-center justify-center' style={{ position: "absolute", bottom: "-40px", left: "10px", width: "96px", height: '96px' }}>
                    <CustomAvatar statusSize={{ width: "16px", height: '16px', }} showStatusSize={{ width: "28px", height: '28px', }} containerSize={{ width: "84px", height: '84px', }} avatarSize={{ width: "40px", height: "40px", }} bgColor='#173b64' status={profile.status} />
                </div>
            </div>
            <div
                style={{
                    background: 'linear-gradient(#343763 5%, #525365 80%)',
                    flex: "1",
                    padding: "50px 20px 10px 20px",
                }}>
                <div>
                    <div className='text-white'>
                        <h1 className='text-2xl font-bold capitalize'>{profile.displayName}</h1>
                        <h1 className='text-sm'>{profile.userName}</h1>
                    </div>
                </div>
                <div style={{ backgroundColor: "#4f517f", borderRadius: "10px", marginTop: "10px" }}>
                    <div className='text-neutral-300 border-b border-gray-500 p-2 mx-2'>
                        <div className='cursor-pointer flex gap-2 items-center p-2 rounded-md opacity-60 hover:bg-sky-600 hover:opacity-100 '>
                            <EditIcon style={{ width: "14px", height: '14px' }} />
                            <h3 className='text-sm capitalize '>Edit Profile</h3>
                        </div>
                    </div>
                    <div className='text-neutral-300  p-2 mx-2'>
                        <div onClick={() => setShowStatusOption(!showStatusOption)} className='cursor-pointer flex gap-2 items-center p-2 rounded-md  hover:bg-sky-600 hover:opacity-100'>
                            {statusComponents}
                            <h3 className='flex-1 text-sm capitalize flex justify-between items-center' >{profile.status}<KeyboardArrowRightIcon /> </h3>
                        </div>
                        {showStatusOption &&
                            <div className={`${showStatusOption ? 'animate_status_option' : ''} fixed rounded-md left-82 bottom-10 text-white bg-neutral-800`}>
                                <div onClick={() => setShowStatusOption(false)} className='p-4 flex flex-col'>
                                    <h1 onClick={() => handleUserStatus('online')} className='p-2 hover:bg-neutral-700 rounded-md cursor-pointer'>Online</h1>
                                    <h1 onClick={() => handleUserStatus('idle')} className='p-2 hover:bg-neutral-700 rounded-md cursor-pointer'>Idle</h1>
                                    <h1 onClick={() => handleUserStatus('dnd')} className='p-2 hover:bg-neutral-700 rounded-md cursor-pointer'>Do Not Disturb</h1>
                                    <h1 onClick={() => handleUserStatus('invisible')} className='p-2 hover:bg-neutral-700 rounded-md cursor-pointer'>Invisible</h1>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}