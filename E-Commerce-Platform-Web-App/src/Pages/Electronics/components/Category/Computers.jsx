import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Phones.css";

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";



import Com001 from "../../../Electronics/assets/Images/Category/Computers/Com001.jpg";
import Com002 from "../../../Electronics/assets/Images/Category/Computers/Com002.jpg";
import Com003 from "../../../Electronics/assets/Images/Category/Computers/Com003.jpg";
import Com004 from "../../../Electronics/assets/Images/Category/Computers/Com004.png";
import Com005 from "../../../Electronics/assets/Images/Category/Computers/Com005.jpg";
import Com006 from "../../../Electronics/assets/Images/Category/Phones/P006.png";
import Com007 from "../../../Electronics/assets/Images/Category/Phones/P007.png";
import Com008 from "../../../Electronics/assets/Images/Category/Phones/P008.png";
import Com009 from "../../../Electronics/assets/Images/Category/Phones/P009.png";
import Com010 from "../../../Electronics/assets/Images/Category/Phones/P010.png";
import Com011 from "../../../Electronics/assets/Images/Category/Phones/P011.png";
import Com012 from "../../../Electronics/assets/Images/Category/Phones/P012.png";


const Computers = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

 // Get image by id

  const getImage = (id) => {
    switch (id) {
      case "Com001":
        return Com001;
      case "Com002":
        return Com002;
      case "Com003":
        return Com003;
      case "Com004":
        return Com004;
      case "Com005":
        return Com005;
      case "Com006":
        return Com006;
      case "Com007":
        return Com007;
      case "Com008":
        return Com008;
      case "Com009":
        return Com009;
      case "Com010":
        return Com010;
      case "Com011":
        return Com011;
      case "Com012":
        return Com012;
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
        const response = await fetch("http://localhost:8000/get-computers");
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
      <h1>Computer Category</h1>
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

export default Computers;
