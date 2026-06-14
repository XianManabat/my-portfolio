import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            // Fades out after scrolling 300px
            const newOpacity = Math.max(0, 1 - scrollY / 300)
            setOpacity(newOpacity)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <div className="hero"> 
            <div 
                className="messageBox"
                style={{ opacity: opacity, transition: 'opacity 0.3s ease' }}
            >
                <h1 className="title">
                    Hi, I am Jeremiah
                </h1>
                <p>Computer Engineering student | Pampanga State University | Building things that matter</p>
            </div>
            
            <img 
                className='earthBG'
                src="./src/assets/earth.png" 
                alt="moving"
                style={{ opacity: opacity, transition: 'opacity 0.3s ease' }}
            />
        </div>
    )
}

export default Hero