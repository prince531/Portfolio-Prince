import React from 'react';
import AboutImage from '../assets/Prince.jpeg'

const About = () => {
    return (
        <div className='bg-black text-white py-20'
            id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500'>
                        About Me
                    </span>
                </h2>
                <p className='text-lg mb-8'>
                    I am a Java Software Developer fresher, developing, testing, and deploying web applications.
                    I have a strong understanding of software engineering principles . My greatest accomplishment
                    was creating a highly effective multithreaded program to optimize the performance of a large
                    scale application. I have excellent problem-solving skills, an eye for detail and the ability
                    to learn and apply new technologies quickly. I am confident that I can be an asset to your
                    organization and make significant contributions to your team.
                </p>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt="Image"
                        className='w-100 h-180 rounded object-cover mb-8 md:mb-0' />
                    <div className='flex-1'>
                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 m-4'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform 
                                        transition-transform duration-300 hover:scale-105 w-11/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>JAVA</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 m-4'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                                        transform transition-transform duration-300 hover:scale-105 w-10/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Spring Boot</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 m-4'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                                        transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>React JS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 m-4'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                                        transform transition-transform duration-300 hover:scale-105 w-10/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>C & C++</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 m-4'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                                        transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>DSA with C</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 m-4'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                                        transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>MySQL</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 m-4'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                                        transform transition-transform duration-300 hover:scale-105 w-10/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>JavaScript</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 m-4'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                                        transform transition-transform duration-300 hover:scale-105 w-10/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Tailwind CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 m-4'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                                        transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Github, Copilot & Chat-Gpt</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 mr-4 ml-4 mb-4 mt-6'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                                        transform transition-transform duration-300 hover:scale-105 w-10/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Third-Party Libraries and API Integration</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 m-4'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                                        transform transition-transform duration-300 hover:scale-105 w-10/12'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-12 flex justify-between text-center'>
                            <div className='hidden md:inline'>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    3+
                                </h3>
                                <p>Years of Experience</p>
                            </div>
                            <div className='hidden md:inline'>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    20+
                                </h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className='hidden md:inline'>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    5+
                                </h3>
                                <p>Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;