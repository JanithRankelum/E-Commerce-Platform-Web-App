import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./HProduct.css";
import watch from "../../../../assets/images/Offers/Oregano_oil.jpg";
import router from "../../../../assets/images/Offers/Nail_clipper.jpg"; 
import cctv from "../../../../assets/images/Offers/Gun_muscle.jpg";
import pen from "../../../../assets/images/Offers/Makeup_primer.jpg";
import console from "../../../../assets/images/Offers/Black_head.jpg";
import fridge from "../../../../assets/images/Offers/Tattoo_cartridge.jpg";
import camera from "../../../../assets/images/Offers/Oxymeter.jpg";
import drone from "../../../../assets/images/Offers/Tongue_scrapper.jpg";
import mic from "../../../../assets/images/Offers/Nail_gel.jpg";
import mini_camera from "../../../../assets/images/Offers/Scissors.jpg";
import tripod from "../../../../assets/images/Offers/Stretch_band.jpg";
import tv from "../../../../assets/images/Offers/Posture_corrector.jpg";

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
      name: "Oil of Oregano Capsules - Support Digestion, Intestinal Health, Immune System, Antioxidant - 120 Capsules",
      model: "Oil of Oregano Capsules",
      rating: "5.0",
      sold: "52k",
      price: "LKR. 13,300",
      imgSrc: watch,
      images: [watch, pen, watch, watch],
      description: "This is a good multi-vitamin supplement that supports digestion, intestinal health, immune system, and antioxidant properties.",
      specifications: "120 Capsules, Supports Digestion, Intestinal Health, Immune System, Antioxidant",
    },
    {
      id: "002",
      name: "7-24pcs Professional Nail Clippers Kit - Ultra Sharp Fingernail and Toenail Cutters",
      model: "asus 5Ghz Router",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 1,424",
      imgSrc: router,
      images: [router, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "003",
      name: "2025 fascia gun muscle relaxation massager electric vibration massage gun professional grade neck mask gun",
      model: "massage gun",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 10,499",
      imgSrc: cctv,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "004",
      name: "Makeup Primer, 1.01 Fl Oz",
      model: "makeup primer",
      rating: "5.0",
      sold: "52k",
      price: "LKR. 3,450",
      imgSrc: pen,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "005",
      name: "KIUZOU Finger Pulse Oximeter Blood Oxygen Saturation Monitor with Heart Rate Monitor and SpO2 Levels",
      model: "oximeter machine",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 7,670",
      imgSrc: camera,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "006",
      name: "clean tongue scraper",
      model: "tongue scraper",
      rating: "5.0",
      sold: "52k",
      price: "LKR. 381",
      imgSrc: drone,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "007",
      name: "Reinforced belt Lumbar Support Posture Corrector",
      model: "posture corrector",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 3,380",
      imgSrc: tv,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "008",
      name: "Latex Resistance Bands Set - 5 Levels Elastic Loop Bands for Yoga, Pilates, Strength Training, Physical Therapy, Home Fitness",
      model: "stretch band",
      rating: "5.0",
      sold: "52k",
      price: "LKR. 1,091",
      imgSrc: tripod,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "009",
      name: "Hair dressing scissors - 10 inches",
      model: "hair scissors",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 1,781",
      imgSrc: mini_camera,
      images: [watch, pen, watch, watch],
      description: `
      This is a high-end smartphone with amazing features. <br/>
      This is a high-end smartphone with amazing features. <br/>
      This is a high-end smartphone with amazing features.
    `,

      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "0010",
      name: "CNC 20 pcs Tattoo Cartridge",
      model: " Tattoo cartridge",
      rating: "4.5",
      sold: "52",
      price: "LKR. 750",
      imgSrc: fridge,
      images: [fridge, fridge_1, fridge_2, fridge_3, fridge_4],
      description:
        "<br/>50L Capacity <br/> No Frost <be/> Energy Efficient <br/> Eco Friendly R600a Refrigerant <br/> Double Door <br/> 2 inch Thick Thermal Insulated Wall <br/> LED Lighting <br/> Copper Tubbing",
      specifications:
        "<br/>Brand:INNOVEX<br/>Model:INR-240I<br/>Capacity:250L<br/>Frost:No<br/>Type:Double Door Refrigeration and Cooling<br/>Technology:R600a Refrigerant<br/>No of Doors:2<br/>No of Compartments:2<br/>Wall Thickness:2 inches ",
    },
    {
      id: "0011",
      name: "Vanelisa color nail Gel Polish Kit - 12 pcs",
      model: "Nail gel",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 3,237",
      imgSrc: mic,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "0012",
      name: "Black head remover kit - 10 pcs",
      model: "Beauty tool",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 2,389",
      imgSrc: console,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
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
    navigate(`/Hdetails?productName=${productName}`); 
  };

  const handleDetailsClick = (product) => {
    const productName = product.name; 
    navigate(`/Hdetails?productName=${productName}`); 
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
