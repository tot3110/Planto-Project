import React from 'react';
import { Link } from "react-router-dom";
import Loginimage from '../assets/Image123.jpg';
import { FaLock, FaEnvelope } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#AC72A1] via-[#FBD9FA] to-[#070E2A] flex items-center justify-center p-4">
      {/* Wrapper for both sides */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-transparent">
        
        {/* Left side - IMAGE */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-6 md:mb-0">
          <div className="w-full max-w-md h-[400px] relative rounded-[30px] bg-black overflow-hidden">
            <img
              src={Loginimage}
              className="object-cover w-full h-full absolute top-0 left-0"
              alt="Login Visual"
            />
          </div>
        </div>

        {/* Right side - LOGIN FORM */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="w-full max-w-md rounded-[30px] p-6 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-b from-[#AC72A1] to-[#070E2A] text-transparent bg-clip-text mb-8">
              Login
            </h2>

            {/* Email */}
            <div className="w-full relative mb-6">
              <FaEnvelope className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg" />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-black placeholder-black pl-2 pr-10 py-3 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="w-full relative mb-6">
              <FaLock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border-b border-black placeholder-black pl-2 pr-10 py-3 focus:outline-none"
              />
            </div>

            {/* Button */}
            <button className="w-full bg-gradient-to-t from-[#070E2A] to-[#AC72A1] py-2 rounded-full hover:opacity-90 transition">
              Login
            </button>

            {/* Links */}
            <div className="w-full flex justify-between mt-8 text-sm text-white/80">
              <Link to="/signup" className="hover:underline text-[#070E2A]">
                Create an account
              </Link>
              <Link to="/forgot-password" className="hover:underline text-[#070E2A]">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

