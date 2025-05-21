import ChannelCard from "./ChannelCard"

export default function ChannelCards({ channels }) {
    return (
        <nav className='navbar p-2'>
            {channels.map((channel) => <ChannelCard channel={channel} />)}
        </nav>
    )
}