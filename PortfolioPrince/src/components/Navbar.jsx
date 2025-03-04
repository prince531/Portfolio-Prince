import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
            <div className='container py-2 flex justify-center md:justify-between items-center'>
                <div className='text-2xl font-bold hidden md:inline'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500'>
                        Prince Kumar
                    </span>
                </div>
                <div className='space-x-4'>
                    <a href="#home">
                        <span className='hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500 text-lg'>
                            Home
                        </span>
                    </a>
                    <a href="#about">
                        <span className='hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500 text-lg'>
                            About Me
                        </span>
                    </a>
                    <a href="#contact">
                        <span className='hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500 text-lg'>
                            Contact Us
                        </span>
                    </a>
                    <a href="#service">
                        <span className='hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500 text-lg'>
                            Services
                        </span>
                    </a>
                    <a href="#project">
                        <span className='hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500 text-lg'>
                            Projects
                        </span>
                    </a>
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' >
                    <a href="#contact">
                        Connect Me
                    </a>
                </button>
            </div>
        </nav>
    )
}
export default Navbar;