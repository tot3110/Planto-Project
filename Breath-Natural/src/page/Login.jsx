import React from 'react';
import Loginimage from '../assets/Image 2.png';
import { FaLock } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#AC72A1] via-[#FBD9FA] to-[#070E2A] 
    flex items-center justify-center">
    {/* Wrapper for both sides */}
    <div className="flex w-full h-full">
          
    {/* Left side - IMAGE */}
    <div className="flex justify-end items-center bg-center w-[50%]">
        <div className='w-[550px] h-[500px] relative rounded-[40px] bg-[#000000]'>
          <img src= {`${Loginimage}`} className='object-cover h-[600px] absolute top-[-80px]' />
        </div>
    </div>

    {/* Right side - LOGIN FORM */}
    <div className='flex justify-start items-center bg-center w-[50%]'>
      <div className="w-[550px] h-[400px] rounded-[40px] p-5 bg-white/10 backdrop-blur-md text-white flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center text-[#AC72A1] mb-8">Login</h2>

      {/* Email */}
      <div className="w-[60%] relative mb-6">
        <FaEnvelope className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg" />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-transparent border-b border-black placeholder-black pl-2 pr-10 py-3 focus:outline-none"
        />
      </div>


      {/* Password */}
      <div className="w-[60%] relative mb-6">
        <FaLock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg" />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-transparent border-b border-black placeholder-black pl-2 pr-10 py-3 focus:outline-none"
        />
      </div>

      {/* Button */}
      <button className="w-[60%] bg-gradient-to-r from-[#AC72A1] to-[#070E2A] 
      py-3 rounded-full hover:opacity-90 transition">
        Login
      </button>

      {/* Links */}
      <div className="w-[60%] flex justify-between mt-6 text-sm text-white/80">
        <a href="#" className="hover:underline text-[#070E2A]">Create an account</a>
        <a href="#" className="hover:underline text-[#070E2A]">Forgot password?</a>
      </div>
    </div>
    </div>
    </div>
    </div>
);
};

export default Login;
