import React, { useState } from "react";
import LeftSidebar from '../components/LeftSidebar'


const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const handleToggleNotification = (type) =>
    setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));

  return (
    <div className="flex">
      <LeftSidebar />
    <div className={`w-[80%] min-h-screen p-6 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold">Settings</h1>
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            darkMode
              ? "bg-white text-gray-900 hover:bg-gray-200"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Profile Settings */}
      <div className={`rounded-xl p-5 mb-6 ${darkMode ? "bg-gray-800" : "bg-white"} shadow`}>
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className={`rounded-xl p-5 mb-6 ${darkMode ? "bg-gray-800" : "bg-white"} shadow`}>
        <h2 className="text-xl font-semibold mb-4">Security</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Current Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">New Password</label>
            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
          Update Password
        </button>
      </div>

      {/* Notification Preferences */}
      <div className={`rounded-xl p-5 mb-6 ${darkMode ? "bg-gray-800" : "bg-white"} shadow`}>
        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={() => handleToggleNotification("email")}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            Email Notifications
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={notifications.sms}
              onChange={() => handleToggleNotification("sms")}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            SMS Notifications
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="text-right">
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-medium">
          Save Changes
        </button>
      </div>
    </div>
    </div>
  );
};

export default Settings;
