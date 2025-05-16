import { useState } from 'react'
import Server from './Server'


export default function Servers() {
  const [servers, setServers] = useState([])
  return (
    <div
      style={{
        backgroundColor: "#121214"
      }}
      className='flex flex-col gap-2 px-4'>
      <Server server={{ name: 'direct messages' }} />
      {servers.length > 0 && servers.map(ser => <Server server={ser} />)}
      <Server server={{ name: 'add a server' }} />
      <Server server={{ name: 'discover' }} />
      <Server server={{ name: 'download apps' }} />
    </div>
  )
}