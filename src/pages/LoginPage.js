import React, { useState } from 'react';
import mainDoctorImg from '../assests/main_doctor.avif';

const LoginPage = () => {
  // Local state to hold form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the payload for your Spring Boot backend
    const loginPayload = {
      username: email, // Your backend matches this to request.getUsername()
      password: password
    };

    console.log('Submitting login payload to backend:', loginPayload);
    // TODO: Add your fetch/axios POST call to your backend /auth/login endpoint here
  };

  return (
    
    <div className='flex flex-row w-full min-h-screen bg-slate-50 font-sans text-slate-800'>    
      
      {/* LEFT COLUMN: Visual Presentation & Brand Message */}
      <div className='hidden md:flex relative w-1/2 bg-slate-900 overflow-hidden'>
        {/* Background Image Asset */}
        <img 
          src={mainDoctorImg} 
          alt="Medical Lab Efficiency" 
          className='absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity scale-105 transition-transform duration-700 hover:scale-100'
        />
        {/* Gradient Overlay for modern visual depth */}
        <div className='absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-900/40 to-transparent' />
        
        {/* Mockup Typography Text Styling */}
        <div className='relative z-10 flex flex-col justify-start p-16 mt-12 gap-2 text-white'>
          <h1 className='text-5xl font-light tracking-tight font-sans drop-shadow-sm'>
            More <span className='font-semibold text-amber-400'>Efficiency</span>
          </h1>
          <p className='text-3xl font-light tracking-wide text-slate-200/90 drop-shadow-sm'>
            Better Care
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: Interactive Security Authentication Form */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12 bg-slate-50'>
        <div className='w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100/80 flex flex-col gap-8 transition-all duration-300 hover:shadow-2xl'>
          
          {/* Header Label Segment */}
          <div className='text-center flex flex-col gap-1.5'>
            <h2 className='text-2xl font-bold tracking-tight text-slate-950'>
              Login your Account
            </h2>
            <p className='text-sm text-slate-500 font-medium'>
              Enter your corporate credentials to access the secure clinical interface
            </p>
          </div>

          {/* Form Action Handler */}
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            
            {/* Email Identification Input */}
            <div className='flex flex-col gap-1.5'>
              <label htmlFor='email' className='text-xs font-bold uppercase tracking-wider text-slate-500 px-1'>
                Your Email:
              </label>
              <div className='relative flex items-center'>
                <input 
                  type='email'
                  id='email'
                  required
                  placeholder='doctor@biotech.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 outline-none font-medium text-[15px] text-slate-900 transition-all placeholder:text-slate-400 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10'
                />
              </div>
            </div>

            {/* Password Cryptographic Credential Input */}
            <div className='flex flex-col gap-1.5'>
              <div className='flex justify-between items-center px-1'>
                <label htmlFor='password' className='text-xs font-bold uppercase tracking-wider text-slate-500'>
                  Password:
                </label>
                <span className='text-xs font-semibold text-amber-600 hover:text-amber-700 cursor-pointer transition-colors duration-150'>
                  Forgot Password?
                </span>
              </div>
              <div className='relative flex items-center'>
                <input 
                  type='password'
                  id='password'
                  required
                  placeholder='••••••••'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 outline-none font-medium text-[15px] text-slate-900 transition-all placeholder:text-slate-400 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10'
                />
              </div>
            </div>

            {/* Authentication Submit Action Trigger */}
            <button 
              type='submit'
              className='w-full h-12 mt-4 bg-[#02497e] hover:bg-[#013861] text-white font-semibold text-[15px] tracking-wide rounded-xl shadow-md shadow-blue-950/10 transition-all duration-200 transform active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-500/20'
            >
              Login
            </button>
            
          </form>

        </div>
      </div>

    </div>
  );
};

export default LoginPage;