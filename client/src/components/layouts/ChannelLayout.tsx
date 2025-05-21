import { Outlet } from "react-router-dom";
import ChannelLeftList from "../Channel/ChannelLeftList";

export default function ChannelLayout() {

    return (
        <>
            <ChannelLeftList />
            <Outlet />
        </>
    )
}