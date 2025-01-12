import React, { useState } from "react";

const OpenStoreForm = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    description: "",
    categories: "",
    logo: null,
    products: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form Data Submitted:", formData);
    alert("Your store application has been submitted!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Open Your Store
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Store Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Store Name
            </label>
            <input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleInputChange}
              placeholder="Enter your store name"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Owner Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Owner Name
            </label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
              placeholder="Enter owner name"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Store Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your store address"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Store Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Store Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your store"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="3"
            ></textarea>
          </div>

          {/* Categories */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Categories (comma separated)
            </label>
            <input
              type="text"
              name="categories"
              value={formData.categories}
              onChange={handleInputChange}
              placeholder="e.g. Electronics, Clothing, Services"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Logo Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Store Logo
            </label>
            <input
              type="file"
              name="logo"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          {/* Products */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Products/Services (comma separated)
            </label>
            <textarea
              name="products"
              value={formData.products}
              onChange={handleInputChange}
              placeholder="e.g. Mobile Phones, Repairs, Gadgets"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default OpenStoreForm;
