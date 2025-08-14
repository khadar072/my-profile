import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Services from './component/Services'
import About from './component/About'
import Tech from './component/Tech'
import Contact from './component/Contact'
import Footer from './component/Footer'

const App = () => {
  return (

 <div className='w-full  min-h-screen dark:bg-gray-900 dark:text-white'>
      <Navbar/>
      <div className='mx-2 sm:mx-[4%] xl:mx-[8%] m-auto'>
        <Hero/>
        <Services/>
        <About/>
        <Tech/>
        <Contact/>
        <Footer/>
      </div>
  </div>

  )
}

export default App
