import GroupIcon from '@mui/icons-material/Group';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';


export default function DirectMessageLeftList() {
    return (
        <div
            style={{
                fontSize: "13px",
                backgroundColor: "#121214",
                height: "100%",
                borderTopLeftRadius: "10px",
                width: "12rem"
            }}
        >
            <div
                style={{
                    borderBottom: "1px solid rgb(49, 49, 53)",
                    padding: "6px",
                    height: "46px",
                }}
            >
                <button
                    className='mx-1 hover:opacity-85'
                    style={{
                        padding: "6px 18px",
                        backgroundColor: "#222225",
                        borderRadius: "10px",
                        width: "10.7rem"

                    }}
                    type='button'>
                    Find or start a conve...
                </button>
            </div>
            <div className='mx-1 my-3'>
                <nav className='navbar'>
                    <Link to='/app/@me'>
                        <h1> <GroupIcon /> Friends</h1>
                    </Link>
                    <h1> <ElectricBoltIcon />Nitro</h1>
                    <h1> <StorefrontIcon /> Shop</h1>
                </nav>
            </div>
            <div>
                <div className='flex justify-between items-center px-4 text-gray-400'>
                    <h1 className='text-sm'>Direct messages</h1>
                    <button
                        style={{
                            fontSize: "1.2rem",
                            fontWeight: '500'
                        }}
                    >+</button>
                </div>
            </div>
        </div>
    )
}