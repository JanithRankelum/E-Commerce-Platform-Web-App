import "./Kitchen.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";


import Out001 from "../../../Electronics/assets/Images/Category/Phones/P001.png";
import Out002 from "../../../Electronics/assets/Images/Category/Phones/P002.png";
import Out003 from "../../../Electronics/assets/Images/Category/Phones/P003.png";
import Out004 from "../../../Electronics/assets/Images/Category/Phones/P004.png";
import Out005 from "../../../Electronics/assets/Images/Category/Phones/P005.png";
import Out006 from "../../../Electronics/assets/Images/Category/Phones/P006.png";
import Out007 from "../../../Electronics/assets/Images/Category/Phones/P007.png";
import Out008 from "../../../Electronics/assets/Images/Category/Phones/P008.png";
import Out009 from "../../../Electronics/assets/Images/Category/Phones/P009.png";
import Out010 from "../../../Electronics/assets/Images/Category/Phones/P010.png";
import Out011 from "../../../Electronics/assets/Images/Category/Phones/P011.png";
import Out012 from "../../../Electronics/assets/Images/Category/Phones/P012.png";


const Outdoorfurniture = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  const getImage = (id) => {
    switch (id) {
      case "Out001":
        return Out001;
      case "Out002":
        return Out002;
      case "Out003":
        return Out003;
      case "Out004":
        return Out004;
      case "Out005":
        return Out005;
      case "Out006":
        return Out006;
      case "Out007":
        return Out007;
      case "Out008":
        return Out008;
      case "Out009":
        return Out009;
      case "Out010":
        return Out010;
      case "Out011":
        return Out011;
      case "Out012":
        return Out012;
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
        const response = await fetch("http://localhost:8000/get-outdoorfurniture");
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
      <h1>Outdoor Furniture Category</h1>
      <p>Enhance your outdoor living with durable and trendy pieces.</p>

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
                  <span>{product.price ? `$${product.price}` : "N/A"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Outdoorfurniture;
