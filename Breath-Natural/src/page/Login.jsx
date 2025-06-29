import React from 'react';
import { FaLock } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


const Login = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#AC72A1] via-[#FBD9FA] to-[#070E2A] 
    flex items-center justify-center">
  {/* Wrapper for both sides */}
  <div className="flex w-full h-full rounded-[100px] overflow-hidden">
    
    {/* Left side - IMAGE */}
    <div
      className="w-full bg-cover bg-center">
        <img src= {`$`} alt="" />
      </div>

    {/* Right side - LOGIN FORM */}
    <div className="w-[800px] h-[525px] bg-white/10 backdrop-blur-md p-10 text-white flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-center mb-8 drop-shadow">Login</h2>

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
      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-full hover:opacity-90 transition">
        Login
      </button>

      {/* Links */}
      <div className="flex justify-between mt-6 text-sm text-white/80">
        <a href="#" className="hover:underline">Create an account</a>
        <a href="#" className="hover:underline">Forgot password?</a>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;

