import "./Kitchen.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";

import Office001 from "../../../Furniture/assets/Images/Category/Officefurniture/Office001.jpg";
import Office002 from "../../../Furniture/assets/Images/Category/Officefurniture/Office002.jpg";
import Office003 from "../../../Furniture/assets/Images/Category/Officefurniture/Office001.jpg";
import Office004 from "../../../Furniture/assets/Images/Category/Officefurniture/Office001.jpg";
import Office005 from "../../../Furniture/assets/Images/Category/Officefurniture/Office001.jpg";
import Office006 from "../../../Furniture/assets/Images/Category/Officefurniture/Office001.jpg";
import Office007 from "../../../Furniture/assets/Images/Category/Officefurniture/Office001.jpg";
import Office008 from "../../../Furniture/assets/Images/Category/Officefurniture/Office001.jpg";
import Office009 from "../../../Furniture/assets/Images/Category/Officefurniture/Office001.jpg";
import Office010 from "../../../Furniture/assets/Images/Category/Officefurniture/Office001.jpg";
import Office011 from "../../../Furniture/assets/Images/Category/Officefurniture/Office001.jpg";
import Office012 from "../../../Furniture/assets/Images/Category/Officefurniture/Office001.jpg";


const Officefurniture = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  const getImage = (id) => {
    switch (id) {
      case "Office001":
        return Office001;
      case "Office002":
        return Office002;
      case "Office003":
        return Office003;
      case "Office004":
        return Office004;
      case "Office005":
        return Office005;
      case "Office006":
        return Office006;
      case "Office007":
        return Office007;
      case "Office008":
        return Office008;
      case "Office009":
        return Office009;
      case "Office010":
        return Office010;
      case "Office011":
        return Office011;
      case "Office012":
        return Office012;
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
        const response = await fetch("http://localhost:8000/get-officefurniture");
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
      <h1>Office Furniture Category</h1>
      <p>Create a productive workspace with our office solutions.</p>

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

export default Officefurniture;
