import React from 'react';
import { FaEnvelope, FaUserAlt } from 'react-icons/fa'
import { IoCall } from "react-icons/io5";
import { PiMapPinAreaFill } from "react-icons/pi";
import { MdOutlineMessage } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
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
        <div className='bg-black text-white py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500'>
                        Contact Us
                    </span>
                </h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <div className='flex-1'>
                        <h3 className='text-3xl font-bold  bm-4'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                Let's Talk
                            </span>
                        </h3>
                        <p>I'am open to discussing web development projects or partnership opportunities.</p>
                        <div className='mb-4 mt-8'>
                            <FaEnvelope className="inline-block text-green-400 mr-2 text-lg"></FaEnvelope>
                            <a href="mailto:royalrajkumar7277@gmail.com" className='hover:underline'>
                                royalrajkumar7277@gmail.com
                            </a>
                        </div>
                        <div className='mb-4'>
                            <IoCall className="inline-block text-green-400 mr-2 text-lg"></IoCall>
                            <a href="tel:+917277899948">+917277899948</a>
                        </div>
                        <div className='mb-4'>
                            <PiMapPinAreaFill className="inline-block text-green-400 mr-2 text-xl"></PiMapPinAreaFill>
                            <span>DLF Ankur Vihar, Loni Ghaziabad, Uttar Pradesh.</span>
                        </div>
                    </div>
                    <div className='flex-1 w-full'>
                        <form className='space-y-4' ref={form} onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="name" className='block mb-2'>
                                    <FaUserAlt className="inline-block text-green-400"></FaUserAlt>
                                    Your Name
                                </label>
                                <input type="text" name='from_name'
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter your name'
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className='block mb-2'>
                                    <FaEnvelope className="inline-block text-green-400 mr-2 text-lg"></FaEnvelope>
                                    E-mail
                                </label>
                                <input type="email" name='from_name'
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter email'
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className='block mb-2'>
                                    <MdOutlineMessage className="inline-block text-green-400 mr-2 text-lg"></MdOutlineMessage>
                                    Enter Message
                                </label>
                                <textarea type="text" name='message'
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter message'
                                    rows="5"
                                />
                            </div>
                            <button className='cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;