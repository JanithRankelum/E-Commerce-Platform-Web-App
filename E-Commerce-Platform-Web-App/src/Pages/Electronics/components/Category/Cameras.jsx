import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Phones.css";

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";

import C001 from "../../../Electronics/assets/Images/Category/Cameras/C001.png";
import C002 from "../../../Electronics/assets/Images/Category/Phones/P002.jpg";
import C003 from "../../../Electronics/assets/Images/Category/Phones/P003.png";
import C004 from "../../../Electronics/assets/Images/Category/Phones/P004.png";
import C005 from "../../../Electronics/assets/Images/Category/Phones/P005.png";
import C006 from "../../../Electronics/assets/Images/Category/Phones/P005.jpg";
import C007 from "../../../Electronics/assets/Images/Category/Phones/P007.png";
import C008 from "../../../Electronics/assets/Images/Category/Phones/P008.png";
import C009 from "../../../Electronics/assets/Images/Category/Phones/P009.png";
import C010 from "../../../Electronics/assets/Images/Category/Phones/P010.png";
import C011 from "../../../Electronics/assets/Images/Category/Phones/P011.png";
import C012 from "../../../Electronics/assets/Images/Category/Phones/P012.png";


const Cameras = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();


  const getImage = (id) => {
    switch (id) {
      case "C001":
        return C001;
      case "C002":
        return C002;
      case "C003":
        return C003;
      case "C004":
        return C004;
      case "C005":
        return C005;
      case "C006":
        return C006;
      case "C007":
        return C007;
      case "C008":
        return C008;
      case "C009":
        return C009;
      case "C010":
        return C010;
      case "C011":
        return C011;
      case "C012":
        return C012;
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
        const response = await fetch("http://localhost:8000/get-cameras");
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
      <h1>Cameras Category</h1>
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

export default Cameras;
