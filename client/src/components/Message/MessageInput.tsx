import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Gamepad2, Gift, Meh, Sticker } from 'lucide-react';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojisPopOver from '../Popover/Emoji/EmojiPopOver';

type MessageInputProps = {
    setMessageText: React.Dispatch<React.SetStateAction<string>>,
    displayName: string,
    messageText: string,
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export default function MessageInput({ displayName, messageText, setMessageText, handleKeyDown }: MessageInputProps) {

    return (
        <div className='relative flex items-center px-2 py-6'>
            <input
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                style={{
                    backgroundColor: "#222327",
                    borderRadius: "10px",
                    width: "100%",
                    height: "55px",
                    border: '1px solid rgb(49, 49, 53)',
                    paddingLeft: "60px",
                    fontSize: "1rem"
                }}
                autoFocus
                className='placeholder:text-sm'
                placeholder={`Message @${displayName}`} type="input" name="" id="" />
            <AddCircleIcon className='absolute text-neutral-400 left-6' />
            <div className='flex  items-center absolute right-6 text-neutral-400 gap-4'>
                <Gift className='w-6' />
                <GifBoxIcon className='w-6' />
                <Sticker className='w-6' />
                <EmojisPopOver setMessageText={setMessageText}  >
                    <Meh className='w-6' />
                </EmojisPopOver>
                <Gamepad2 className='w-6' />
                {/* <div>
                    {String.fromCodePoint('0x1f603')}
                </div> */}
            </div>
        </div>
    )
}