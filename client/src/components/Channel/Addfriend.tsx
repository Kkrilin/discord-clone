import SearchToAddFriend from "../Search/SearchToAddFriend"

export default function Addfriend() {
    return (
        <div style={{
            flex: "1",
        }}>
            <div
                style={{
                    borderBottom: "1px solid rgb(49, 49, 53)",
                }} className='px-6 py-4'>
                <div>
                    <h1 className='text-xl font-bold'>Add Friend </h1>
                    <p className="text-sm" style={{ color: '#b2b2b0' }}>You can add friends with thier Discord username.</p>
                </div>
                <SearchToAddFriend />
            </div>
        </div>
    )
}