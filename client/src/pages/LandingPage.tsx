import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'


function LandingPage() {
    return (
        <div style={{
            minHeight: "100vh",
            backgroundImage: 'linear-gradient(to bottom right, black 10%, #1a2081 80%)',
            backgroundRepeat: "no-repeat"
        }}>
            <div>
                <Header />
            </div>
            <div>
                <Main />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage