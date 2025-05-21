export default function DirectMessageSideBar() {
    return (
        <div
            style={{
                backgroundColor: "#202024",
                width: "23vw",
                padding: "16px",
                borderLeft: "1px solid rgb(49, 49, 53)",
            }}
        >
            <h1 className='text-xl font-bold'>Active now</h1>
            <div className='flex gap-2 flex-col items-center text-gray-400 py-4 px-4'>
                <h1 className='text-white'>it's quite for now...</h1>
                <p className='text-center text-sm'>When friends start an activity &#8722; like playing a game or hanging out on voice &#8722; we'll show it here</p>
            </div>
        </div>
    )
}