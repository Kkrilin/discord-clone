import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
                            <NavLinkWithDetail text="safety" />
                            <NavLinkWithDetail text="quests" />
                            <NavLinkWithDetail text="support" />
                            <NavLinkWithDetail text="blog" />
                            <NavLinkWithDetail text="developers" />
                            <li>careers</li>
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

interface NavLinkWithDetailProps {
    text: string
}

function NavLinkWithDetail({ text }: NavLinkWithDetailProps) {
    const [isHover, setIsHover] = useState('')
    const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        e.preventDefault()
        setIsHover('enter')
    }
    const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        e.preventDefault()
        setIsHover('leave')
    }
    return (
        <li onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
            {text}
            <KeyboardArrowDownIcon className={`${isHover === 'enter' ? 'arrowUp' : isHover === 'leave' ? 'arrowDown' : 'arrow'}`} />
        </li>
    )
}

export default Header