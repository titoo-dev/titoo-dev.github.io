import '../assets/css/utils.css'

import { MenuIcon } from '@heroicons/react/solid'

function Navbar() {
    return (
        <div className="sticky bg-gray-900 top-0 left-0 right-0 h-20 w-screen flex flex-row items-center max-w-screen-2xl px-8 sm:px-20 mx-auto">
            {/* Brand */}
            <div className="w-64  flex flex-row items-center">
                <a href='#' className="text-sm sm:text-lg text-gray-300">titoo-dev</a>
            </div>

            {/* Navigation */}
            <div className="sm:flex-1 hidden sm:flex sm:flex-row sm:justify-end sm:items-center">
                <a className="navlink" href='#'>Work</a>
                <a className="navlink" href='#'>About</a>
                <a className="navlink" href='#'>Connect</a>
            </div>

            <div className= 'sm:hidden flex-1 flex flex-row justify-end items-center'>
                <MenuIcon className='text-gray-400 cursor-pointer' width={26} height={26} />
            </div>
        </div>
    )
}

export default Navbar