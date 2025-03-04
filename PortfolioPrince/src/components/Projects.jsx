import React from 'react';
import employeeImage from '../assets/images/EmployeeImage.jpg'
import bookImage from '../assets/images/book.jpg'
import bankImage from '../assets/images/bank.jpg'
import currencyImage from '../assets/images/currency.jpg'
import weatherImage from '../assets/images/weather.jpg'
import webImage from '../assets/images/web-application.jpg'
import weatherImage1 from '../assets/images/weather1.jpg'
import apiImage from '../assets/images/context_api.jpg'
import mdImage from '../assets/images/menudriven.jpg'
const projects = [
    {
        id: 1,
        name: "Employee Management System",
        technologies: "Spring Boot",
        image: employeeImage,
        github: "https://github.com/prince531",
    },
    {
        id: 2,
        name: "Book Management System",
        technologies: "Spring Boot",
        image: bookImage,
        github: "https://github.com/prince531",
    },
    {
        id: 3,
        name: "Bank Management System",
        technologies: "Spring Boot",
        image: bankImage,
        github: "https://github.com/prince531",
    },
    {
        id: 4,
        name: "Currency Converter",
        technologies: "Currency Converter With React",
        image: currencyImage,
        github: "https://github.com/prince531",
    },
    {
        id: 5,
        name: "Weather Application",
        technologies: "Weather Application With React",
        image: weatherImage,
        github: "https://github.com/prince531",
    },
    {
        id: 6,
        name: "Web Application",
        technologies: "Web Application With React",
        image: webImage,
        github: "https://github.com/prince531",
    },
    {
        id: 7,
        name: "Weather Application",
        technologies: "JAVA, JSP & SERVLET",
        image: weatherImage1,
        github: "https://github.com/prince531",
    },
    {
        id: 8,
        name: "Context API",
        technologies: "Context API With React",
        image: apiImage,
        github: "https://github.com/prince531",
    },
    {
        id: 9,
        name: "Menu Driven",
        technologies: "Menu Driven With JAVA",
        image: mdImage,
        github: "https://github.com/prince531",
    },

];

const Projects = () => {
    return (
        <div className='bg-black text-white py-20' id='project'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500'>
                        My Projects
                    </span>
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                        <div key={project.id}
                            className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                            <img src={project.image}
                                alt={project.name}
                                className='rounded-lg mt-4 mb-4 w-full h-48 object-cover'
                            />
                            <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                            <p className='text-gray-400 mb-4'>{project.technologies}</p>
                            <a href={project.github}
                                className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full'
                                target='_blank'
                                rel='noopener noreferrer'>
                                GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Projects;