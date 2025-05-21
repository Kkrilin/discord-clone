import { useEffect, useState } from 'react'
import MainNavBarOption from './Server'
import axios from 'axios'
import { chatServerBaseUrl, requestConfig } from '../../helper/api'


export default function Servers() {
  const [servers, setServers] = useState([])
  const [activeNavbarTab, setActiveNavbarTab] = useState('dm')
  const [activeSeverTab, setActiveServerTab] = useState('')
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    axios.get(chatServerBaseUrl, requestConfig)
      .then((res) => {
        setServers(res.data.servers)
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      {!loading &&
        <div
          style={{
            backgroundColor: "#121214"
          }}
          className='flex flex-col gap-2 px-4'>
          <MainNavBarOption type='dm' activeNavbarTab={activeNavbarTab} setActiveNavbarTab={setActiveNavbarTab} />
          {servers.length > 0 && servers.map(ser => <MainNavBarOption activeSeverTab={activeSeverTab} setActiveServerTab={setActiveServerTab} activeNavbarTab={activeNavbarTab} server={ser} type='server' setActiveNavbarTab={setActiveNavbarTab} />)}
          <MainNavBarOption setServers={setServers} type='add' activeNavbarTab={activeNavbarTab} setActiveNavbarTab={setActiveNavbarTab} />
          <MainNavBarOption type='discover' activeNavbarTab={activeNavbarTab} setActiveNavbarTab={setActiveNavbarTab} />
          <MainNavBarOption type='download' activeNavbarTab={activeNavbarTab} setActiveNavbarTab={setActiveNavbarTab} />
        </div>
      }
    </>
  )
}