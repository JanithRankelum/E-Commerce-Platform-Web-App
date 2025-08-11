import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Phones.css";

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";


import W001 from "../../../Electronics/assets/Images/Category/Watches/W001.png";
import W002 from "../../../Electronics/assets/Images/Category/Watches/W002.jpg";
import W003 from "../../../Electronics/assets/Images/Category/Watches/W003.jpg";
import W004 from "../../../Electronics/assets/Images/Category/Watches/W004.jpg";
import W005 from "../../../Electronics/assets/Images/Category/Watches/W005.jpg";
import W006 from "../../../Electronics/assets/Images/Category/Watches/W006.jpg";
import W007 from "../../../Electronics/assets/Images/Category/Phones/P007.png";
import W008 from "../../../Electronics/assets/Images/Category/Phones/P008.png";
import W009 from "../../../Electronics/assets/Images/Category/Phones/P009.png";
import W010 from "../../../Electronics/assets/Images/Category/Phones/P010.png";
import W011 from "../../../Electronics/assets/Images/Category/Phones/P011.png";
import W012 from "../../../Electronics/assets/Images/Category/Phones/P012.png";

const Watchers = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();


  const getImage = (id) => {
    switch (id) {
      case "W001":
        return W001;
      case "W002":
        return W002;
      case "W003":
        return W003;
      case "W004":
        return W004;
      case "W005":
        return W005;
      case "W006":
        return W006;
      case "W007":
        return W007;
      case "W008":
        return W008;
      case "W009":
        return W009;
      case "W010":
        return W010;
      case "W011":
        return W011;
      case "W012":
        return W012;
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
        const response = await fetch("http://localhost:8000/get-watches");
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
      <h1>Watches Category</h1>
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
                style={{width: "80%"}}
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
                  <span>{product.price ? `LKR ${product.price}` : "N/A"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Watchers;
