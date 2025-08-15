import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { requestConfig, userBaseUrl } from '../../helper/api'
import AppHeader from '../AppHeader/AppHeader'
import Servers from '../Server/MainNavBarOption'
import ProfileBar from '../Profile/ProfileBar'
import { setProfileData } from '../../redux/slice/profileSlice'
import { toast } from 'sonner'

export default function AppLayout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(true);
    const fetchUserData = async () => {
        setLoader(true)
        try {
            const res = await axios.get(userBaseUrl, requestConfig)
            dispatch(setProfileData(res.data.user))
        } catch (error) {
            localStorage.clear()
            toast.error(error.message)
            navigate('/login')
        } finally {
            setLoader(false)
        }
    }



    useEffect(() => {
        fetchUserData()
    }, [])

    if (loader) {
        return <h1>Loading ...........</h1>
    }
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
                        borderTopLeftRadius: "10px",
                        overflow: 'hidden'
                    }}
                    className='flex'>
                    <Outlet />
                </div>
                <ProfileBar />
            </div>
        </div>
    )
}