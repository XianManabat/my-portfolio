import { SiGmail, SiLinkedin, SiInstagram, SiFacebook } from 'react-icons/si'

function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-700 px-8 py-4 flex justify-between items-center z-50">
            <h1 className="text-white font-bold text-xl">Jeremiah Felix M. Manabat</h1>

            <ul className="flex gap-8 text-gray-300">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">Resume</li>


                <li className="hover:text-white cursor-pointer"><SiGmail/></li>
                <li className="hover:text-white cursor-pointer"><SiInstagram/></li>
                <li className="hover:text-white cursor-pointer"><SiFacebook/></li>
            </ul>
        </nav>
    )
}

export default Navbar