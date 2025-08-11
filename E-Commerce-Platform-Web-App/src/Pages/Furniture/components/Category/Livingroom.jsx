import "./Kitchen.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";

import L001 from "../../../Furniture/assets/Images/Category/Livingroom/L001.jpg";
import L002 from "../../../Furniture/assets/Images/Category/Livingroom/L002.jpg";
import L003 from "../../../Furniture/assets/Images/Category/Livingroom/L003.jpg";
import L004 from "../../../Furniture/assets/Images/Category/Livingroom/L004.jpg";
import L005 from "../../../Furniture/assets/Images/Category/Livingroom/L005.jpg";
import L006 from "../../../Furniture/assets/Images/Category/Livingroom/L006.jpg";
import L007 from "../../../Furniture/assets/Images/Category/Livingroom/L001.jpg";
import L008 from "../../../Furniture/assets/Images/Category/Livingroom/L001.jpg";
import L009 from "../../../Furniture/assets/Images/Category/Livingroom/L001.jpg";
import L010 from "../../../Furniture/assets/Images/Category/Livingroom/L001.jpg";
import L011 from "../../../Furniture/assets/Images/Category/Livingroom/L001.jpg";
import L012 from "../../../Furniture/assets/Images/Category/Livingroom/L001.jpg";


const Livingroom = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  const getImage = (id) => {
    switch (id) {
      case "L001":
        return L001;
      case "L002":
        return L002;
      case "L003":
        return L003;
      case "L004":
        return L004;
      case "L005":
        return L005;
      case "L006":
        return L006;
      case "L007":
        return L007;
      case "L008":
        return L008;
      case "L009":
        return L009;
      case "L010":
        return L010;
      case "L011":
        return L011;
      case "L012":
        return L012;
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
        const response = await fetch("http://localhost:8000/get-livingroom");
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

  return (
    <section className="phones-page">
      <h1>Living Room Category</h1>
      <p>Find comfort and style with our living room collections</p>

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

export default Livingroom;
