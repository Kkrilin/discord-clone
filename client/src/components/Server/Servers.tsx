import { useState } from 'react'
import Server from './Server'


export default function Servers() {
  const [servers, setServers] = useState([])
  const [activeServertab, setActiveServerTab] = useState('dm')
  return (
    <div
      style={{
        backgroundColor: "#121214"
      }}
      className='flex flex-col gap-2 px-4'>
      <Server server={{ name: 'direct messages' }} type='dm' activeServertab={activeServertab} setActiveServerTab={setActiveServerTab} />
      {servers.length > 0 && servers.map(ser => <Server activeServertab={activeServertab} server={ser} type='server' setActiveServerTab={setActiveServerTab} />)}
      <Server server={{ name: 'add a server' }} type='add' activeServertab={activeServertab} setActiveServerTab={setActiveServerTab} />
      <Server server={{ name: 'discover' }} type='discover' activeServertab={activeServertab} setActiveServerTab={setActiveServerTab} />
      <Server server={{ name: 'download apps' }} type='download' activeServertab={activeServertab} setActiveServerTab={setActiveServerTab} />
    </div>
  )
}