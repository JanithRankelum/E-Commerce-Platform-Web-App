import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Product.css";
import watch from "../../../../assets/images/Popular/Bellpepper.jpg";
import router from "../../../../assets/images/Popular/delum 1.png";
import cctv from "../../../../assets/images/Popular/brocoli.png";
import pen from "../../../../assets/images/Popular/papaya.png";
import console from "../../../../assets/images/Popular/prawn 1.png";
import fridge from "../../../../assets/images/Popular/kiwi.jpeg";
import camera from "../../../../assets/images/Popular/sweetcorn.jpg";
import drone from "../../../../assets/images/Popular/pine.png";
import mic from "../../../../assets/images/Popular/chickendrumsticks.png";
import mini_camera from "../../../../assets/images/Popular/porkcubes.png";
import tripod from "../../../../assets/images/Popular/dragonfruit.png";
import tv from "../../../../assets/images/Popular/gotukola.png";

import fridge_1 from "../../../../assets/images/Popular/fridge/1.png";
import fridge_2 from "../../../../assets/images/Popular/fridge/2.png";
import fridge_3 from "../../../../assets/images/Popular/fridge/3.png";
import fridge_4 from "../../../../assets/images/Popular/fridge/4.png";

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";

const Product = () => {
  const [favorites, setFavorites] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState(null);
  const [selectedInch, setSelectedInch] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const products = [
    {
      id: "001",
      name: "Bellpepper",
      model: "Bellpepper Green ,red , yellow  ",
      rating: "",
      sold: "70",
      price: "LKR. 350.00 (per 100g)",
      imgSrc: watch,
      images: [watch, pen, watch, watch],
      description: "",
      specifications: "",
    },
    {
      id: "002",
      name: "Delum",
      model: "Imported",
      rating: "3.2",
      sold: "80k",
      price: "LKR. 2400.00 (per 1kg)",
      imgSrc: router,
      images: [router, pen, watch, watch],
      description: "",
      specifications: "",
    },
    {
      id: "003",
      name: "broccoli",
      model: "",
      rating: "3.2",
      sold: "90k",
      price: "LKR. 4500.00 (per 1kg)",
      imgSrc: cctv,
      images: [watch, pen, watch, watch],
      description: "",
      specifications: "",
    },
    {
      id: "004",
      name: "Papaya",
      model: "tanin",
      rating: "5.0",
      sold: "52k",
      price: "LKR. 340.00 (per 1kg)",
      imgSrc: pen,
      images: [watch, pen, watch, watch],
      description: "",
      specifications: "",
    },
    {
      id: "005",
      name: "prawn",
      model: "",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 3800.00 (per 1kg)",
      imgSrc: console,
      images: [watch, pen, watch, watch],
      description: "",
      specifications: "",
    },
    {
      id: "006",
      name: "kiwi",
      model: "",
      rating: "3.0",
      sold: "20k",
      price: "LKR. 2500.00 (per 1kg)",
      imgSrc: fridge,
      images: [watch, pen, watch, watch],
      description: "",
      specifications: "",
    },
    {
      id: "007",
      name: "sweetcorn",
      model: "",
      rating: "3.2",
      sold: "70k",
      price: "LKR. 750.00 (per 1kg)",
      imgSrc: camera,
      images: [watch, pen, watch, watch],
      description: "",
      specifications: "",
    },
    {
      id: "008",
      name: "pineapple",
      model: "",
      rating: "4.0",
      sold: "52k",
      price: "LKR. 800.00 (per 1kg)",
      imgSrc: drone,
      images: [watch, pen, watch, watch],
      description: "",
      specifications: "",
    },
    {
      id: "009",
      name: "chicken drumsticks",
      model: "",
      rating: "3.2",
      sold: "80k",
      price: "LKR. 1600.00 (per 1kg)",
      imgSrc: mic,
      images: [watch, pen, watch, watch],
      description: `
      
    `,

      specifications: "",
    },
    {
      id: "0010",
      name: "pork cubes",
      model: " ",
      rating: "4.5",
      sold: "52k",
      price: "LKR. 3200.00 (per 1kg)",
      imgSrc: mini_camera,
      images: [fridge, fridge_1, fridge_2, fridge_3, fridge_4],
      description:
        "",
      specifications:
        " ",
    },
    {
      id: "0011",
      name: "dragon fruit",
      model: "",
      rating: "3.2",
      sold: "60k",
      price: "LKR. 1950.00 (per 1kg)",
      imgSrc: tripod,
      images: [watch, pen, watch, watch],
      description: "",
      specifications: "",
    },
    {
      id: "0012",
      name: "gotukola",
      model: "",
      rating: "3.2",
      sold: "52k",
      price: "LKR. 150.00 (per 100g)",
      imgSrc: tv,
      images: [watch, pen, watch, watch],
      description: "",
      specifications: "",
    },
    // Add other products here...
  ];

  const handleHeartClick = (index) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [index]: !prevFavorites[index],
    }));
  };

  const handleCardClick = (product) => {
    const productName = product.name; 
    navigate(`/details?productName=${productName}`); 
  };

  const handleDetailsClick = (product) => {
    const productName = product.name; 
    navigate(`/details?productName=${productName}`); 
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const handleImageClick = (image) => {
    setSelectedProduct((prevProduct) => ({
      ...prevProduct,
      imgSrc: image,
    }));
  };

  return (
    <div className="product-container">
      <div className="product-grid">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
            onClick={() => handleCardClick(product)}
          >
            <img
              src={product.imgSrc} // Use product's specific main image
              alt={product.name}
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
                className="eproduct-heart-icon"
                onClick={(e) => {
                  e.stopPropagation();
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
                Price: <span>{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isPopupOpen && selectedProduct && (
        <div className="popup-overlay">
          <div className="popup-panel">
            <button className="close-popup-btn" onClick={handleClosePopup}>
              &times;
            </button>
            <div className="popup-content">
              <div className="popup-image-section">
                <img
                  src={selectedProduct.imgSrc} // Use selected product's main image
                  alt={selectedProduct.name}
                  className="popup-main-image"
                />
                <div className="popup-thumbnail-images">
                  {selectedProduct.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="thumbnail"
                      onClick={() => handleImageClick(image)} // Update the main image on click
                    />
                  ))}
                </div>
              </div>
              <div className="popup-details">
                <h2>{selectedProduct.name}</h2>
                <p className="model">{selectedProduct.model}</p>
                <div className="info-container">
                  <div className="rating">
                    <span className="star">⭐</span>
                    <span className="rating-value">3.2</span>
                  </div>
                  <div className="favourite">
                    <span className="heart">❤</span>
                    <span className="likes-value">4k</span>
                  </div>
                  <div className="sold">
                    <span>Sold:</span>
                    <span className="sold-value">120k</span>
                  </div>
                </div>

                <p
                  className="popup-specifications"
                  dangerouslySetInnerHTML={{
                    __html: selectedProduct.specifications,
                  }}
                ></p>

                <div className="popup-colors">
                  <p>Colours:</p>
                  {selectedProduct.colors.map((color, i) => (
                    <span
                      key={i}
                      className={`color-box ${
                        color === selectedColor ? "selected-color" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    ></span>
                  ))}
                </div>
                <div className="popup-quantity">
                  <p>Quantity:</p>
                  <div className="quantity-box">
                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)}>+</button>
                  </div>
                </div>
                <div className="popup-capacity">
                  <p>Capacity:</p>
                  {selectedProduct.capacities.map((cap, i) => (
                    <button
                      key={i}
                      className={`capacity-button ${
                        cap === selectedCapacity ? "selected" : ""
                      }`}
                      onClick={() => setSelectedCapacity(cap)}
                    >
                      {cap}
                    </button>
                  ))}
                </div>
                <div className="popup-capacity">
                  <p>size:</p>
                  {selectedProduct.inch.map((cap, i) => (
                    <button
                      key={i}
                      className={`capacity-button ${
                        cap === selectedInch ? "selected" : ""
                      }`}
                      onClick={() => setSelectedInch(cap)}
                    >
                      {cap}
                    </button>
                  ))}
                </div>
                <div className="popup-buttons">
                  <button className="popup-add-to-cart">Add to cart</button>
                  <button
                    className="popup-details-btn"
                    onClick={() => handleDetailsClick(selectedProduct)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
