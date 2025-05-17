import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { requestConfig, userLoginUrl } from '../helper/api'


function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleLogin = () => {
        if (!email) {
            toast.error('email is empty')
            return
        }
        if (!password) {
            toast.error('paaword is empty')
            return
        }
        const payload = {
            email,
            password
        }
        axios.post(userLoginUrl, payload, requestConfig).then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            navigate('/app')
        }).catch(error => {
            if (error instanceof Error) {
                toast.error(error.message)
            } else if (error instanceof AxiosError) {
                toast.error(error.response?.data.message)
            } else {
                toast.error("something went wrong")
            }
        })
    }
    return (
        <div
            className=' flex justify-center items-center'
            style={{
                height: "100vh",
                backgroundImage: 'linear-gradient(to right, #1A0556 , #234FD9)',
                backgroundRepeat: "no-repeat"
            }}
        >
            <header className='absolute top-12 left-12'>
                <Link to='/'>
                    <img width="150" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e90ab9506850e8a5dd48e3_Discrod_MainLogo.svg" alt="" />
                </Link>
            </header>
            <div
                style={{
                    backgroundColor: "#323339"
                }}
                className='w-140 rounded-2xl'>
                <div className='px-10 py-6'>
                    <div className='flex flex-col'>
                        <h1 className='text-center text-2xl font-bold'>Welcome back!</h1>
                        <p
                            style={{
                                color: "#AEAFB2"
                            }}
                            className='text-center'>We're so excited to see you again!</p>
                        <div className='flex flex-col gap-10 py-5'>
                            <div className='flex flex-col gap-2'>
                                <label className='uppercase red_strike' htmlFor="email">Email or Phone Number</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className='px-2 rounded-md h-12' id='email' type="email" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='uppercase red_strike' htmlFor="password">Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className=' px-2 rounded-md h-12 ' id='password' type="password" />
                            </div>
                        </div>
                    </div>
                    <h1 className='text-sky-400'>Forget your password?</h1>
                    <div onClick={handleLogin} className=' cursor-pointer my-2 flex justify-center bg-blue-700 rounded-md hover:opacity-85'>
                        <button className='py-3'>Log In</button>
                    </div>
                    <div><span>Need an account</span> <Link className='text-sky-400' to='/register'>Register</Link>  </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage