import './infoPage.css'

function Info() {
    return(
        <div className='Info'>
            <div className='info-container'>
                <div className='info-image'>
                    <img src='./src/assets/profile.jpg' alt='Profile' />
                </div>
                <div className='info-text'>
                    <h2>About Me</h2>
                    <p>I'm Jeremiah Felix Manabat, a Computer Engineering student at Pampanga State University with a passion for building things that work in the real world. My work spans embedded systems, IoT, robotics, and software development from ESP32-based smart systems to autonomous robots and mobile apps.</p>
                </div>
            </div>
        </div>
    )
}

export default Info