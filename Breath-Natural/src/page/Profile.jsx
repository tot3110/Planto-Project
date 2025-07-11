import React, { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";

const AddProfile = () => {
  const [identifier, setIdentifier] = useState(""); // email or ID
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await fetch(`https://eb-project-backend-production.up.railway.app/api/v0/user/getSpecificUser/:id${identifier}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "User not found");
      }

      setUser(data.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <LeftSidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Find User Profile</h1>

        <form onSubmit={handleSearch} className="mb-8 flex gap-4 items-end">
          <div>
            <label className="block text-gray-700 mb-1">Enter User ID or Email</label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="e.g., johndoe@example.com or 64f72e..."
              className="px-4 py-2 border rounded w-80 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>

        {loading && <p className="text-gray-600">Loading...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {user && (
          <div className="bg-white p-6 rounded-lg shadow max-w-xl">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">User Details</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            {/* Add more fields as per your backend data */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProfile;
