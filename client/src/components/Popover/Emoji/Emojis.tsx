import React from 'react'

type Props = {}

const Emojis = ({ setMessageText }: Props) => {

    const handleEmojisClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        console.log(e, e.currentTarget?.innerText, 'ddddddddddd')
        setMessageText((state) => state + ' ' + (e.currentTarget?.innerText || e.target?.innerText || ''))
    }

    return (
        <div className='w-100 h-60 p-2 bg-neutral-800'>
            <div onClick={(e) => handleEmojisClick(e)} className='size-4'>
                {String.fromCodePoint('0x1f603')}
            </div>
        </div>
    )
}

export default Emojis