import ChannelCard from "./ChannelCard"

export default function ChannelCards({ channels }) {
    return (
        <>
            {channels.map((channel) => <ChannelCard channel={channel} />)}
        </>
    )
}