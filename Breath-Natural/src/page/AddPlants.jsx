import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";

const AddPlants = () => {
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      nav("/");
    }
  }, [nav]);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    category: "",
    description: "",
    price: "",
    status: "available",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("image", formData.image); // assuming image is the only required field for upload

  try {
    const response = await fetch("https://eb-project-backend-production.up.railway.app/api/v0/plants/upload-image", {
      method: "POST",
      body: data,
    });

    const result = await response.json();
    console.log("Image upload success:", result);

    if (response.ok) {
      // If needed, you can store the uploaded image URL in your database here
      alert("Image uploaded successfully!");
    } else {
      alert(`Upload failed: ${result.message}`);
    }
  } catch (error) {
    console.error("Upload error:", error);
    alert("Something went wrong during image upload.");
  }
};

  return (
    <div className="flex h-screen">
      <LeftSidebar />

      <div className="flex pt-10 pl-10 bg-[#181D14] w-[100%] h-screen">
        <div className="max-w-2xl rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-white">Add New Plant</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-30">
  {/* Left Column */}
  <div className="space-y-4">
    {/* Plant Name */}
    <div>
      <label className="block text-white mb-1">Plant Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Enter Plant Name"
        onChange={handleChange}
        className="w-full bg-[#232e24] text-white px-4 py-2 rounded-lg focus:outline-none"
        required
      />
    </div>

    {/* Type */}
    <div>
      <label className="block text-white mb-1">Type</label>
      <input
        type="text"
        name="type"
        placeholder="Enter Type of Plant"
        value={formData.type}
        onChange={handleChange}
        className="w-full px-4 text-white bg-[#232e24] py-2 rounded-lg focus:outline-none"
      />
    </div>

    {/* Category */}
    <div>
      <label className="block text-white mb-1">Category</label>
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full text-white bg-[#232e24] px-4 py-2 rounded-lg focus:outline-none"
        required
      >
        <option value="">Select Category</option>
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
        <option value="succulent">Succulent</option>
      </select>
    </div>

    {/* Description */}
    <div>
      <label className="block text-white mb-1">Description</label>
      <textarea
        name="description"
        value={formData.description}
        placeholder="Enter Description"
        onChange={handleChange}
        rows={3}
        className="w-full text-white px-4 py-2 bg-[#232e24] rounded-lg focus:outline-none"
      />
    </div>
  </div>

  {/* Right Column */}
  <div className="space-y-4">
    {/* Price */}
    <div>
      <label className="block text-white mb-2">Price</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        placeholder="Enter Price"
        onChange={handleChange}
        className="w-full bg-[#232e24] text-white px-4 py-2 rounded-lg focus:outline-none"
        required
      />
    </div>

    {/* Image */}
    <div>
      <label className="block text-white mb-2">Plant Image</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        className="w-full"
      />
    </div>

    {/* Status */}
    <div>
      <label className="block text-white mb-2">Status</label>
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full bg-[#232e24] text-white px-4 py-2 rounded-lg focus:outline-none"
      >
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
    </div>

    {/* Submit Button */}
    <div className="pt-3">
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
      >
        Add Plant
      </button>
        </div>
        </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlants;
