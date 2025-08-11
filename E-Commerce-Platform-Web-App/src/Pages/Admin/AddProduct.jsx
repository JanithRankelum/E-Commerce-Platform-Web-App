import React, { useState } from "react";
import "./AddProduct.css";
import Sidebar from "./Components/Sidebar";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    id: "",
    category: "",
    name: "",
    price: "",
    model: "",
    quantity: "",
    description: "",
    specification: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const {
      id,
      category,
      name,
      price,
      model,
      quantity,
      description,
      specification,
    } = formData;
    if (
      !id ||
      !category ||
      !name ||
      !price ||
      !model ||
      !quantity ||
      !description ||
      !specification
    ) {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:8000/add-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "An error occurred");

      alert(result.message || "Product added successfully!");
      setFormData({
        id: "",
        category: "",
        name: "",
        price: "",
        model: "",
        quantity: "",
        description: "",
        specification: "",
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="add-product-page">
      <Sidebar />
      <div className="add-product-form">
        <h1>Add Product</h1>
        <div className="underline"></div>
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product ID</label>
            <input
              type="text"
              name="id"
              placeholder="Enter Product ID"
              value={formData.id}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Product Category</label>
            <input
              type="text"
              name="category"
              placeholder="Enter Product Category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Product Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter Price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Model</label>
            <input
              type="text"
              name="model"
              placeholder="Enter Product Model Name"
              value={formData.model}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder="Enter Quantity"
              value={formData.quantity}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Enter Description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Specifications</label>
            <textarea
              name="specification"
              placeholder="Enter Specifications"
              value={formData.specification}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="add-product-btn"
            disabled={isLoading}
          >
            {isLoading ? "Adding Product..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
