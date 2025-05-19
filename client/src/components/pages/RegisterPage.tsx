import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { days, monthMap, months, years } from '../../helper/data'
import CustomDropDown from '../../components/Utils/CustomDropDown'
import { validatePayload } from '../../helper/utils'
import { RegisterUserPayload } from '../../helper/type';
import { requestConfig, userRegisterUrl } from '../../helper/api';

export type DateOfBirth = {
    year: number
    month: string,
    day: number,
}

const intiaValue = {
    year: 0,
    month: '',
    day: 0,
}

function RegisterPage() {
    const [dateOfBirth, setDateOfBirth] = useState<DateOfBirth>(intiaValue)
    const [email, setEmail] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPasword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const payload: RegisterUserPayload = useMemo(() => {
        return {
            email,
            displayName,
            userName,
            password,
            dateOfBirth: ''
        }
    }, [password, displayName, userName, email])

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const dob = new Date(dateOfBirth.year, monthMap[dateOfBirth.month as keyof typeof monthMap], dateOfBirth.day)
        try {
            const isDobValid = validatePayload(payload, dateOfBirth)
            if (isDobValid) {
                payload.dateOfBirth = dob.toISOString()
            }
            axios.post(userRegisterUrl, payload, requestConfig).then((res) => {
                localStorage.setItem('token', res.data.token)
                navigate('/app')
                console.log(res.data)
            }).catch(err => {
                toast.error(err.message)
            })
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message)
                toast.error(error.message)
            } else {
                setError('An unknown error occurred')
                toast.error('An unknown error occurred')
            }
        }
    }

    return (
        <div
            className=' flex justify-center items-center'
            style={{
                height: "100vh",
                backgroundImage: 'linear-gradient(to right, #1A0556 , #234FD9)',
                backgroundRepeat: "no-repeat",
                overflow: "hidden"
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
                className='w-125 rounded-2xl'>
                <div className='px-10 py-6'>
                    <div className='flex flex-col'>
                        <h1 className='text-center text-xl'>Create an account</h1>
                        <h6 className='h-6 text-red-600'>{error ? error : ''}</h6>
                        <form onSubmit={(e) => handleFormSubmit(e)} className='flex flex-col gap-6 py-4'>
                            <div className='flex flex-col gap-2'>
                                <label className='uppercase red_strike' htmlFor="email">Email</label>
                                <input
                                    value={email}
                                    style={{
                                        backgroundColor: "#28292E",
                                    }}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setError('')
                                    }}
                                    className=' px-2 rounded-md h-10 focus:outline outline-amber-50' id='email' type="email" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='uppercase' htmlFor="d_name">Display name</label>
                                <input
                                    value={displayName}
                                    style={{
                                        backgroundColor: "#28292E"
                                    }}
                                    onChange={(e) => {
                                        setError('')
                                        setDisplayName(e.target.value)
                                    }
                                    }
                                    className='px-2 rounded-md h-10 focus:outline outline-amber-50' id='d_name' type="text" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='uppercase red_strike' htmlFor="user_name">user name</label>
                                <input
                                    value={userName}
                                    style={{
                                        backgroundColor: "#28292E"
                                    }}
                                    onChange={(e) => {
                                        setError('')
                                        setUserName(e.target.value)
                                    }

                                    }
                                    className='px-2 rounded-md h-10 focus:outline outline-amber-50' id='user_name' type="text" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='uppercase red_strike' htmlFor="password">password</label>
                                <input
                                    value={password}
                                    style={{
                                        backgroundColor: "#28292E"
                                    }}
                                    onChange={(e) => {
                                        setError('')
                                        setPasword(e.target.value)
                                    }
                                    }
                                    className='px-2 rounded-md h-10 focus:outline outline-amber-50' id='password' type="password" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='uppercase red_strike'>Date of birth</label>
                                <div className='flex gap-2 justify-between '>
                                    <CustomDropDown dropDowns={months} text='month' value={dateOfBirth.month} setDateOfBirth={setDateOfBirth} setError={setError} />
                                    <CustomDropDown dropDowns={days} text='day' value={dateOfBirth.day} setDateOfBirth={setDateOfBirth} setError={setError} />
                                    <CustomDropDown dropDowns={years} text='year' value={dateOfBirth.year} setDateOfBirth={setDateOfBirth} setError={setError} />
                                </div>
                            </div>
                            <div>
                                <button style={{
                                    backgroundColor: "#5865F2",
                                    display: "block",
                                    width: "100%",
                                    borderRadius: "6px"

                                }} type='submit' className='py-3'>Continue</button>
                                <p
                                    style={{
                                        fontSize: "12px",
                                        marginTop: "4px"
                                    }}
                                    className='text-gray-400'
                                >By registering, you agree to discord's <span className='text-indigo-400'>Terms of service</span> and <span className='text-indigo-400'>Privacy policy</span></p>
                            </div>
                        </form>
                    </div>

                    <div className='py-3'> <Link className='text-sky-500 text-sm ' to='/login'>Already have an account?</Link>  </div>
                </div>
            </div>
        </div>
    )
}


export default RegisterPage