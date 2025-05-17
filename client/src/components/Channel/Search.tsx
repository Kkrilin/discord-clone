import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';



export default function Search() {
    const [search, setSearch] = useState('')
    return (
        <div className='relative flex items-center'>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    backgroundColor: "#121214",
                    borderRadius: "10px",
                    height: "36px"
                }}
                placeholder='Search' type="search" name="" id="" />
            <SearchIcon className=' animate serch_input absolute right-3 text-gray-500' />
        </div>
    )
}