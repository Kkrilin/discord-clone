import React, { useEffect, useState } from 'react'

type Props = {
    children: React.ReactNode
}

export default function MyModal({ children }: Props) {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setOpen(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])
    return (
        <div>
            <button onClick={() => setOpen(true)} className='border-2 hover:bg-amber-400 cursor-pointer max-w-max p-1 rounded'>{children}</button>

            <PopOver open={open} setOpen={setOpen} opacity={0.8} position={{ left: 50, top: 50 }} />
        </div>
    )
}

interface PopOverProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    opacity: number
    position: {
        left: number;
        top: number;
    }
}

function PopOver({ open, setOpen, opacity, position }: PopOverProps) {
    if (!open) {
        return null
    }

    return (
        <>
            <div style={{ opacity: `${opacity}` }} onClick={() => setOpen(false)} className='back_drop'>
            </div>
            <div style={{
                left: `${position.left || 50}%`,
                top: `${position.top || 50}%`,
            }} className=' bg-white fixed border-solid border-2 border-amber-950  -translate-x-1/2 -translate-y-1/2 p-4'>
                <div>
                    <h1>model open</h1>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Provident rem delectus impedit ipsum minus?
                        Dolorem dignissimos architecto eius accusamus quis minus eveniet est, consequuntur, amet, modi
                        ipsum nostrum sunt perferendis?
                    </p>
                </div>
                <div className='flex justify-end'>
                    <button className='border-solid border-2 border-blue-800 py-1 px-4 rounded-2xl cursor-pointer hover:bg-amber-50' onClick={() => setOpen(false)}>close</button>
                </div>
            </div>
        </>
    )
}