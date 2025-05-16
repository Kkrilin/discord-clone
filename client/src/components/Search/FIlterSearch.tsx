import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';



export default function FIlterSearch() {
    const [search, setSearch] = useState('')
    return (
        <div className='py-3 px-6 relative flex items-center'>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    backgroundColor: "#121214",
                    borderRadius: "10px",
                    width: "100%",
                }}
                // className='search'
                placeholder='Search' type="search" name="" id="" />
            {search && <ClearIcon onClick={() => setSearch('')} className='animate serch_input absolute right-8 text-gray-500' />}
            {!search && <SearchIcon className=' animate serch_input absolute right-8 text-gray-500' />
            }
        </div>
    )
}