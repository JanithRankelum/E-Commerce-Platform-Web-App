import "./Kitchen.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";


import K001 from "../../../Furniture/assets/Images/Category/Kitchen/K001.jpg";
import K002 from "../../../Furniture/assets/Images/Category/Kitchen/K002.jpg";
import K003 from "../../../Furniture/assets/Images/Category/Kitchen/K003.jpg";
import K004 from "../../../Furniture/assets/Images/Category/Kitchen/K004.jpg";
import K005 from "../../../Furniture/assets/Images/Category/Kitchen/K005.jpg";
import K006 from "../../../Furniture/assets/Images/Category/Kitchen/K006.jpg";
import K007 from "../../../Furniture/assets/Images/Category/Kitchen/K001.jpg";
import K008 from "../../../Furniture/assets/Images/Category/Kitchen/K001.jpg";
import K009 from "../../../Furniture/assets/Images/Category/Kitchen/K001.jpg";
import K010 from "../../../Furniture/assets/Images/Category/Kitchen/K001.jpg";
import K011 from "../../../Furniture/assets/Images/Category/Kitchen/K001.jpg";
import K012 from "../../../Furniture/assets/Images/Category/Kitchen/K001.jpg";


const Kitchen = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  const getImage = (id) => {
    switch (id) {
      case "K001":
        return K001;
      case "K002":
        return K002;
      case "K003":
        return K003;
      case "K004":
        return K004;
      case "K005":
        return K005;
      case "K006":
        return K006;
      case "K007":
        return K007;
      case "K008":
        return K008;
      case "K009":
        return K009;
      case "K010":
        return K010;
      case "K011":
        return K011;
      case "K012":
        return K012;
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
        const response = await fetch("http://localhost:8000/get-kitchen");
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
      <h1>Kitchen Category</h1>
      <p>Discover stylish and functional essentials for every kitchen.</p>

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

export default Kitchen;
