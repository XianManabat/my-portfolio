import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo / Name Section */}
                <div className="footer-section">
                    <h3>Jeremiah Felix M. Manabat</h3>
                    <p>Computer Engineering Student | Tech Founder | IoT Developer</p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/resume">Resume</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-section">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="mailto:your-email@gmail.com">xianmananat@gmail.com</a></li>
                        <li>Pampanga, Philippines</li>
                        <li>+63 945-996-5097</li>
                    </ul>
                </div>

                {/* Social Links Section */}
                <div className="footer-section">
                    <h4>Follow Me</h4>
                    <div className="social-links">
                        <a href="https://github.com/XianManabat" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/jeremiah-felix-manabat-2181972a1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/xianmanabat/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Jeremiah Felix M. Manabat. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer