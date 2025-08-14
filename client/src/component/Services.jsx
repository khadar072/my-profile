import React from 'react'
import { CiDatabase } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { FaFlutter } from "react-icons/fa6";
import { MdDeveloperMode } from "react-icons/md";
import { GrConfigure } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
const Services = () => {

 const services = [
  {
    image: <FaReact className='text-blue-500' size={25} />,
    title: "Web Development",
    descr: "Modern, responsive websites built with speed, scalability, and clean design."
  },
  {
    image: <FaFigma className='text-blue-500' size={25}/>,
    title: "UX/UI Design & Development",
    descr: "User-focused designs crafted in Figma and brought to life with precision."
  },
  {
    image: <GrConfigure className='text-blue-500' size={25}/>,
    title: "Server Configuration & Deployment",
    descr: "Secure, optimized server setups with smooth deployment processes."
  },
  {
    image: <FaFlutter className='text-blue-500' size={25}/>,
    title: "Mobile App Development",
    descr: "Cross-platform mobile apps using Flutter for fast, native-like experiences."
  },
  {
    image: <MdDeveloperMode className='text-blue-500' size={25}/>,
    title: "Full-Stack Development",
    descr: "End-to-end solutions covering frontend, backend, and database layers."
  },
  {
    image: <CiDatabase className='text-blue-500' size={25}/>,
    title: "Database Management",
    descr: "Efficient database design, optimization, and maintenance for reliability."
  },
  {
    image: <MdApi className='text-blue-500' size={25}/>,
    title: "API Development",
    descr: "Robust, scalable APIs for seamless integration and data exchange."
  }
]


  return (
    <div id='services' className=' mt-3 sm:mt-16 flex flex-col gap-2 z-10 items-center justify-center dark:bg-gray-900 dark:text-white'>
       <h1 data-aos="fade-up" className='text-xs sm:text-base'>High-quality services, crafted to exceed your expectations.</h1>
       <h1 data-aos="fade-up" className='text-4xl text-blue-500 font-semibold'>What My Services</h1>

        <div data-aos="fade-up" className="grid  gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 mt-4 dark:bg-gray-900 dark:text-white max-w-6xl w-full">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 dark:text-white shadow-md  shadow-blue-600 hover:shadow-lg transition-all duration-300 rounded-xl px-6 py-16 flex flex-col items-center text-center"
          >
            {service.image}
            <h2 className="mt-4 text-lg font-semibold">{service.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{service.descr}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
