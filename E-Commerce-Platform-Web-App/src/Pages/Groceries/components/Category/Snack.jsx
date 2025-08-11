import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Toggle Heart Image

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";

// Card Images

import SC001 from "../../../Groceries/assets/Images/Category/Snackandchips/SC001.jpg";
import SC002 from "../../../Groceries/assets/Images/Category/Snackandchips/SC002.jpg";
import SC003 from "../../../Groceries/assets/Images/Category/Snackandchips/SC003.jpg";
import SC004 from "../../../Groceries/assets/Images/Category/Snackandchips/SC004.jpg";
import SC005 from "../../../Groceries/assets/Images/Category/Snackandchips/SC005.jpg";
import SC006 from "../../../Groceries/assets/Images/Category/Snackandchips/SC006.jpg";
import SC007 from "../../../Groceries/assets/Images/Category/Snackandchips/SC001.jpg";
import SC008 from "../../../Groceries/assets/Images/Category/Snackandchips/SC001.jpg";
import SC009 from "../../../Groceries/assets/Images/Category/Snackandchips/SC001.jpg";
import SC010 from "../../../Groceries/assets/Images/Category/Snackandchips/SC001.jpg";
import SC011 from "../../../Groceries/assets/Images/Category/Snackandchips/SC001.jpg";
import SC012 from "../../../Groceries/assets/Images/Category/Snackandchips/SC001.jpg";

import "./Daily.css";

const Snack = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  // Get image by id

  const getImage = (id) => {
    switch (id) {
      case "SC001":
        return SC001;
      case "SC002":
        return SC002;
      case "SC003":
        return SC003;
      case "SC004":
        return SC004;
      case "SC005":
        return SC005;
      case "SC006":
        return SC006;
      case "SC007":
        return SC007;
      case "SC008":
        return SC008;
      case "SC009":
        return SC009;
      case "SC010":
        return SC010;
      case "SC011":
        return SC011;
      case "SC012":
        return SC012;
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
          "http://localhost:8000/get-snackandchips"
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
      <h1>Snack & Chips Category</h1>
      <p>Crunch into your favorite snacks and chips today.</p>
      
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

export default Snack;
