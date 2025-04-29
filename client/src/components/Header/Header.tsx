import React from 'react'
import { Link } from 'react-router-dom'
// black logo
// https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/67ed8194f41d7d8eade32c90_Logo.svg

function Header() {
    return (
        <header>
            <div className='px-10'>
                <div className='flex justify-between items-center h-24'>
                    <Link to='/'>
                        <img width="150" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/67ece93be2524af5cf14dc1c_Logo-black-bg.svg" alt="" />
                    </Link>
                    <div >
                        <ul className='flex nav-link'>
                            <li>download</li>
                            <li>nitro</li>
                            <li>discover</li>
                            <li>safety</li>
                            <li>quests</li>
                            <li>support</li>
                            <li>blog</li>
                            <li>developers</li>
                            <li>carrers</li>
                        </ul>
                    </div>
                    <div>
                        <button className=' font-bold font-sans cursor-pointer capitalize px-4 py-2 bg-white text-black rounded-2xl transition-transform  hover:opacity-80'>log in</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header