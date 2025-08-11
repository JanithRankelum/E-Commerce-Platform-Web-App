import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./FDetails.css";
import Product from "../Product/Product";

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

const Details = () => {
  const productList = [
    {
      id: "001",
      name: "Blue and White Color Mixed Necklace for Ladies",
      model: "gem & jewellery",
      rating: "5.0",
      sold: "5k",
      price: 4315.52,
      imgSrc: watch,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "Size: rectangle 1.3*1.8cm ，square2.3*2.3cm，round 1.7*1.7cm，waterdrop 1.2*2cm，heart 1.5*1.5cm，oval 1.3*1.5cm.",
      specifications:
        "Material-CRYSTAL,Necklace Type-Chokers Necklaces,Gender-Women,Metals Type-Copper,Origin-Mainland China,Fine or Fashion-fashion,Item Type-NECKLACES",
    },
    {
      id: "002",
      name: "30cm Women Short Curly Wigs",
      model: "hair extention & wigs",
      rating: "5",
      sold: "5k",
      price: 992.45,
      imgSrc: router,
      images: [router, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "Women Short Curly Wigs with Partial Hairstyle Natural Look High Temperature Silk Hair Wigs Long-Lasting Wear Fashion Fluffy Brown Color Wig Headgear Hair Product",
      specifications:
        "Feature-Daily Use, Can Be Permed-No, Cap Size-Average,Density-100%,Texture-Curly",
    },
    {
      id: "003",
      name: "Pieces Women's Clothes Yoga Fitness Bta Sports Suit",
      model: "clothing",
      rating: "3.2",
      sold: "12k",
      price: 6520.83,
      imgSrc: cctv,
      images: [watch, pen, watch, watch],
      colors: ["#402E7A", "#FFDF5A", "#488FB1", "#8BE3E1", "#A3CD9E"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "2 Pieces Women's Clothes Yoga Set Workout Tracksuit Sportswear Gym Clothing High Waist Bell-bottoms Sexy Fitness Bta Sports Suit",
      specifications:
        "pocket description-No Pocket,Hign-concerned Chemical-None,Blocking-REGULAR,Craft of Weaving-Knit,Department Name-Women",
    },
    {
      id: "004",
      name: "Sports Shoes Unisex Sneakers White",
      model: "shoes",
      rating: "3.5",
      sold: "2k",
      price: 14942.94,
      imgSrc: pen,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "Original Asics Nimbus 26 Running Shoes Men Cushion Stability Asics Sports Shoes Unisex Sneakers White",
      specifications:
        "Hign-concerned Chemical-None,Material-POLYESTER,Insole Material-RUBBER,Technology-ForMotion,Applicable Place-Outdoor Lawn",
    },
    {
      id: "005",
      name: "Men's Sneakers Breathable Asics Kayano 31 Sports Shoes",
      model: "shoes",
      rating: "3.5",
      sold: "19k",
      price: 15392.02,
      imgSrc: console,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "Asics Gel-Kayano 31 Running Shoes Women and Men's Sneakers Breathable Asics Kayano 31 Sports Shoes",
      specifications:
        "Hign-concerned Chemical-None,Material-POLYESTER,Upper Height-low,Insole,Material-PU,Technology-ForMotion",
    },
    {
      id: "006",
      name: "Multi-card Slot Men Wallet",
      model: "wallet",
      rating: "4.5",
      sold: "22k",
      price: 802.87,
      imgSrc: fridge,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "Brand new and high quality,Name: Men wallet,Material: PU leather,Color: Black, Brown,Size: 11*9*1cm(4.33*3.54*0.39in),Package include:,1 x Wallet",
      specifications:
        "Hign-concerned Chemical-None,Place Of Origin-China (mainland),Interior-Interior Slot Pocket,Card Holder,Lining Material-POLYESTER,Model Number-Men wallet",
    },
    {
      id: "007",
      name: "Men's Wallet Genuine Leather",
      model: "wallet",
      rating: "4.3",
      sold: "15k",
      price: 940.06,
      imgSrc: camera,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "Men's leather wallet: Men's wallet is a thin wallet made of PU. Its slim-fit design makes it perfect for jeans, dress slacks, and shorts.",
      specifications:
        "Lining Material-POLYESTER,Material Composition-PU,Main Material-PU",
    },
    {
      id: "008",
      name: "individuality Traditional Golden Gem Sun Earrings",
      model: "gem & jewellary",
      rating: "4.0",
      sold: "12k",
      price: 1530.17,
      imgSrc: drone,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "If you need large quantities of wholesale goods, please contact us directly. We will give you the best price.",
      specifications:
        "Back Finding-Push-back,Model Number-EH,Style-TRENDY,Gender-Unisex,Material-Metal",
    },
    {
      id: "009",
      name: "Summer Men Casual t-Shirt ",
      model: "clothing",
      rating: "3.2",
      sold: "16k",
      price: 850.82,
      imgSrc: mic,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: `
      Summer Men Casual t-Shirt Short Sleeve White Tee Shirts Soild o-Neck Tops t Shirt Quick Dry Gym Running t-Shirts Male clothes
      `,

      specifications:
        "Special Features-Breathable,Lightweight,Quick Dry,Product Care,Instructions-Machine wash,Closure Type-Pull On,Hign-concerned Chemical-None,Applicable Season-summer",
    },
    {
      id: "0010",
      name: "Crew Neck Fashion Women T Shirt",
      model: "clothing",
      rating: "4.2",
      sold: "9k",
      price: 1569.06,
      imgSrc: mini_camera,
      images: [fridge, fridge_1, fridge_2, fridge_3, fridge_4],
      colors: ["#89A8B2", "#4C585B", "#2A004E", "#8D0B41", "#000000"],
      capacities: ["250  L", "500  L", "1000 L"],
      inch: ["5  Ft", "5.5  Ft", "6  Ft"],
      description:
        "Crew Neck Fashion Women T Shirt Street Casual T-Shirt Solid Plus Size Top Tees Sexy Slim Summer Short Sleeve Women's Clothing",
      specifications:
        "Hign-concerned Chemical-None,Release Date-Summer 2024,Craft of Weaving-TAT,Fit Type-SKINNY,Pattern Them-other",
    },
    {
      id: "0011",
      name: "Mens Drawstring Sports Short",
      model: "clothing",
      rating: "3",
      sold: "3k",
      price: 236.93,
      imgSrc: tripod,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "Mens Drawstring Sports Shorts Gym Training Running Bodybuilding Workout Fitness Short Pants Stretch Plus Size Solid Men's Shorts",
      specifications:
        "Applicable Season-Four Seasons,Applicable Scene-CASUAL,Pattern Type-Bordered,Material-SPANDEX",
    },
    {
      id: "0012",
      name: "Cow Leather Men Wallet",
      model: "wallet",
      rating: "4.0",
      sold: "13k",
      price: 3664.20,
      imgSrc: tv,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "TGENODERN Cow Leather Men Wallets with Coin Pocket Vintage Male Purse Function Brown Genuine Leather Men Wallet  with Card Holders",
      specifications:
        "Genuine Leather Type-Cow Leather,Place Of Origin-China (mainland),Interior-Coin Pocket,Lining Material-POLYESTER",
    },
  ];

  const qaData = [
    {
      question: "All received goods? Came?",
      answer:
        "I did not receive my order, and they have not returned the money.",
    },
    {
      question: "I have not received the goods, and you?",
      answer: "I did not receive my order either. They are thieves.",
    },
    { question: "Suitable for iPhone 7 Plus?", answer: "Yes, fits perfectly." },
  ];

  const [product, setProduct] = useState(""); // For dynamic product data
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const productName = query.get("productName");
  const [newQuestion, setNewQuestion] = useState("");

  useEffect(() => {
    const findProduct = () => {
      const foundProduct = productList.find(
        (item) => item.name === productName
      );
      setProduct(foundProduct);
    };

    if (productName) {
      findProduct();
    }
  }, [productName]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  if (!productName || !product) {
    return <div></div>;
  }

  const handleSubmitQuestion = () => {
    if (newQuestion.trim()) {
      console.log("New Question Submitted:", newQuestion);
      setNewQuestion(""); // Clear the textarea after submission
    } else {
      alert("Please enter a question before submitting.");
    }
  };

  const handleCartClick = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      description: product.description,
      quantity,
      price: product.price,
      imgSrc: product.imgSrc,
    };

    // Retrieve existing cart data from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the item already exists in the cart
    const existingItemIndex = existingCart.findIndex(
      (item) => item.id === cartItem.id
    );

    if (existingItemIndex > -1) {
      // Update quantity if the item already exists
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      // Add the new item to the cart
      existingCart.push(cartItem);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div>
      <section id="edetails-con">
        {/* Main Product Section */}
        <div className="product-edetails-overview">
          <section className="product-edetails-container">
            <section>
              <div>
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className="product-main-image"
                />
              </div>
            </section>

            {/* Description and Specifications */}
            <section>
              <div className="edetails-data">
                <div className="product-edetails-description">
                  <h2>Description</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></p>
                </div>
                <div className="product-edetails-specifications">
                  <h2>Specifications</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: product.specifications }}
                  ></p>
                </div>
              </div>
            </section>

            {/* Product Info and Actions */}
            <section id="product-edetails-info">
              <div className="product-edetails-info-actions">
                <h1>{product.name}</h1>
                <h4>{product.model}</h4>
                <p className="product-edetails-price">
                  LKR {product.price.toFixed(2)}
                </p>
                <div className="product-edetails-rating-sold">
                  <span> ⭐ {product.rating} </span> | <span> ❤️ 4k </span> |{" "}
                  <span> Sold: {product.sold} </span>
                </div>

                {/* Quantity Selector */}
                <div className="product-details-quantity-selector">
                  <h3>Quantity:</h3>
                  <div className="details-quantity-box">
                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)}>+</button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="product-edetails-action-buttons">
                  <button className="product-buy-now">Buy Now</button>
                  <button
                    onClick={handleCartClick}
                    className="product-add-to-cart"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </section>
          </section>
        </div>

        <section className="product-end-details-container">
          {/* Q&A Section */}
          <div className="eqa-section">
            <h2>Buyer Questions & Answers</h2>
            {qaData.map((item, index) => (
              <div key={index} className="qa-item">
                <p>
                  <strong>Q:</strong> {item.question}
                </p>
                <p>
                  <strong>A:</strong> {item.answer}
                </p>
              </div>
            ))}

            {/* Input Section for New Question */}
            <div className="eqa-input-section">
              <textarea
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Ask a question..."
                rows="4"
                className="eqa-textarea"
              ></textarea>
              <button className="eqa-submit-btn" onClick={handleSubmitQuestion}>
                Submit
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="eproduct-reviews-section">
            <h2>Customer Reviews</h2>
            <p>No reviews yet.</p>
          </div>

          <div className="product-heading-container">
            <div className="product-header">
              <h2>
                Related <span className="highlight">items</span>
              </h2>
              <div className="underline-d1"></div>
              <div className="underline-d2"></div>
            </div>
          </div>

          <div className="popular-products">
            <Product />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Details;
