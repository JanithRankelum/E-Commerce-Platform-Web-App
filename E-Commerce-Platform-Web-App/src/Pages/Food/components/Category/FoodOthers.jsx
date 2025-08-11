import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Meat.css";

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";


import Fo001 from "../../../Electronics/assets/Images/Category/Phones/P001.png";
import Fo002 from "../../../Electronics/assets/Images/Category/Phones/P002.png";
import Fo003 from "../../../Electronics/assets/Images/Category/Phones/P003.png";
import Fo004 from "../../../Electronics/assets/Images/Category/Phones/P004.png";
import Fo005 from "../../../Electronics/assets/Images/Category/Phones/P005.png";
import Fo006 from "../../../Electronics/assets/Images/Category/Phones/P006.png";
import Fo007 from "../../../Electronics/assets/Images/Category/Phones/P007.png";
import Fo008 from "../../../Electronics/assets/Images/Category/Phones/P008.png";
import Fo009 from "../../../Electronics/assets/Images/Category/Phones/P009.png";
import Fo010 from "../../../Electronics/assets/Images/Category/Phones/P010.png";
import Fo011 from "../../../Electronics/assets/Images/Category/Phones/P011.png";
import Fo012 from "../../../Electronics/assets/Images/Category/Phones/P012.png";


const FoodOthers = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  const getImage = (id) => {
    switch (id) {
      case "Fo001":
        return Fo001;
      case "Fo002":
        return Fo002;
      case "Fo003":
        return Fo003;
      case "Fo004":
        return Fo004;
      case "Fo005":
        return Fo005;
      case "Fo006":
        return Fo006;
      case "Fo007":
        return Fo007;
      case "Fo008":
        return Fo008;
      case "Fo009":
        return Fo009;
      case "Fo010":
        return Fo010;
      case "Fo011":
        return Fo011;
      case "Fo012":
        return Fo012;
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
        const response = await fetch("http://localhost:8000/get-foodother");
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
      <h1>Food Others Category</h1>
      <p>Specialty items and essentials, all in one place.</p>

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

export default FoodOthers;
