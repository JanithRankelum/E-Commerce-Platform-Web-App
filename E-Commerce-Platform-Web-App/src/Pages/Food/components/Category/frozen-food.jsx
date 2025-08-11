import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Meat.css";

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";


import Fr001 from "../../../Electronics/assets/Images/Category/Phones/P001.png";
import Fr002 from "../../../Electronics/assets/Images/Category/Phones/P002.png";
import Fr003 from "../../../Electronics/assets/Images/Category/Phones/P003.png";
import Fr004 from "../../../Electronics/assets/Images/Category/Phones/P004.png";
import Fr005 from "../../../Electronics/assets/Images/Category/Phones/P005.png";
import Fr006 from "../../../Electronics/assets/Images/Category/Phones/P006.png";
import Fr007 from "../../../Electronics/assets/Images/Category/Phones/P007.png";
import Fr008 from "../../../Electronics/assets/Images/Category/Phones/P008.png";
import Fr009 from "../../../Electronics/assets/Images/Category/Phones/P009.png";
import Fr010 from "../../../Electronics/assets/Images/Category/Phones/P010.png";
import Fr011 from "../../../Electronics/assets/Images/Category/Phones/P011.png";
import Fr012 from "../../../Electronics/assets/Images/Category/Phones/P012.png";


const FrozenFood = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  const getImage = (id) => {
    switch (id) {
      case "Fr001":
        return Fr001;
      case "Fr002":
        return Fr002;
      case "Fr003":
        return Fr003;
      case "Fr004":
        return Fr004;
      case "Fr005":
        return Fr005;
      case "Fr006":
        return Fr006;
      case "Fr007":
        return Fr007;
      case "Fr008":
        return Fr008;
      case "Fr009":
        return Fr009;
      case "Fr010":
        return Fr010;
      case "Fr011":
        return Fr011;
      case "Fr012":
        return Fr012;
      default:
        return "https://via.placeholder.com/150"; // Default placeholder image
    }
  };
  

  const generateRandomStats = () => {
    return {
      rating: (Math.random() * 5).toFixed(1),
      sold: Math.floor(Math.random() * 1000),
    };
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/get-frozenfood");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Error fetching products");
        }

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

  const handleCardClick = (product) => {
    navigate(`/product-details/${product.id}`, { state: { product } });
  };

  const handleHeartClick = (index) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [index]: !prevFavorites[index],
    }));
  };

  return (
    <section className="phones-page">
      <h1>frozen foods Category</h1>
      <p>Quick, tasty frozen snacks and meals.</p>

      <button onClick={() => navigate(-1)} className="back-button">
        Go Back
      </button>
      <section className="product-container">
        <div className="product-grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleCardClick(product)}
            >
              <img
                src={getImage(product.id)}
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
                    e.stopPropagation();
                    handleHeartClick(index);
                  }}
                >
                  <img
                    src={favorites[index] ? heartFilled : heartUnfilled}
                    alt={favorites[index] ? "Unfavorite" : "Favorite"}
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

export default FrozenFood;
