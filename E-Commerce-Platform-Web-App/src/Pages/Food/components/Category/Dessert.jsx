import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Meat.css";

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";

import Des001 from "../../../Electronics/assets/Images/Category/Phones/P001.png";
import Des002 from "../../../Electronics/assets/Images/Category/Phones/P002.png";
import Des003 from "../../../Electronics/assets/Images/Category/Phones/P003.png";
import Des004 from "../../../Electronics/assets/Images/Category/Phones/P004.png";
import Des005 from "../../../Electronics/assets/Images/Category/Phones/P005.png";
import Des006 from "../../../Electronics/assets/Images/Category/Phones/P006.png";
import Des007 from "../../../Electronics/assets/Images/Category/Phones/P007.png";
import Des008 from "../../../Electronics/assets/Images/Category/Phones/P008.png";
import Des009 from "../../../Electronics/assets/Images/Category/Phones/P009.png";
import Des010 from "../../../Electronics/assets/Images/Category/Phones/P010.png";
import Des011 from "../../../Electronics/assets/Images/Category/Phones/P011.png";
import Des012 from "../../../Electronics/assets/Images/Category/Phones/P012.png";


const Dessert = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  const getImage = (id) => {
    switch (id) {
      case "Des001":
        return Des001;
      case "Des002":
        return Des002;
      case "Des003":
        return Des003;
      case "Des004":
        return Des004;
      case "Des005":
        return Des005;
      case "Des006":
        return Des006;
      case "Des007":
        return Des007;
      case "Des008":
        return Des008;
      case "Des009":
        return Des009;
      case "Des010":
        return Des010;
      case "Des011":
        return Des011;
      case "Des012":
        return Des012;
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
        const response = await fetch("http://localhost:8000/get-Desserts");
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
      <h1>Desserts Category</h1>
      <p>Delightful sweets to satisfy your cravings</p>

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

export default Dessert;
