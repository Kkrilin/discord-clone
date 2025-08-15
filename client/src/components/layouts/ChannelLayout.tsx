import { Outlet } from "react-router-dom";
import ChannelLeftList from "../Channel/ChannelLeftList";

export default function ChannelLayout() {
console.log('ChannelLayout')
    return (
        <>
            <ChannelLeftList />
            <Outlet />
        </>
    )
}