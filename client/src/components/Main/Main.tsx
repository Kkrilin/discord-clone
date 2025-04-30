
const Main = () => {
    return (
        <main>
            <div className="flex px-75  justify-center items-center">
                <div className="w-125">
                    <div>
                        <h3 className="heading_h1 uppercase">
                            group Chat that's all fun & games
                        </h3>
                    </div>
                    <div style={{ fontWeight: "400", marginTop: "2rem", lineHeight: "1.8rem" }} className="text-xl">
                        <p>
                            Discord is great for playing games and chilling with friends, or even building a worldwide community.
                            Customize your own space to talk, play, and hang out.
                        </p>
                    </div>
                </div>
                <div>
                    <img width="800" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664daa37ea162cadf9603500_Art.webp" alt="" />
                </div>
            </div>
            <div className="flex justify-center items-center" style={{ marginTop: "2.5rem" }}>
                <div className="flex justify-center items-center gap-16 ">
                    <button className="flex justify-center items-center gap-2 p-4 bg-white text-black rounded-2xl hover:text-blue-700 cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2tQ9Jt"><g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g></svg>
                        Download for Linux</button>
                    <button style={{ fontWeight: "500", fontSize: "20px" }} className="p-5 bg-blue-600 text-white rounded-2xl hover:opacity-80 cursor-pointer">Open Discord in your browser</button>
                </div>
            </div>
        </main>
    )
}

export default Main