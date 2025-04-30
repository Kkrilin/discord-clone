import React from 'react'


const Footer = () => {
    return (
        <footer>
            <div className='flex justify-center items-center mt-20 '>
                <div className='flex flex-col justify-center items-center w-3xl'>
                    <h1 style={{ fontSize: "3rem", fontWeight: "900", lineHeight: "4rem" }} className='text-center uppercase'>you can't scroll anymore better go chat</h1>
                    <button style={{ marginTop: "1rem", fontSize: "20px", fontWeight: "500" }} className="flex justify-center items-center gap-2 px-6 py-4  bg-white text-black rounded-2xl hover:opacity-85">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2tQ9Jt"><g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g></svg>
                        Download for Linux</button>
                </div>
            </div>
            <div className='flex justify-center items-center mt-20 relative'>
                <img className='relative -bottom-6' width="1220" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/675005dc03927e9683fcaaee_Footer.webp" alt="" />
                <img className='absolute -bottom-40' width="400" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6729dc6215aff5ed59997842_Wumpus%C2%A0%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp" alt="" />
            </div>
            <div style={{ height: "100vh", backgroundColor: "#444BBD" }}>
                <div className='px-20 pt-25'>
                    <div className='flex justify-between  items-start'>
                        <div className='flex flex-col gap-10'>
                            <img width= "60" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e278299a53f5bf88615e90_Symbol.svg" alt="" />
                            <div>
                                <h4>Language</h4>
                                <div>
                                    <select className='w-60 h-10' name="" id="">
                                        <option value="English">English</option>
                                    </select>
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