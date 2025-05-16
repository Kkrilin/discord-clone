import { Button } from '@mui/material'
import { useState } from 'react'


export default function SearchToAddFriend() {
    const [search, setSearch] = useState('')
    return (
        <div
            className='add_friend py-3 relative flex items-center'>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    backgroundColor: "#1E1F22",
                    borderRadius: "10px",
                    width: "100%",
                    height: '50px',
                }}
                autoFocus
                placeholder='You can add friends with thier Discord username.' type="search" name="" id="" />
            {<Button
                style={{
                    fontSize: '10px',
                    position: 'absolute',
                    right: '0',
                    backgroundColor: search ? '#5865F2' : 'rgb(59,66,138)',
                    color: search ? 'white' : '#BFC4C5',
                    borderRadius: "8px",
                    transition: 'all, 0.1s ease-in-out',
                    fontWeight: '600',
                    cursor: search ? 'pointer' : 'not-allowed'
                }}
                // disabled={search ? false : true}
                variant='contained'
            > Send friend Request</Button>}
        </div>
    )
}