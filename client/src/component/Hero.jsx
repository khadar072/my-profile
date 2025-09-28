import React from 'react'
import { asserts } from '../assets/assets'
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiTwitter } from "react-icons/tfi";
import { IoIosArrowRoundDown } from "react-icons/io";

const Hero = () => {
    return (
        <div id='hero' className='w-full relative  overflow-hidden dark:bg-gray-900 dark:text-white flex flex-col  md:flex-row pt-24 '>
            {/* <div className=' absolute h-[65%] w-full sm:w-[70%]  sm:h-full bg-white  sm:rounded-none rounded-b-full sm:rounded-r-full'></div>
            <div className='w-full sm:w-[25%]  absolute bottom-0 sm:right-0 h-[30%] sm:h-full sm:rounded-none rounded-t-full sm:rounded-l-full bg-white'></div> */}

            {/* left part */}
            <div data-aos="fade-right" className='w-full md:w-[65%] flex flex-col items-start pl-2 md:pl-10  sm:pt-28 z-0 text-black dark:bg-gray-900 dark:text-white gap-2 sm:gap-4'>
                <div className='flex flex-row justify-center items-center  gap-3'>
                    <p className="text-blue-500 text-xl sm:text-2xl font-light leading-none pb-2">
                        Welcome to{" "}
                        <span className="hidden sm:inline">Social Media</span>
                        <span className="inline sm:hidden"> My Modern Digital World</span>
                    </p>

                    <div className='  hidden sm:flex flex-row gap-1'>
                        <FaWhatsapp size={25} className='text-blue-500 cursor-pointer' />
                        <AiOutlineInstagram size={25} className='text-blue-500 cursor-pointer' />
                        <TiSocialFacebook size={25} className='text-blue-500 cursor-pointer' />
                        <TfiTwitter size={25} className='text-blue-500 cursor-pointer' />
                    </div>

                </div>
                <div>
                    <h1 className="text-3xl  sm:text-5xl font-bold dark:bg-gray-900 dark:text-white text-gray-900">
                        Hi, I'm <span className="text-blue-500">Khadar</span> Designer & Builder of Unique<span className="text-blue-500"> Web & App Product</span>
                    </h1>
                    <h2 className="text-xl sm:text-2xl  font-semibold mt-2 text-gray-400">
                        Full-Stack Developer | Flutter | Figma Designer
                    </h2>
                    <div className="flex  flex-row  items-center mt-4 gap-4">
                        <p className="text-lg font-medium text-gray-700">Know me well!</p>
                        <a
                            href="/khadar.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            View CV
                        </a>
                    </div>

                    <a href='#services' className='flex  flex-row gap-1 items-center cursor-pointer my-2 sm:mt-14 '>
                        <p className='text-xl pb-2'>my-sevrvices</p>
                        <IoIosArrowRoundDown size={30} className='border rounded-full  text-blue-500 border-blue-500' />
                    </a>
                </div>
            </div>

            {/* right part */}
            <div data-aos="fade-left" className='w-full sm:w-[35%] relative flex items-center  justify-center rounded-3xl   '>
                <img src={asserts.profile2} alt="" className=' w-full   md:absolute rounded-3xl bottom-0 object-cover  h-[440px]' />
            </div>
        </div>
    )
}

export default Hero
