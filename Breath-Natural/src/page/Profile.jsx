import React, { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";

const AddProfile = () => {
  const [identifier, setIdentifier] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const isEmail = identifier.includes("@");

      const endpoint = isEmail
        ? `https://eb-project-backend-production.up.railway.app/api/v0/user/getUserByEmail/${identifier}`
        : `https://eb-project-backend-production.up.railway.app/api/v0/user/getSpecificUser/${identifier}`;

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok || !data.user) {
        throw new Error(data.message || "User not found");
      }

      setUser(data.user);
    } catch (err) {
      console.error("Error fetching user:", err);
      setError(err.message || "Failed to fetch user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <LeftSidebar />

      <div className="flex-1 p-10 bg-[#181D14] min-h-screen overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6 text-white">Find User Profile</h1>

        <form onSubmit={handleSearch} className="mb-8 flex gap-4 items-end flex-wrap">
          <div>
            <label className="block text-white mb-1">Enter User ID or Email</label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="e.g., johndoe@example.com or 64f72e..."
              className="px-4 py-2 text-white w-80 bg-[#232e24] rounded-md focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Search
          </button>
        </form>

        {loading && <p className="text-gray-300">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {user && (
          <div className="bg-white p-6 rounded-lg shadow max-w-xl mt-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">User Details</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            {user.phone && <p><strong>Phone:</strong> {user.phone}</p>}
            {user.address && <p><strong>Address:</strong> {user.address}</p>}
            {user.createdAt && (
              <p>
                <strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProfile;
