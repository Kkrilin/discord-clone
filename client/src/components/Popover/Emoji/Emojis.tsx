import React from 'react'
import EmojiPicker, { Theme } from 'emoji-picker-react';

type Props = {
    setMessageText: React.Dispatch<React.SetStateAction<string>>
}

const Emojis = ({ setMessageText }: Props) => {
    // const handleEmojisClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //     console.log(e, e.currentTarget?.innerText, 'ddddddddddd')
    //     setMessageText((state) => state + ' ' + (e.currentTarget?.innerText || e.target?.innerText || ''))
    // }
    const handleEmojisClick = (emojiObj: { emoji: string }) => {
        setMessageText((state: string) => `${state} ${emojiObj.emoji}`)
    }
    return (
        // <div className='w-100 h-60 p-2 bg-neutral-800'>
        //     <div onClick={(e) => handleEmojisClick(e)} className='size-4'>
        //         {String.fromCodePoint('0x1f603')}
        //     </div>
        // </div>
        <EmojiPicker theme={Theme.DARK} onEmojiClick={handleEmojisClick} height={500} width={400} />
    )
}

export default Emojis