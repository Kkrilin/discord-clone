import { useState } from "react"


export default function CreateChannelCategory() {
    const [channelCategoryName, setChannelCategoryName] = useState('')
    return (
        <div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-left text-2xl font-semibold'>Create Channel</h1>
                {/* <p style={{ fontSize: '14px' }} className='text-left'>channel type</p> */}
            </div>
            <div className='transition-transform' >
                <div >
                    <div>
                        <div className='py-5'>
                            <div className='server_input flex flex-col gap-4 uppercase font-bold'>
                                <label htmlFor="s_name" className='flex justify-between'>
                                    Category name
                                    {/* <span className='text-red-800 capitalize' >{error}</span> */}
                                </label>
                                <input
                                    onChange={(e) => setChannelCategoryName(e.target.value)}
                                    autoFocus
                                    value={channelCategoryName}
                                    id='s_name'
                                    className='rounded-md capitalize h-12 text-sm font-medium'
                                    type="text"
                                    placeholder="new category"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end gap-4 items-center'>
                    <button>cancel</button>
                    <button className='bg-indigo-500 py-2 px-6 text-sm rounded-md' >Create Category</button>
                </div>
            </div>
        </div>
    )
}