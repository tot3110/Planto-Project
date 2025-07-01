import React from "react";
import { NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { MdDashboard, MdOutlineContactMail } from "react-icons/md";
import { FaExchangeAlt, FaChartBar, FaPiggyBank, FaRegFileAlt, FaHistory } from "react-icons/fa";

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
    { path: "/contact", label: "Contact us", icon: <MdOutlineContactMail /> },
  ];

  return (
    <div className="w-64 h-screen bg-[#242e24] text-white flex flex-col justify-between">
      <div>
        <div className="p-6 font-bold text-xl">My App</div>

        <nav className="flex flex-col space-y-2 px-4">
          {menu.map((item) => (
            <NavLink
              to={item.path}
              key={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md transition-all ${
                  isActive ? "bg-pink-700 text-white font-semibold" : "text-gray-400 hover:text-white hover:bg-gray-800"
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
                isActive ? "bg-pink-700 text-white font-semibold" : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
