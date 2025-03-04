import React from 'react';
import HeroImage from '../assets/hreoimage2.jpg';

const PDF_FILE_URL = 'http://localhost:5173/Prince_Kumar.pdf'
const Hero = () => {
    const downloadFileAtURL = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };

    return (
        <div className='bg-black text-white text-center py-16'>
            <img src={HeroImage}
                alt="Image"
                className='border-8 border-cyan-400 mx-auto mb-8 w-68 h-68 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
            />
            <h1 className='text-4xl font-bold'>
                I'm&nbsp;
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    Prince Kumar
                </span>
                , Full-Stack Developer
            </h1>
            <p className='mt-4 text-lg text-gray-300'>
                I specialize in build  backend and frontend morden and responsive web applications.
            </p>
            <div className='mt-8 space-x-4'>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                    <a href="#contact">
                        Contact With Me
                    </a>
                </button>
                <button className='bg-gradient-to-r from-pink-400 to-yellow-600 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer'
                    onClick={() => { downloadFileAtURL(PDF_FILE_URL) }}>
                    Download CV
                </button>
            </div>
        </div>
    )
}
export default Hero;