import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Toggle Heart Image

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";

// Card Images

import DE001 from "../../../Groceries/assets/Images/Category/Dairyandeggs/DE001.jpg";
import DE002 from "../../../Groceries/assets/Images/Category/Dairyandeggs/DE002.jpg";
import DE003 from "../../../Groceries/assets/Images/Category/Dairyandeggs/DE003.jpg";
import DE004 from "../../../Groceries/assets/Images/Category/Dairyandeggs/DE004.jpg";
import DE005 from "../../../Groceries/assets/Images/Category/Dairyandeggs/DE005.jpg";
import DE006 from "../../../Groceries/assets/Images/Category/Dairyandeggs/DE006.jpg";
import DE007 from "../../../Groceries/assets/Images/Category/Dairyandeggs/DE001.jpg";
import DE008 from "../../../Groceries/assets/Images/Category/Dairyandeggs/DE001.jpg";
import DE009 from "../../../Groceries/assets/Images/Category/Dairyandeggs/DE001.jpg";
import DE010 from "../../../Groceries/assets/Images/Category/Dairyandeggs/DE001.jpg";
import DE011 from "../../../Groceries/assets/Images/Category/Dairyandeggs/DE001.jpg";
import DE012 from "../../../Groceries/assets/Images/Category/Dairyandeggs/DE001.jpg";

import "./Daily.css";

const Daily = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  // Get image by id

  const getImage = (id) => {
    switch (id) {
      case "DE001":
        return DE001;
      case "DE002":
        return DE002;
      case "DE003":
        return DE003;
      case "DE004":
        return DE004;
      case "DE005":
        return DE005;
      case "DE006":
        return DE006;
      case "DE007":
        return DE007;
      case "DE008":
        return DE008;
      case "DE009":
        return DE009;
      case "DE010":
        return DE010;
      case "DE011":
        return DE011;
      case "DE012":
        return DE012;
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
          "http://localhost:8000/get-dairyandeggs"
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
      <h1>Dairy & Eggs Category</h1>
      <p>Shop fresh and high-quality dairy and egg essentials.</p>
      
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

export default Daily;
