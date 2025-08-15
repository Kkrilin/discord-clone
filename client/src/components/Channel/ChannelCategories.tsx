import ChannelCategory from './ChannelCategory';

export default function ChannelCategories({ channelCategories, server, setServer }) {
    console.log('')
    return (
        <nav className='navbar p-2'>
            {
                channelCategories.map((cc) => <ChannelCategory server={server} setServer={setServer} channelCategory={cc} />)}
        </nav>
    )
}