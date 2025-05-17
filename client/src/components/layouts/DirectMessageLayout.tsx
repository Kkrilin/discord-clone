import { Outlet } from "react-router-dom";
import DirectMessageLeftList from "../DirectMessage/DirectMessageLeftList";

export default function DirectMessageLayout() {

    return (
        <>
            <DirectMessageLeftList />
            <Outlet />
        </>
    )
}