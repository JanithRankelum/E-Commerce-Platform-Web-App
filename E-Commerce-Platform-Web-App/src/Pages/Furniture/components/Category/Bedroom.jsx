import "./Kitchen.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";

import Bed001 from "../../../Furniture/assets/Images/Category/Bedroom/Bed001.jpg";
import Bed002 from "../../../Furniture/assets/Images/Category/Bedroom/Bed002.png";
import Bed003 from "../../../Furniture/assets/Images/Category/Bedroom/Bed003.png";
import Bed004 from "../../../Furniture/assets/Images/Category/Bedroom/Bed004.png";
import Bed005 from "../../../Furniture/assets/Images/Category/Bedroom/Bed005.png";
import Bed006 from "../../../Furniture/assets/Images/Category/Bedroom/Bed006.png";
import Bed007 from "../../../Furniture/assets/Images/Category/Bedroom/Bed001.jpg";
import Bed008 from "../../../Furniture/assets/Images/Category/Bedroom/Bed001.jpg";
import Bed009 from "../../../Furniture/assets/Images/Category/Bedroom/Bed001.jpg";
import Bed010 from "../../../Furniture/assets/Images/Category/Bedroom/Bed001.jpg";
import Bed011 from "../../../Furniture/assets/Images/Category/Bedroom/Bed001.jpg";
import Bed012 from "../../../Furniture/assets/Images/Category/Bedroom/Bed001.jpg";


const Bedroom = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  const getImage = (id) => {
    switch (id) {
      case "Bed001":
        return Bed001;
      case "Bed002":
        return Bed002;
      case "Bed003":
        return Bed003;
      case "Bed004":
        return Bed004;
      case "Bed005":
        return Bed005;
      case "Bed006":
        return Bed006;
      case "Bed007":
        return Bed007;
      case "Bed008":
        return Bed008;
      case "Bed009":
        return Bed009;
      case "Bed010":
        return Bed010;
      case "Bed011":
        return Bed011;
      case "Bed012":
        return Bed012;
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
        const response = await fetch("http://localhost:8000/get-bedroom");
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
      <h1>Bedroom Category</h1>
      <p>Transform your bedroom into a cozy and relaxing retreat.</p>

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

export default Bedroom;
