import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Product.css";
import watch from "../../../../assets/images/Popular/wcm.jpg";
import router from "../../../../assets/images/Popular/chht.jpg";
import cctv from "../../../../assets/images/Popular/wyl.jpg";
import pen from "../../../../assets/images/Popular/mscs.jpg";
import console from "../../../../assets/images/Popular/mcsa.jpg";
import fridge from "../../../../assets/images/Popular/mswalllet.jpg";
import camera from "../../../../assets/images/Popular/hbwallet.jpg";
import drone from "../../../../assets/images/Popular/ggs.jpg";
import mic from "../../../../assets/images/Popular/tshirt.jpg";
import mini_camera from "../../../../assets/images/Popular/wtshirt.jpg";
import tripod from "../../../../assets/images/Popular/short.jpg";
import tv from "../../../../assets/images/Popular/pbc.jpg";

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
      name: "Blue and White Color Mixed Necklace for Ladies",
      model: "gem & jewellery",
      rating: "5.0",
      sold: "5k",
      price: "LKR. 4,315.52",
      imgSrc: watch,
      images: [watch, pen, watch, watch],
      description: "Size: rectangle 1.3*1.8cm ，square2.3*2.3cm，round 1.7*1.7cm，waterdrop 1.2*2cm，heart 1.5*1.5cm，oval 1.3*1.5cm",
      specifications: "Material-CRYSTAL,Necklace Type-Chokers Necklaces,Gender-Women,Metals Type-Copper,Origin-Mainland China,Fine or Fashion-fashion,Item Type-NECKLACES",
    },
    {
      id: "002",
      name: "30cm Women Short Curly Wigs",
      model: "hair extention & wigs",
      rating: "5",
      sold: "5k",
      price: "LKR. 992.45",
      imgSrc: router,
      images: [router, pen, watch, watch],
      description: "Women Short Curly Wigs with Partial Hairstyle Natural Look High Temperature Silk Hair Wigs Long-Lasting Wear Fashion Fluffy Brown Color Wig Headgear Hair Product",
      specifications: "Feature-Daily Use, Can Be Permed-No, Cap Size-Average,Density-100%,Texture-Curly",
    },
    {
      id: "003",
      name: "Pieces Women's Clothes Yoga Fitness Bta Sports Suit",
      model: "clothing",
      rating: "3.2",
      sold: "12k",
      price: "LKR. 6,520.83",
      imgSrc: cctv,
      images: [watch, pen, watch, watch],
      description: "2 Pieces Women's Clothes Yoga Set Workout Tracksuit Sportswear Gym Clothing High Waist Bell-bottoms Sexy Fitness Bta Sports Suit",
      specifications: "pocket description-No Pocket,Hign-concerned Chemical-None,Blocking-REGULAR,Craft of Weaving-Knit,Department Name-Women",
    },
    {
      id: "004",
      name: "Sports Shoes Unisex Sneakers White",
      model: "shoes",
      rating: "3.5",
      sold: "2k",
      price: "LKR. 14,942.94",
      imgSrc: pen,
      images: [watch, pen, watch, watch],
      description: "Original Asics Nimbus 26 Running Shoes Men Cushion Stability Asics Sports Shoes Unisex Sneakers White",
      specifications: "Hign-concerned Chemical-None,Material-POLYESTER,Insole Material-RUBBER,Technology-ForMotion,Applicable Place-Outdoor Lawn",
    },
    {
      id: "005",
      name: "Men's Sneakers Breathable Asics Kayano 31 Sports Shoe",
      model: "shoes",
      rating: "3.5",
      sold: "19k",
      price: "LKR. 15,392.02",
      imgSrc: console,
      images: [watch, pen, watch, watch],
      description: "Asics Gel-Kayano 31 Running Shoes Women and Men's Sneakers Breathable Asics Kayano 31 Sports Shoes",
      specifications: "Hign-concerned Chemical-None,Material-POLYESTER,Upper Height-low,Insole,Material-PU,Technology-ForMotion",
    },
    {
      id: "006",
      name: "Multi-card Slot Men Wallet",
      model: "wallet",
      rating: "4.5",
      sold: "22k",
      price: "LKR. 802.87",
      imgSrc: fridge,
      images: [watch, pen, watch, watch],
      description: "Brand new and high quality,Name: Men wallet,Material: PU leather,Color: Black, Brown,Size: 11*9*1cm(4.33*3.54*0.39in),Package include:,1 x Wallet ",
      specifications: "Hign-concerned Chemical-None,Place Of Origin-China (mainland),Interior-Interior Slot Pocket,Card Holder,Lining Material-POLYESTER,Model Number-Men wallet",
    },
    {
      id: "007",
      name: "Men's Wallet Genuine Leather ",
      model: "wallet",
      rating: "4.3",
      sold: "15k",
      price: "LKR. 940.06",
      imgSrc: camera,
      images: [watch, pen, watch, watch],
      description: "Men's leather wallet: Men's wallet is a thin wallet made of PU. Its slim-fit design makes it perfect for jeans, dress slacks, and shorts.",
      specifications: "Lining Material-POLYESTER,Material Composition-PU,Main Material-PU",
    },
    {
      id: "008",
      name: "individuality Traditional Golden Gem Sun Earrings",
      model: "gem & jewellary",
      rating: "4.0",
      sold: "12k",
      price: "LKR. 1530.17",
      imgSrc: drone,
      images: [watch, pen, watch, watch],
      description: "If you need large quantities of wholesale goods, please contact us directly. We will give you the best price.",
      specifications: "Back Finding-Push-back,Model Number-EH,Style-TRENDY,Gender-Unisex,Material-Metal",
    },
    {
      id: "009",
      name: "Summer Men Casual t-Shirt",
      model: "clothing",
      rating: "3.2",
      sold: "16k",
      price: "LKR. 850.82",
      imgSrc: mic,
      images: [watch, pen, watch, watch],
      description: `
      Summer Men Casual t-Shirt Short Sleeve White Tee Shirts Soild o-Neck Tops t Shirt Quick Dry Gym Running t-Shirts Male clothes
    `,

      specifications: "Special Features-Breathable,Lightweight,Quick Dry,Product Care,Instructions-Machine wash,Closure Type-Pull On,Hign-concerned Chemical-None,Applicable Season-summer",
    },
    {
      id: "0010",
      name: "Crew Neck Fashion Women T Shirt",
      model: "clothing",
      rating: "4.2",
      sold: "9k",
      price: "LKR. 1,569.06",
      imgSrc: mini_camera,
      images: [fridge, fridge_1, fridge_2, fridge_3, fridge_4],
      description:
        "Crew Neck Fashion Women T Shirt Street Casual T-Shirt Solid Plus Size Top Tees Sexy Slim Summer Short Sleeve Women's Clothing",
      specifications:
        "Hign-concerned Chemical-None,Release Date-Summer 2024,Craft of Weaving-TAT,Fit Type-SKINNY,Pattern Them-other",
    },
    {
      id: "0011",
      name: "Mens Drawstring Sports Short",
      model: "clothing",
      rating: "3.5",
      sold: "3k",
      price: "LKR. 236.93",
      imgSrc: tripod,
      images: [watch, pen, watch, watch],
      description: "Mens Drawstring Sports Shorts Gym Training Running Bodybuilding Workout Fitness Short Pants Stretch Plus Size Solid Men's Shorts",
      specifications: "Applicable Season-Four Seasons,Applicable Scene-CASUAL,Pattern Type-Bordered,Material-SPANDEX",
    },
    {
      id: "0012",
      name: "Cow Leather Men Wallet",
      model: "wallet",
      rating: "4.0",
      sold: "13k",
      price: "LKR. 3,664.20",
      imgSrc: tv,
      images: [watch, pen, watch, watch],
      description: "GENODERN Cow Leather Men Wallets with Coin Pocket Vintage Male Purse Function Brown Genuine Leather Men Wallet  with Card Holders",
      specifications: "Genuine Leather Type-Cow Leather,Place Of Origin-China (mainland),Interior-Coin Pocket,Lining Material-POLYESTER",
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
    navigate(`/fdetails?productName=${productName}`); 
  };

  const handleDetailsClick = (product) => {
    const productName = product.name; 
    navigate(`/fdetails?productName=${productName}`); 
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
