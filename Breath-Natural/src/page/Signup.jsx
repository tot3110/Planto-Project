import React from 'react';
import SignupImage from '../assets/Image123.jpg';
import { FaLock } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#AC72A1] via-[#FBD9FA] to-[#070E2A] 
    flex items-center justify-center">
    {/* Wrapper for both sides */}
    <div className="flex w-full h-full">
          
    {/* Left side - IMAGE */}
    <div className="flex justify-end items-center bg-center w-[50%]">
        <div className='w-[550px] h-[500px] relative rounded-[40px] bg-[#000000] overflow-hidden'>
          <img src= {`${SignupImage}`} className='object-cover h-[600px] absolute top-[-90px]' />
        </div>
    </div>

    {/* Right side - LOGIN FORM */}
    <div className='flex justify-start items-center bg-center w-[50%]'>
      <div className="w-[550px] h-[400px] rounded-[40px] p-3 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-b
       from-[#AC72A1] to-[#070E2A] text-transparent bg-clip-text mb-8">Signup</h2>

    {/* {Username} */}
    <div className="w-[60%] relative mb-6">
        <FaUser className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg" />
        <input
          type="username"
          placeholder="Username"
          className="w-full bg-transparent border-b border-black placeholder-black pl-2 pr-10 py-3 focus:outline-none"
        />
      </div>

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
      <button className="w-[60%] bg-gradient-to-t from-[#070E2A] to-[#AC72A1] 
      py-2 rounded-full hover:opacity-90 transition">
        Login
      </button>

      {/* Links */}
      <div className="w-[60%] flex justify-end mt-4 text-sm text-white/80">
        <a href="#" className="hover:underline text-[#070E2A]">Already have an account?</a>
      </div>
    </div>
    </div>
    </div>
    </div>
);
};

export default Login;


