import './Resume.css'

function Resume() {
    return(
        <div className="Resume">

            <div className='resumeSection'>
                <img src='./src/assets/Resume.jpg' alt='Resume' />
            </div>

            <div className='dividerLine'>
                <span className='divider-text'>Certificates</span>
                <div className='divider-line'></div>
            </div>

            {/* Add grid container here */}
            <div className='certificate-grid'>
                <div className='certificate-card'>
                    <img src='./src/certificates/1.jpg' alt='Certificate 1' />
                </div>
                <div className='certificate-card'>
                    <img src='./src/certificates/2.jpg' alt='Certificate 2' />
                </div>
                <div className='certificate-card'>
                    <img src='./src/certificates/3.jpg' alt='Certificate 3' />
                </div>
                <div className='certificate-card'>
                    <img src='./src/certificates/4.jpg' alt='Certificate 4' />
                </div>
                <div className='certificate-card'>
                    <img src='./src/certificates/5.jpg' alt='Certificate 5' />
                </div>
                <div className='certificate-card'>
                    <img src='./src/certificates/6.jpg' alt='Certificate 6' />
                </div>
                <div className='certificate-card'>
                    <img src='./src/certificates/7.jpg' alt='Certificate 7' />
                </div>
                <div className='certificate-card'>
                    <img src='./src/certificates/8.jpg' alt='Certificate 8' />
                </div>
                <div className='certificate-card'>
                    <img src='./src/certificates/9.jpg' alt='Certificate 9' />
                </div>
                <div className='certificate-card'>
                    <img src='./src/certificates/10.jpg' alt='Certificate 10' />
                </div>
            </div>
        </div>
    )
}

export default Resume