import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { requestConfig, userBaseUrl } from '../helper/api'
import axios from 'axios'
import { setProfileData } from '../redux/slice/profileSlice'
import { useEffect } from 'react'
// import { Toaster } from 'sonner';

export default function AppLayout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const fetchUserData = async () => {
        try {
            const res = await axios.get(userBaseUrl, requestConfig)
            console.log('res.data.user', res.data.user)
            dispatch(setProfileData(res.data.user))
        } catch (error) {
            localStorage.clear()
            navigate('/login')
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])
    return (
        <>
            <Outlet />
        </>
    )
}