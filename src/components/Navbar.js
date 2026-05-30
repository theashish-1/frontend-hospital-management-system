import React from 'react'
import logo1 from '../assests/logo-1.jpg'

const Navbar = () => {
  return (
    // Backdrop wrapper ensuring full width, structural containment, and sticky top placement
    <nav className='w-full bg-white backdrop-blur-md sticky top-0 z-50 border-b border-slate-50/50 '>
      <div className='max-w-7xl mx-auto px-6 h-20 flex flex-row justify-between items-center'>
        
        {/* Branding & Logo Area */}
        <div className='flex flex-row items-center gap-2 cursor-pointer group'>
          <img 
            src={logo1} 
            alt="MediCare Logo" 
            className=' mix-blend-multiply w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105 ' 
          />
          <h2 className='text-xl font-bold tracking-tight text-slate-900 font-sans'>
            MediCare
          </h2>
        </div>

        {/* Center Navigation Menu Links */}
        <div className='hidden md:flex flex-row items-center gap-8 text-[15px] font-medium text-slate-600 transition-colors'>
          <div className='hover:text-amber-500 cursor-pointer capitalize font-medium text-slate-900 transition-colors duration-200'>
            home
          </div>

          {/* Interactive dropdown mimic layout seen on image_205d60.png */}
          <div className='flex items-center gap-1 hover:text-amber-500 cursor-pointer capitalize transition-colors duration-200'>
            services
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-amber-500 mt-0.5"><path d="m6 9 6 6 6-6"/></svg>
          </div>

          <div className='flex items-center gap-1 hover:text-amber-500 cursor-pointer capitalize transition-colors duration-200'>
            about us
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-amber-500 mt-0.5"><path d="m6 9 6 6 6-6"/></svg>
          </div>

          <div className='hover:text-amber-500 cursor-pointer capitalize transition-colors duration-200'>
            contact
          </div>
        </div>

        {/* User Session Action Buttons */}
        <div className='flex flex-row items-center gap-4'>
          <button className='text-[15px] font-semibold text-slate-700 hover:text-amber-500 transition-colors duration-200 px-3 py-2 capitalize hover:bg-slate-900 hover:text-white rounded-full shadow-sm'>
            login
          </button>

          {/* Premium Capsule button mimicking the template layout outline button */}
          <button className='text-[14px] font-semibold text-slate-900 border-2  bg-transparent hover:bg-slate-900 hover:text-white px-5 py-2 rounded-full  transition-all duration-200 ease-in-out transform active:scale-95 capitalize'>
            sign up
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar