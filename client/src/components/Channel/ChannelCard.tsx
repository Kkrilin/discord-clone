import { useNavigate } from "react-router-dom"

export default function ChannelCard({ channel }) {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`${channel.id}`)} className=' cursor-pointer text-neutral-500 flex items-center gap-3.5 px-1 hover:bg-neutral-800 hover:text-white rounded-md'>
      <span className='text-2xl' >
        #</span>
      <span className='font-medium text-[15px]' >
        {channel.name}
      </span>
    </div>
  )
}