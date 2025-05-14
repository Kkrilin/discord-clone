import { useEffect, useState } from 'react';
import { languageData } from '../../helper/data'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const Footer = () => {
    const [language, setLanguage] = useState('English')
    const [focus, setFocus] = useState<number | null>(null)
    const [showDropDown, setShowDropDown] = useState(false)

    useEffect(() => {
        const resetShowDropDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setShowDropDown(false)
            }
        }
        window.addEventListener('keydown', resetShowDropDown)
        return () => window.removeEventListener("keydown", resetShowDropDown)
    }, [])

    return (
        <footer onClick={(e) => {
            console.log(e.target)
        }}>
            <div className='flex justify-center items-center mt-20 '>
                <div className='flex flex-col justify-center items-center w-3xl'>
                    <h1 style={{ fontSize: "3rem", fontWeight: "900", lineHeight: "4rem" }} className='text-center uppercase'>you can't scroll anymore better go chat</h1>
                    <button style={{ marginTop: "1rem", fontSize: "20px", fontWeight: "500" }} className="flex justify-center items-center gap-2 px-6 py-4  bg-white text-black rounded-2xl hover:opacity-85">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2tQ9Jt"><g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g></svg>
                        Download for Linux</button>
                </div>
            </div>
            <div className='flex justify-center items-center mt-20 relative'>
                <img className='relative -bottom-5' width="1000" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/675005dc03927e9683fcaaee_Footer.webp" alt="" />
                <img className='absolute -bottom-36' width="350" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6729dc6215aff5ed59997842_Wumpus%C2%A0%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp" alt="" />
            </div>
            <div style={{ paddingBottom: "45px", backgroundColor: "#444BBD" }}>
                <div className='px-20 pt-25'>
                    <div className='flex justify-between  items-start'>
                        <div className='flex flex-col gap-10'>
                            <img width="60" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e278299a53f5bf88615e90_Symbol.svg" alt="" />
                            <div>
                                <h4>Language</h4>
                                <div className='relative' onClick={() => setShowDropDown(prve => !prve)}>
                                    <div
                                        style={{
                                            backgroundColor: "#ffffff1a",
                                            border: "1px #ffffff1a",
                                            marginTop: "10px",
                                            borderRadius: "16px"
                                        }}
                                        className='px-6 py-4 flex w-80 justify-between items-center'>
                                        <span>{language}</span>
                                        <KeyboardArrowDownIcon />
                                    </div>
                                    {showDropDown && (
                                        <div
                                            style={{
                                                transformStyle: "preserve-3d",
                                                marginTop: "10px",
                                                border: "1px #ffffff1a",
                                                borderRadius: "16px",
                                                position: "absolute",
                                                zIndex: "10",
                                                width: "100%",
                                                paddingTop: "10px",
                                                marginRight: "10px",
                                                opacity: "1",
                                                backgroundColor: "#5b62c7"
                                            }}
                                        >
                                            <ul
                                                style={{
                                                    width: "98%"
                                                }}
                                                className='custom-scroll h-60 overflow-y-auto flex flex-col'>
                                                {languageData.map((lan, i) => (
                                                    <li
                                                        onClick={() => {
                                                            setFocus(null)
                                                            setLanguage(lan)
                                                        }}
                                                        className='px-8 py-4'
                                                        style={{
                                                            backgroundColor: focus === i ? "#6C72CD" : "",
                                                            margin: "6px 0 0 4px",
                                                            borderRadius: "16px",
                                                            fontSize: "1rem"

                                                        }}
                                                        onMouseLeave={() => setFocus(null)} onMouseEnter={() => setFocus(i)}>{lan}</li>))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3>Social</h3>
                                <div className='flex gap-8'>
                                    <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4237b6a1c4fa714f76_x.svg" alt="" />
                                    <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7a0_instagram.svg" alt="" />
                                    <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4173c1df8be608c8a2_facebook.svg" alt="" />
                                    <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7ad_youtube.svg" alt="" />
                                    <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4152ae5860036dadf1_tiktok.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='footer_bottom flex gap-32 relative z-10'>
                            <div>
                                <h4 className='pb-2 text-gray-400 font-bold'>Product</h4>
                                <ul className='flex flex-col gap-4'>
                                    <li>Download</li>
                                    <li>Nitro</li>
                                    <li>Status</li>
                                    <li>App Directory</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='pb-2 text-gray-400 font-bold'>Company</h4>
                                <ul className='flex flex-col gap-4'>
                                    <li>About</li>
                                    <li>Jobs</li>
                                    <li>Brand</li>
                                    <li>Newsroom</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='pb-2 text-gray-400 font-bold' >Resources</h4>
                                <ul className='flex flex-col gap-4'>
                                    <li>College</li>
                                    <li>Support</li>
                                    <li>Blog</li>
                                    <li>StreamKit</li>
                                    <li>Creators</li>
                                    <li>Community</li>
                                    <li>Developers</li>
                                    <li>Quests</li>
                                    <li>Official 3rd Party Merch</li>
                                    <li>Feedback</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='pb-2 text-gray-400 font-bold'>Policies</h4>
                                <ul className='flex flex-col gap-4'>
                                    <li>Terms</li>
                                    <li>Privacy</li>
                                    <li>Cookie Settings</li>
                                    <li>Guidelines</li>
                                    <li>Acknowledgements</li>
                                    <li>Licenses</li>
                                    <li>Company Information</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='pt-25'>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/67ac9b4644222140ae614b06_Wordmark.svg" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer