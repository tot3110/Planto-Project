// components/LogoutButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import LeftSidebar from '../components/LeftSidebar'

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth-related data
    localStorage.removeItem("authToken"); // or sessionStorage.clear();
    localStorage.removeItem("user"); // Optional: remove user data

    // Redirect to login
    navigate("/login");
  };

  return (
    <div className="flex">
    <LeftSidebar />
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition"
    >
      Logout
    </button>
    </div>
  );
};

export default LogoutButton;
