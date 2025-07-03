import React from 'react';
import { Link } from "react-router-dom";
import Loginimage from '../assets/Image123.jpg';
import { FaLock, FaEnvelope } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#AC72A1] via-[#FBD9FA] to-[#070E2A] flex items-center justify-center px-4 py-8">
      
      {/* Container for both sides */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8 items-center">
        
        {/* Left side - IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] relative rounded-[30px] bg-black overflow-hidden shadow-xl">
            <img
              src={Loginimage}
              alt="Login Visual"
              className="object-cover w-full h-full absolute top-0 left-0"
            />
          </div>
        </div>

        {/* Right side - LOGIN FORM */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md rounded-[30px] p-6 sm:p-8 lg:p-10 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center shadow-xl">
            
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-b from-[#AC72A1] to-[#070E2A] text-transparent bg-clip-text mb-8">
              Login
            </h2>

            {/* Email */}
            <div className="w-full relative mb-6">
              <FaEnvelope className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg" />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-black placeholder-black pl-2 pr-10 py-3 focus:outline-none text-sm sm:text-base"
              />
            </div>

            {/* Password */}
            <div className="w-full relative mb-6">
              <FaLock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border-b border-black placeholder-black pl-2 pr-10 py-3 focus:outline-none text-sm sm:text-base"
              />
            </div>

            {/* Button */}
            <button className="w-full bg-gradient-to-t from-[#070E2A] to-[#AC72A1] py-3 rounded-full hover:opacity-90 transition-all duration-300 text-white font-medium text-sm sm:text-base">
              Login
            </button>

            {/* Links */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-6 text-sm sm:text-base text-[#070E2A] gap-2 sm:gap-0">
              <Link to="/signup" className="hover:underline">Create an account</Link>
              <Link to="/forgot-password" className="hover:underline">Forgot password?</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
