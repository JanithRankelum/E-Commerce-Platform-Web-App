import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Toggle Heart Image

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";

// Card Images

import BB001 from "../../../Groceries/assets/Images/Category/Bakeryandbread/BB001.jpg";
import BB002 from "../../../Groceries/assets/Images/Category/Bakeryandbread/BB002.jpg";
import BB003 from "../../../Groceries/assets/Images/Category/Bakeryandbread/BB003.jpg";
import BB004 from "../../../Groceries/assets/Images/Category/Bakeryandbread/BB004.jpg";
import BB005 from "../../../Groceries/assets/Images/Category/Bakeryandbread/BB005.jpg";
import BB006 from "../../../Groceries/assets/Images/Category/Bakeryandbread/BB006.jpg";
import BB007 from "../../../Groceries/assets/Images/Category/Bakeryandbread/BB001.jpg";
import BB008 from "../../../Groceries/assets/Images/Category/Bakeryandbread/BB001.jpg";
import BB009 from "../../../Groceries/assets/Images/Category/Bakeryandbread/BB001.jpg";
import BB010 from "../../../Groceries/assets/Images/Category/Bakeryandbread/BB001.jpg";
import BB011 from "../../../Groceries/assets/Images/Category/Bakeryandbread/BB001.jpg";
import BB012 from "../../../Groceries/assets/Images/Category/Bakeryandbread/BB001.jpg";

import "./Daily.css";

const Bakery = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  // Get image by id

  const getImage = (id) => {
    switch (id) {
      case "BB001":
        return BB001;
      case "BB002":
        return BB002;
      case "BB003":
        return BB003;
      case "BB004":
        return BB004;
      case "BB005":
        return BB005;
      case "BB006":
        return BB006;
      case "BB007":
        return BB007;
      case "BB008":
        return BB008;
      case "BB009":
        return BB009;
      case "BB010":
        return BB010;
      case "BB011":
        return BB011;
      case "BB012":
        return BB012;
      default:
        return "https://via.placeholder.com/150"; // Default placeholder image
    }
  };

  // Generate random rating and sold count

  const generateRandomStats = () => {
    return {
      rating: (Math.random() * 5).toFixed(1), // Random rating between 0 and 5
      sold: Math.floor(Math.random() * 1000), // Random sold count up to 1000
    };
  };

  // Fetch products from the database and add random stats

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/get-bakeryandbread"
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Error fetching products");
        }

        // Add random rating and sold counts to each product

        const productsWithStats = data.map((product) => ({
          ...product,
          ...generateRandomStats(),
        }));

        setProducts(productsWithStats);
      } catch (error) {
        console.error("Error fetching products:", error);
        alert(error.message);
      }
    };

    fetchProducts();
  }, []);

  // Handle product card click

  const handleCardClick = (product) => {
    navigate(`/product-details/${product.id}`, { state: { product } });
  };

  // Toggle favorite status

  const handleHeartClick = (index) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [index]: !prevFavorites[index],
    }));
  };

  //Page details

  return (
    <section className="phones-page">
      <h1>Bakery and Bread Category</h1>
      <p>Explore our collection of the latest smartphones and accessories.</p>

      <button onClick={() => navigate(-1)} className="back-button">
        Go Back
      </button>
      <section className="product-container">
        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleCardClick(product)}
            >
              <img
                src={getImage(product.id)} // Dynamically fetch images
                alt={product.name || "Product Image"}
                className="product-image"
              />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating-sold">
                  <span className="product-rating">
                    <span className="star">★★★★★</span> {product.rating}
                  </span>
                  <span className="product-sold">Sold: {product.sold}</span>
                </div>
                <div
                  className="product-heart-icon"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent parent click event
                    handleHeartClick(index);
                  }}
                >
                  <img
                    src={favorites[index] ? heartFilled : heartUnfilled}
                    alt="Heart Icon"
                    className="heart-image"
                  />
                </div>
                <div className="product-save">
                  <span className="underline-card"></span>
                  Price:{" "}
                  <span>{product.price ? `LKR.${product.price}` : "N/A"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Bakery;
