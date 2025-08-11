import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Product.css";
import watch from "../../../../assets/images/Popular/bed.jpg";
import router from "../../../../assets/images/Popular/sink01.jpg";
import cctv from "../../../../assets/images/Popular/officetable.png";
import pen from "../../../../assets/images/Popular/bathmirror.png";
import console from "../../../../assets/images/Popular/cabinet.png";
import fridge from "../../../../assets/images/Popular/bedd.png";
import camera from "../../../../assets/images/Popular/curtain.png";
import drone from "../../../../assets/images/Popular/bedtable.png";
import mic from "../../../../assets/images/Popular/tableset.png";
import mini_camera from "../../../../assets/images/Popular/mettress.png";
import tripod from "../../../../assets/images/Popular/bedmirror.png";
import tv from "../../../../assets/images/Popular/chairout.png";

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
      name: "Luxury Bed Sheets",
      model: "Bedroom",
      rating: "4.0",
      sold: "2k",
      price: "LKR. 4,000",
      imgSrc: watch,
      images: [watch, pen,watch , watch],
      description: "Bamboo Viscose Blend Bed Sheet Set - Luxuriously Soft and Comfortable.",
      specifications: "Fitted Sheet + Flat Sheet + 2 Standard Pillowcases",
    },
    {
      id: "002",
      name: "Carysil Kitchen Sink",
      model: "Kitchen Sink",
      rating: "3.2",
      sold: "100k",
      price: "LKR. 10,500",
      imgSrc: router,
      images: [router, pen, watch, watch],
      description: "Black Carysil Kitchen Sink.",
      specifications: "Quadro R10 24×18 | Stainless Steel 304 Grade | German Engineered",
    },
    {
      id: "003",
      name: "Office Executive Table",
      model: "Executive Table",
      rating: "4.2",
      sold: "10k",
      price: "LKR. 110,175",
      imgSrc: cctv,
      images: [watch, pen, watch, watch],
      description: "Office executive table combines modern design with functionality.",
      specifications: "Brownish colour tone together with sophisticated chrome detailing will enrich the décor to the next level.",
    },
    {
      id: "004",
      name: "Amorho LED Bathroom Mirror",
      model: "Bathroom LED Mirror",
      rating: "3.0",
      sold: "1k",
      price: "LKR. 32,000",
      imgSrc: pen,
      images: [watch, pen, watch, watch],
      description: "55x 30, Backlit + Front-Lighted Vanity Mirror, Dimmable Bathroom Mirrors for Wall, Anti-Fog, Memory",
      specifications: "3 Colors, Double LED Lights, Shatter-Proof, ETL Listed",
    },
    {
      id: "005",
      name: "Wall Cabinet",
      model: "canon",
      rating: "3.2",
      sold: "20k",
      price: "LKR. 140,500",
      imgSrc: console,
      images: [watch, pen, watch, watch],
      description: "Wall cabinet designs optimize storage space while adding a stylish and functional element to any room.",
      specifications: "This cabinet includes Plywood",
    },
    {
      id: "006",
      name: "Multi Functional Queen Size Smart Bed",
      model: "Multi Functional Smart Bed",
      rating: "5.0",
      sold: "12k",
      price: "LKR. 170,000",
      imgSrc: fridge,
      images: [watch, pen, watch, watch],
      description: "We recommend 9 mattress for best height, other are compatible.",
      specifications: "Mattress is not included.",
    },
    {
      id: "007",
      name: "Window Curtain Drape Panel Sheer Scarf Solid Color Curtains",
      model: "asus 5Ghz Router",
      rating: "4.3",
      sold: "1k",
      price: "LKR. 6,000",
      imgSrc: camera,
      images: [watch, pen, watch, watch],
      description: "Home And Household Products 2 Pcs Vines Leaves Tulle Window Curtain",
      specifications: "Drape Panel Sheer Scarf Solid Color Curtains",
    },
    {
      id: "008",
      name: "Bedside Rack Table",
      model: "Side Table",
      rating: "4.0",
      sold: "3k",
      price: "LKR. 32,000",
      imgSrc: drone,
      images: [watch, pen, watch, watch],
      description: "The Modern Lighted Bedside Table is the epitome of contemporary elegance and functionality.",
      specifications: "Stylish bedroom furniture | Versatile bedside table",
    },
    {
      id: "009",
      name: "Comfortable Bed Mattress",
      model: "Bed Mattress",
      rating: "2.8",
      sold: "6k",
      price: "LKR. 90,000",
      imgSrc: mini_camera,
      images: [watch, pen, watch, watch],
      description: "The 78 X 60 X 10 Spring Pillow Top Mattress FLEXIFOAM has a durable inner spring/coil assembly for lasting support and comfort, ensuring a restful sleep experience",
      specifications: "It offers a good mattress feel and the pillow top design adds extra softness and luxury for enhanced comfort.",
    },
    {
      id: "0010",
      name: " Wood Dining Table ",
      model: "Table Set",
      rating: "4.5",
      sold: "52",
      price: "LKR. 120,000",
      imgSrc: mic,
      images: [fridge, fridge_1, fridge_2, fridge_3, fridge_4],
      description:
        "The Dining Table offers an elegant touch to accentuate the overall impression of any living space with its unique and contemporary design. Energy Efficient <br/> Eco Friendly R600a Refrigerant <br/> Double Door <br/> 2 inch Thick Thermal Insulated Wall <br/> LED Lighting <br/> Copper Tubbing",
      specifications:"<br/>Width: 36 Inches <br/> Height: 30 Inches",
    },
    {
      id: "0011",
      name: "HOME Modern Vanity Mirror",
      model: "Home Mirror",
      rating: "4.8",
      sold: "20k",
      price: "LKR. 35,000",
      imgSrc: tripod,
      images: [watch, pen, watch, watch],
      description: "Perfect addition to your bedroom furniture collection.",
      specifications: "Pre-assembled modern vanity mirror with melamine laminated board material.",
    },
    {
      id: "0012",
      name: "Metal Outdoor Chair",
      model: "Outdoor Chair",
      rating: "2.5",
      sold: "8k",
      price: "LKR. 67,000",
      imgSrc: tv,
      images: [watch, pen, watch, watch],
      description: "Black Stackable Modern Metal Outdoor Dining Chair",
      specifications: "<br/>Weather resistant for easy upkeep and outdoor use. <br/> Made of high-quality steel to ensure durable use.",
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
    navigate(`/hfdetails?productName=${productName}`); 
  };

  const handleDetailsClick = (product) => {
    const productName = product.name; 
    navigate(`/hfdetails?productName=${productName}`); 
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
