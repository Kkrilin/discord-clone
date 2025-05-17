import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { requestConfig, userBaseUrl } from '../../helper/api'
import AppHeader from '../AppHeader/AppHeader'
import Servers from '../Server/Servers'
import ProfileBar from '../Profile/ProfileBar'
import { setProfileData } from '../../redux/slice/profileSlice'

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
        <div className="h-lvh flex flex-col">
            <AppHeader />
            <div
                style={{ backgroundColor: "#1A1A1E", height: "96vh" }}
                className='flex  relative'
            >
                <Servers />
                <div
                    style={{
                        borderLeft: "1px solid rgb(49, 49, 53)",
                        borderTop: "1px solid rgb(49, 49, 53)",
                        flex: "1",
                        height: "100%",
                        borderRadius: "10px"
                    }}
                    className='flex'>
                    <Outlet />
                </div>
                <ProfileBar />
            </div>
        </div>
    )
}