import React, { useEffect, useState } from "react";
import LeftSidebar from "../components/LeftSidebar";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://eb-project-backend-production.up.railway.app/api/v0/user/getUserAll"); // Replace with your API
        const data = await response.json();
        setUsers(data.users || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex h-[110vh]">
        <LeftSidebar />
      <div className="p-8 bg-[#181D14] h-[100%] w-full overflow-y-scroll">
        <h1 className="text-2xl font-bold mb-6 text-white">All Users</h1>

        {loading ? (
          <div className="text-center text-white">Loading users...</div>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-[#232e24]">
              <thead>
                <tr className="bg-[#232e24] text-white text-left">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id || index} className="border-t text-white">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{user.name}</td>
                    <td className="py-2 px-4">{user.email}</td>
                    <td className="py-2 px-4 capitalize">{user.role || "user"}</td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-white">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
