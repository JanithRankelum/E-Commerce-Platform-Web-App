import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./GProduct.css";
import watch from "../../../../assets/images/Popular/Elephanthouse.jpg";
import router from "../../../../assets/images/Popular/Harpic.jpg";
import cctv from "../../../../assets/images/Popular/nila_warala.jpg";
import pen from "../../../../assets/images/Popular/patties.jpg";
import console from "../../../../assets/images/Popular/Tetos.jpg";
import fridge from "../../../../assets/images/Popular/Butter.jpg";
import camera from "../../../../assets/images/Popular/Curry_paste.jpg";
import drone from "../../../../assets/images/Popular/Pelawaththa.jpg";
import mic from "../../../../assets/images/Popular/bread.jpg";
import mini_camera from "../../../../assets/images/Popular/Paspangu_tea.jpg";
import tripod from "../../../../assets/images/Popular/Cloves.jpg";
import tv from "../../../../assets/images/Popular/Cardamon.jpg";
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
      name: "Elepant House drink",
      model: "drinks 500ml packs",
      rating: "5.0",
      sold: "52k",
      price: "LKR. 700",
      imgSrc: watch,
      images: [watch, pen, watch, watch],
      description: "This is a 500ml pack of Elephant House drinks.",
      specifications: "energy drink, 500ml, 12 packs",
    },
    {
      id: "002",
      name: "Harpic toilet cleaner 500ml",
      model: "Harpic toilet cleaner",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 500",
      imgSrc: router,
      images: [router, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "003",
      name: "Tetos snacks",
      model: "snacks",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 90",
      imgSrc: console,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "004",
      name: "Ambewela Butter 200g",
      model: "Butter",
      rating: "5.0",
      sold: "52k",
      price: "LKR. 1,012",
      imgSrc: fridge,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "005",
      name: "Hot Curry Paste",
      model: "Curry Paste",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 252",
      imgSrc: camera,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "006",
      name: "Pelawaththa milk powder 400g",
      model: "mil powder",
      rating: "5.0",
      sold: "52k",
      price: "LKR. 1,092.50",
      imgSrc: drone,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "007",
      name: "Cardamon 50g",
      model: "Spices",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 342",
      imgSrc: tv,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "008",
      name: "Cloves 100g pack",
      model: "Spices",
      rating: "5.0",
      sold: "52k",
      price: "LKR. 117.60",
      imgSrc: tripod,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "009",
      name: "Paspangu tea 500g pack",
      model: "Tea paksuvud",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 324",
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
      name: "MDK patties 10pcs pack",
      model: " Short eats",
      rating: "4.5",
      sold: "52",
      price: "LKR. 544.50",
      imgSrc: pen,
      images: [fridge, fridge_1, fridge_2, fridge_3, fridge_4],
      description:
        "<br/>50L Capacity <br/> No Frost <be/> Energy Efficient <br/> Eco Friendly R600a Refrigerant <br/> Double Door <br/> 2 inch Thick Thermal Insulated Wall <br/> LED Lighting <br/> Copper Tubbing",
      specifications:
        "<br/>Brand:INNOVEX<br/>Model:INR-240I<br/>Capacity:250L<br/>Frost:No<br/>Type:Double Door Refrigeration and Cooling<br/>Technology:R600a Refrigerant<br/>No of Doors:2<br/>No of Compartments:2<br/>Wall Thickness:2 inches ",
    },
    {
      id: "0011",
      name: "Bread Slices",
      model: "short eats",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 153",
      imgSrc: mic,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "0012",
      name: "Nila warala oil",
      model: "Oil",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 653.20",
      imgSrc: cctv,
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
    navigate(`/GDetails?productName=${productName}`); 
  };

  const handleDetailsClick = (product) => {
    const productName = product.name; 
    navigate(`/GDetails?productName=${productName}`); 
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