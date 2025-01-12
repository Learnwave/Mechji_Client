import React, { useState } from "react";

const ProductUploadForm = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [productImage, setProductImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("category", productData.category);
    if (productImage) formData.append("image", productImage);

    // Example: Submit the form data to the server
    fetch("/api/products", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Product uploaded successfully!");
        setProductData({
          name: "",
          description: "",
          price: "",
          category: "",
        });
        setProductImage(null);
      })
      .catch((error) => {
        console.error("Error uploading product:", error);
        alert("Failed to upload product.");
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Upload a New Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
          />
        </div>

        {/* Product Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product description"
            rows="4"
          ></textarea>
        </div>

        {/* Product Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-gray-700 font-semibold mb-2"
          >
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product price"
          />
        </div>

        {/* Product Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-gray-700 font-semibold mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Garden</option>
            <option value="beauty">Beauty</option>
            <option value="sports">Sports</option>
          </select>
        </div>

        {/* Product Image */}
        <div>
          <label
            htmlFor="image"
            className="block text-gray-700 font-semibold mb-2"
          >
            Product Image
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImageUpload}
            accept="image/*"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Upload Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUploadForm;
