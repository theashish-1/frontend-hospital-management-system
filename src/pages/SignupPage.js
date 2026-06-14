import React, { useState } from 'react';
import loginBg from '../assests/login.jpg'; // Matches your folder name spelling
import { signupUser } from '../api/authService';
import { useNavigate } from 'react-router-dom'
const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '' // Added to track confirm password locally if needed
  });

  // Universal handler to update state on input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Natively stops form reload
    
    // Quick client-side check before hitting the backend
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
        const response = await signupUser({
        name: formData.name,         // Maps to 'private String name'
        username: formData.email,    // Maps to 'private String username' (using email as username)
        password: formData.password, // Maps to 'private String password'
        roles: ["PATIENT"]           // Maps to 'private Set<Role> roles' (Spring auto-converts String arrays to Enum Sets)
        });
        
      console.log("Signup Successful:", response); // Fixed 'data' -> 'response'
      
      // TODO: Redirect user to login page or save user auth session state here
      navigate('/login');
    } catch (err) {
      console.error("Signup failed:", err);
      alert(err || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      
      {/* Left Side: Image Banner */}
      <div 
        className="hidden md:flex md:w-1/2 bg-cover bg-center relative items-center px-16"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className="absolute inset-0 bg-[#0A192F]/70 mix-blend-multiply"></div>
        <div className="relative z-10 text-white max-w-md">
          <h1 className="text-5xl font-light tracking-wide mb-2">
            More <span className="text-[#FFB800] font-semibold">Efficiency</span>
          </h1>
          <p className="text-3xl font-light text-gray-300">
            Better Care
          </p>
        </div>
      </div>

      {/* Right Side: Form Container */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 max-w-md w-full">
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-2">
              Create your Account
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed px-4">
              Enter your corporate credentials to register for the secure clinical interface
            </p>
          </div>

          {/* Form wrapper catches the submission */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Full Name Field */}
            <div>
              <label className="block text-xs font-bold text-[#334155] tracking-wider uppercase mb-2">
                Full Name:
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Dr. John Doe"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-[#FCFDFE] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-[#334155] tracking-wider uppercase mb-2">
                Your Email:
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="doctor@biotech.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-[#FCFDFE] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold text-[#334155] tracking-wider uppercase mb-2">
                Password:
              </label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-[#FCFDFE] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-xs font-bold text-[#334155] tracking-wider uppercase mb-2">
                Confirm Password:
              </label>
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-[#FCFDFE] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-[#004B87] hover:bg-[#003865] text-white font-medium py-3 px-4 rounded-lg shadow-md transition-colors duration-200 mt-6"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-[#004B87] font-semibold hover:underline">
              Login
            </a>
          </p>

        </div>
      </div>

    </div>
  );
};

export default SignupPage;