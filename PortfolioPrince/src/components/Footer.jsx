import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import FacebookIcon from '../assets/images/facebook-icon.webp'
import TwitterIcon from '../assets/images/new-twitter-icon.jpg'
import LinkedinIcon from '../assets/images/linkedin-icon-squarq.jpg'
import GithubIcon from '../assets/images/github-icon-square.png'


const Footer = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_z5zhtpi', 'template_a8tnj72', form.current, {
                publicKey: 'kYCRf9E5uJQv_aYxC',
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Success!",
                        text: "Message sent successfull!",
                        icon: "success"
                    });
                },
                (error) => {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed message error feacing...',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                },
            );
    };

    return (
        <footer className='bg-black text-white py-8'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row items-center md:space-x-12 mb-4'>
                    <div className='flex-1 mb-4 md:mb-0'>
                        <h3 className='text-2xl font-bold mb-2'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500'>
                                Prince Kumar
                            </span>
                        </h3>
                        <p className='text-gray-400'>
                            Full-Stack Developer based in the India, specializing in web development and software development
                        </p>
                    </div>
                    <div className='flex-1 w-full'>
                        <form ref={form} onSubmit={sendEmail}
                            className='flex items-center justify-center'>
                            <input
                                type="email"
                                name='from_name'
                                placeholder='Enter email'
                                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                            />
                            <button type='submit'
                                className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg border border-green-500 focus:outline-none focus:border-green-400 font-bold hover:text-red-700'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row items-center justify-between'>
                    <p className='text-sm text-gray-400'>
                        &copy; 2026
                        <a href="https://github.com/prince531"
                            target='_blank'
                            className='hover:underline'>
                            <span className='hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500'>
                                &nbsp;Prince Kumar.
                            </span>
                        </a>
                        &nbsp;All rights reserved
                    </p>
                    <div className='flex space-x-4 my-4 md:my-0'>
                        <a href="https://fcebook.com"
                            target='_blank' >
                            <img src={FacebookIcon}
                                className='w-6 h-6 rounded'
                                alt="img"
                            />
                        </a>
                        <a href="https://twitter.com"
                            target='_blank' >
                            <img src={TwitterIcon}
                                className='w-6 h-6 rounded'
                                alt="img"
                            />
                        </a>
                        <a href="https://linkedin.com"
                            target='_blank' >
                            <img src={LinkedinIcon}
                                className='w-6 h-6 rounded'
                                alt="img"
                            />
                        </a>
                        <a href="https://github.com/prince531"
                            target='_blank' >
                            <img src={GithubIcon}
                                className='w-6 h-6 rounded'
                                alt="img"
                            />
                        </a>
                    </div>
                    <div className='flex space-x-4 my-4 md:my-0'>
                        <a href="/"
                            className="text-gray-400 hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="/"
                            className="text-gray-400 hover:text-white">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;