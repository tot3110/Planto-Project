import React from "react";
import { NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { MdDashboard, MdOutlineContactMail } from "react-icons/md";
import { FaExchangeAlt, FaChartBar, FaPiggyBank, FaRegFileAlt, FaHistory } from "react-icons/fa";
import { MdLogout } from "react-icons/md";


const Sidebar = () => {
  const menu = [
    { path: "/dashboard", label: "Dashboard", icon: <MdDashboard /> },
    { path: "/transfers", label: "Transfers", icon: <FaExchangeAlt /> },
    { path: "/analytics", label: "Analytics", icon: <FaChartBar /> },
    { path: "/savings", label: "Savings", icon: <FaPiggyBank /> },
    { path: "/records", label: "Records", icon: <FaRegFileAlt /> },
    { path: "/history", label: "History", icon: <FaHistory /> },
  ];

  const bottomMenu = [
    { path: "/settings", label: "Settings", icon: <FiSettings /> },
  ];

  const logout = () =>{
    console.log("logoutclick")
  }

  
  return (
    <div className="w-[20%] h-[100%] bg-[#242e24] text-white flex flex-col justify-between">
      <div>
        <div className="p-6 font-bold text-xl">Breath Natural</div>

        <nav className="flex flex-col space-y-2 px-4">
          {menu.map((item) => (
            <NavLink
              to={item.path}
              key={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md transition-all ${
                  isActive ? "bg-green-700 text-white font-semibold" : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="px-4 pb-6 flex flex-col space-y-2">
        {bottomMenu.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md transition-all ${
                isActive ? "bg-green-700 text-white font-semibold" : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}



        <button className="flex gap-3 items-center p-2 text-gray-400 hover:text-white hover:bg-gray-800" onClick={logout}>
            <MdLogout />
            <span>Logout</span>
          </button>
      </div>
    </div>
  );
};

export default Sidebar;

