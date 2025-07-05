import React from 'react';
import SignupImage from '../assets/Image123.jpg';
import { FaLock, FaEnvelope, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#AC72A1] via-[#FBD9FA] to-[#070E2A] flex items-center justify-center px-4 py-8">
      
      {/* Wrapper for both sides */}
      <div className="flex flex-col lg:flex-row w-full max-w-7xl items-center">
        
        {/* Left side - LOGIN FORM */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-md xl:max-w-lg bg-white/10 backdrop-blur-md rounded-l-[30px] px-6 py-3 sm:p-5 lg:p-4 shadow-lg">
            
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center  bg-gradient-to-b from-[#AC72A1] to-[#070E2A] text-transparent bg-clip-text mb-6">
              Signup
            </h2>

            {/* Username */}
            <div className="relative mb-6">
              <FaUser className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg" />
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-transparent border-b border-black placeholder-black pl-2 pr-10 py-3 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="relative mb-6">
              <FaEnvelope className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg" />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-black placeholder-black pl-2 pr-10 py-3 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative mb-6">
              <FaLock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border-b border-black placeholder-black pl-2 pr-10 py-3 focus:outline-none"
              />
            </div>

            {/* Button */}
            <button className="w-full bg-gradient-to-t from-[#070E2A] to-[#AC72A1] py-3 rounded-full hover:opacity-90 transition font-medium text-white">
              Sign In
            </button>

            {/* Already have account */}
            <div className="mt-4 text-sm text-right text-[#070E2A]">
              <Link to="/" className="hover:underline">Already have an account?</Link>
            </div>
          </div>
        </div>

        {/* Right side - IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-start">
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-md xl:max-w-lg sm:h-[350px] md:h-[400px] lg:h-[450px] relative rounded-[30px] bg-black overflow-hidden shadow-lg">
            <img src={SignupImage} alt="Signup Visual" className="absolute object-cover w-full h-full top-0 left-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
