import React, { useContext, useState } from "react"
import { asserts } from "../assets/assets"
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
    const [open, setOpen] = useState(false)
    const {darkMode,setDarkMode} = useContext(ThemeContext)

    return (
        <div className="flex flex-row w-full fixed bg-white dark:bg-gray-900 dark:text-white z-30  justify-between h-20 shadow-md   items-center shadow-blue-100 px-2  xl:px-[10%]">
          <div className="flex gap-1.5">
          <img
          data-aos="fade-down"
            className="w-14 h-14 rounded-full"
            src={asserts.profile1}
            alt="dummyLogoColored"
          />
          <div data-aos="fade-down" className="relative z-0 text-blue-500">
          <p className="font-semibold  pt-2">Best</p>
          <p className=" absolute top-5 mt-1 font-semibold">Developer</p>
        </div>
          </div>
            <div className="flex flex-row gap-3 sm:gap-5 items-center">
                <div data-aos="fade-down" className=" hidden sm:flex sm:flex-row gap-3  text-gray-700 dark:bg-gray-900 dark:text-white">
                    <a href="#hero"  className="hover:text-blue-700 pt-1 active:text-blue-700  text-xl pr-2 font-semibold">
                        Home
                    </a>
                    <a href="#about" className="hover:text-blue-700  pt-1 active:text-blue-700  text-xl pr-2 font-semibold">
                        About
                    </a>
                    <a href="#services" className="hover:text-blue-700  pt-1 active:text-blue-700  text-xl pr-2 font-semibold">
                        Services
                    </a>
                    <a href="#contact" className="hover:text-blue-700  pt-1 active:text-blue-700  text-xl pr-2 font-semibold">
                        Contact
                    </a>
                    <a href="https://github.com/khadar072"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 pt-1 text-xl pr-1 active:text-blue-700 font-semibold">
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/khadar-moha-08638a358" target="_blank"
                        rel="noopener noreferrer" className="hover:text-blue-700  pt-1 active:text-blue-700  text-xl pr-2 font-semibold">
                        LinkedIn
                    </a>

                </div>
                <button data-aos="fade-down" className=" bg-blue-500 px-4 py-3 cursor-pointer rounded text-white">
                    {
                        !darkMode ?
                            <MdDarkMode className="text-yellow-500" onClick={() => setDarkMode(!darkMode)} size={25} />
                            :
                            <MdLightMode className="text-yellow-500" onClick={() => setDarkMode(!darkMode)} size={25} />
                    }
                </button>
                <div onClick={() => setOpen(!open)}  data-aos="fade-down"className="block cursor-pointer sm:hidden">
                    {
                        !open ?

                            <IoMdMenu className="text-blue-500"  size={60} />
                            :
                            <IoCloseSharp className="text-blue-500"  size={60} />
                    }
                </div>
            </div>




            {
                open && (
                    <div className="absolute block sm:hidden dark:bg-gray-900 dark:text-white bg-white z-10 w-full h-full top-20 left-0">
                        <div data-aos="fade-right" className="flex flex-col gap-1 bg-white w-full dark:bg-gray-900 dark:text-white">
                            <a href="#hero" onClick={()=>setOpen(!open)} className="hover:text-blue-700 py-2 active:text-blue-500 cursor-pointer n pl-2  text-2xl font-semibold">
                                Home
                            </a>
                            <a href="#about" onClick={()=>setOpen(!open)} className="hover:text-blue-700  py-2 active:text-blue-500 cursor-pointer n pl-2  text-2xl font-semibold">
                                About
                            </a>
                            <a href="#services" onClick={()=>setOpen(!open)} className="hover:text-blue-700  py-2 active:text-blue-500 cursor-pointer n pl-2  text-2xl font-semibold">
                                Services
                            </a>
                            <a href="#contact" onClick={()=>setOpen(!open)} className="hover:text-blue-700  py-2 active:text-blue-500 cursor-pointer n pl-2  text-2xl font-semibold">
                                Contact
                            </a>
                            <a href="https://github.com/khadar072"
                                target="_blank"
                                rel="noopener noreferrer" onClick={()=>setOpen(!open)} className="hover:text-blue-700  py-2 active:text-blue-500 cursor-pointer n pl-2  text-2xl font-semibold">
                                Github
                            </a>
                            <a href="https://www.linkedin.com/in/khadar-moha-08638a358" target="_blank"
                                rel="noopener noreferrer" onClick={()=>setOpen(!open)} className="hover:text-blue-700  py-2 active:text-blue-500 cursor-pointer n pl-2  text-2xl font-semibold">
                                LinkedIn
                            </a>

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar