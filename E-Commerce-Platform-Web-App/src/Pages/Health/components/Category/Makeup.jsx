import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Toggle Heart Image

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";

// Card Images

import P001 from "../../../Electronics/assets/Images/Category/MakeUp/MU001.jpg";
import P002 from "../../../Electronics/assets/Images/Category/MakeUp/MU002.jpg";
import P003 from "../../../Electronics/assets/Images/Category/MakeUp/MU003.jpg";
import P004 from "../../../Electronics/assets/Images/Category/MakeUp/MU004.jpg";
import P005 from "../../../Electronics/assets/Images/Category/MakeUp/MU005.jpg";
import P006 from "../../../Electronics/assets/Images/Category/MakeUp/MU006.jpg";
import P007 from "../../../Electronics/assets/Images/Category/Phones/P007.png";
import P008 from "../../../Electronics/assets/Images/Category/Phones/P008.png";
import P009 from "../../../Electronics/assets/Images/Category/Phones/P009.png";
import P010 from "../../../Electronics/assets/Images/Category/Phones/P010.png";
import P011 from "../../../Electronics/assets/Images/Category/Phones/P011.png";
import P012 from "../../../Electronics/assets/Images/Category/Phones/P012.png";

import "./Skincare.css";

const MakeUp = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  // Get image by id

  const getImage = (id) => {
    switch (id) {
      case "MU001":
        return P001;
      case "MU002":
        return P002;
      case "MU003":
        return P003;
      case "MU004":
        return P004;
      case "MU005":
        return P005;
      case "MU006":
        return P006;
      case "MU007":
        return P007;
      case "MU008":
        return P008;
      case "MU009":
        return P009;
      case "MU010":
        return P010;
      case "MU011":
        return P011;
      case "MU012":
        return P012;
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
        const response = await fetch("http://localhost:8000/get-makeup");
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
      <h1>Makeup Category</h1>
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

export default MakeUp;
