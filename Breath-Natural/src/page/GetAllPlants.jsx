import React, { useEffect, useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import { FaTrashAlt, FaEdit, FaSave, FaTimes } from "react-icons/fa";

const AllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  // Fetch all plants
  const fetchPlants = async () => {
    try {
      const response = await fetch(
        "https://sample-three-khaki.vercel.app/api/v0/plants/getAll"
      );
      const result = await response.json();
      console.log(result)
      if (!response.ok) throw new Error(result.message || "Failed to fetch plants");
      setPlants(result.plants || []);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  // Delete a plant
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this plant?")) return;
    try {
      const response = await fetch(
        `https://sample-three-khaki.vercel.app/api/v0/plants/delete/${id}`,
        { method: "DELETE" }
      );
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Failed to delete plant");
      alert("Plant deleted successfully!");
      fetchPlants();
    } catch (err) {
      alert(err.message);
    }
  };

  // Enable edit mode
  const handleEdit = (plant) => {
    setEditId(plant._id);
    setEditData({ ...plant });
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditId(null);
    setEditData({});
  };

  // Handle field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // Save changes
  const handleSave = async () => {
    try {
      const response = await fetch(
        `https://sample-three-khaki.vercel.app/api/v0/plants/update/${editId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editData),
        }
      );
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Update failed");
      alert("Plant updated!");
      setEditId(null);
      fetchPlants();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex bg-[#181D14] min-h-screen text-white">
      <LeftSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">All Plants</h1>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : plants.length === 0 ? (
          <p>No plants found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((plant) => {
              const isEditing = editId === plant._id;

              // Hide all non-editing cards when one is in edit mode
              if (editId && !isEditing) return null;

              return (
                <div
                  key={plant._id}
                  className="bg-[#232e24] p-4 rounded-xl shadow-lg relative w-full col-span-1"
                >
                  {plant.image && (
                    <img
                      src={plant.image}
                      alt={plant.plantname}
                      className="w-full h-40 object-cover rounded-md mb-3"
                    />
                  )}

                  {isEditing ? (
                    <>
                      <input
                        name="plantname"
                        value={editData.plantname}
                        onChange={handleChange}
                        className="w-full bg-[#1f2a22] mb-2 px-2 py-1 rounded"
                        placeholder="Plant Name"
                      />
                      <input
                        name="type"
                        value={editData.type}
                        onChange={handleChange}
                        className="w-full bg-[#1f2a22] mb-2 px-2 py-1 rounded"
                        placeholder="Type"
                      />
                      <select
                        name="category"
                        value={editData.category}
                        onChange={handleChange}
                        className="w-full bg-[#1f2a22] mb-2 px-2 py-1 rounded"
                      >
                        <option value="indoor">Indoor</option>
                        <option value="outdoor">Outdoor</option>
                      </select>
                      <textarea
                        name="description"
                        value={editData.description}
                        onChange={handleChange}
                        className="w-full bg-[#1f2a22] mb-2 px-2 py-1 rounded"
                        placeholder="Description"
                      />
                      <input
                        type="number"
                        name="price"
                        value={editData.price}
                        onChange={handleChange}
                        className="w-full bg-[#1f2a22] mb-2 px-2 py-1 rounded"
                        placeholder="Price"
                      />
                      <select
                        name="status"
                        value={editData.status}
                        onChange={handleChange}
                        className="w-full bg-[#1f2a22] mb-2 px-2 py-1 rounded"
                      >
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                      </select>

                      <div className="flex justify-end gap-3 mt-3">
                        <button onClick={handleSave} className="text-green-400 hover:text-green-600">
                          <FaSave size={18} />
                        </button>
                        <button onClick={cancelEdit} className="text-red-400 hover:text-red-600">
                          <FaTimes size={18} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-xl font-semibold mb-1">{plant.plantname}</h2>
                      <p className="text-sm text-gray-300">Type: {plant.type}</p>
                      <p className="text-sm text-gray-300">Category: {plant.category}</p>
                      <p className="text-sm text-gray-300">Description: {plant.description}</p>
                      <p className="text-sm text-gray-300">Price: ${plant.price}</p>
                      <p
                        className={`text-sm mt-2 font-medium ${
                          plant.status === "Available" ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        Status: {plant.status}
                      </p>

                      <div className="absolute top-3 right-3 flex gap-3">
                        <button onClick={() => handleEdit(plant)} className="text-blue-400 hover:text-blue-600">
                          <FaEdit size={18} />
                        </button>
                        <button onClick={() => handleDelete(plant._id)} className="text-red-400 hover:text-red-600">
                          <FaTrashAlt size={18} />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPlants;



