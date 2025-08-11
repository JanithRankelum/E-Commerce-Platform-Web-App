import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./HFDetails.css";
import Product from "../Product/HFProduct";

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

const Details = () => {
  const productList = [
    {
      id: "001",
      name: "Luxury Bed Sheets",
      model: "Bedroom",
      rating: "4.0",
      sold: "2k",
      price: 4000.0,
      imgSrc: watch,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "Bamboo Viscose Blend Bed Sheet Set - Luxuriously Soft and Comfortable.",
      specifications: "Fitted Sheet + Flat Sheet + 2 Standard Pillowcasesa",
    },
    {
      id: "002",
      name: "Carysil Kitchen Sink",
      model: "Kitchen Sink",
      rating: "3.2",
      sold: "100k",
      price: 10500.0,
      imgSrc: router,
      images: [router, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "Black Carysil Kitchen Sink.",
      specifications:
        "Quadro R10 24×18 | Stainless Steel 304 Grade | German Engineered",
    },
    {
      id: "003",
      name: "Office Executive Table",
      model: "Executive Table",
      rating: "4.2",
      sold: "10k",
      price: 110175.0,
      imgSrc: cctv,
      images: [watch, pen, watch, watch],
      colors: ["#402E7A", "#FFDF5A", "#488FB1", "#8BE3E1", "#A3CD9E"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "Office executive table combines modern design with functionality.",
      specifications:
        "Brownish colour tone together with sophisticated chrome detailing will enrich the décor to the next level.",
    },
    {
      id: "004",
      name: "Amorho LED Bathroom Mirror",
      model: "Bathroom LED Mirror",
      rating: "3.0",
      sold: "1k",
      price: 32000.0,
      imgSrc: pen,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "55x 30, Backlit + Front-Lighted Vanity Mirror, Dimmable Bathroom Mirrors for Wall, Anti-Fog, Memory.",
      specifications: "3 Colors, Double LED Lights, Shatter-Proof, ETL Listed",
    },
    {
      id: "005",
      name: "Wall Cabinet",
      model: "Home Cabinet",
      rating: "3.2",
      sold: "20k",
      price: 140500.0,
      imgSrc: console,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "Wall cabinet designs optimize storage space while adding a stylish and functional element to any room.",
      specifications: "This cabinet includes Plywood ",
    },
    {
      id: "006",
      name: "Multi Functional Queen Size Smart Bed",
      model: "Multi Functional Smart Bed",
      rating: "5.0",
      sold: "12k",
      price: 170000.0,
      imgSrc: fridge,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "We recommend 9 mattress for best height, other are compatible.",
      specifications: "Mattress is not included.",
    },
    {
      id: "007",
      name: "Window Curtain Drape Panel Sheer Scarf Solid Color Curtains",
      model: "Window Curtain",
      rating: "4.3",
      sold: "1k",
      price: 6000.0,
      imgSrc: camera,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "Home And Household Products 2 Pcs Vines Leaves Tulle Window Curtain",
      specifications: "Drape Panel Sheer Scarf Solid Color Curtains",
    },
    {
      id: "008",
      name: "Bedside Rack Table",
      model: "Side Table",
      rating: "4.0",
      sold: "3k",
      price: 320000.0,
      imgSrc: drone,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "The Modern Lighted Bedside Table is the epitome of contemporary elegance and functionality.",
      specifications: "Stylish bedroom furniture | Versatile bedside table",
    },
    {
      id: "009",
      name: "Comfortable Bed Mattress",
      model: "Bed Mattress",
      rating: "2.8",
      sold: "6k",
      price: 90000.0,
      imgSrc: mini_camera,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description:
        "The 78 X 60 X 10 Spring Pillow Top Mattress FLEXIFOAM has a durable inner spring/coil assembly for lasting support and comfort, ensuring a restful sleep experience",

      specifications:
        "It offers a good mattress feel and the pillow top design adds extra softness and luxury for enhanced comfort.",
    },
    {
      id: "0010",
      name: " Wood Dining Table ",
      model: "Table Set",
      rating: "4.5",
      sold: "52",
      price: 120000.0,
      imgSrc: mic,
      images: [fridge, fridge_1, fridge_2, fridge_3, fridge_4],
      colors: ["#89A8B2", "#4C585B", "#2A004E", "#8D0B41", "#000000"],
      capacities: ["250  L", "500  L", "1000 L"],
      inch: ["5  Ft", "5.5  Ft", "6  Ft"],
      description:
        "The Dining Table offers an elegant touch to accentuate the overall impression of any living space with its unique and contemporary design.",
      specifications: "<br/>Width: 36 Inches <br/> Height: 30 Inches",
    },
    {
      id: "0011",
      name: "HOME Modern Vanity Mirror",
      model: "Home Mirror",
      rating: "4.8",
      sold: "20k",
      price: 35000.0,
      imgSrc: tripod,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "Perfect addition to your bedroom furniture collection.",
      specifications:
        "Pre-assembled modern vanity mirror with melamine laminated board material.",
    },
    {
      id: "0012",
      name: "Metal Outdoor Chair",
      model: "asus 5Ghz Router",
      rating: "2.5",
      sold: "8k",
      price: 67000.0,
      imgSrc: tv,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "Black Stackable Modern Metal Patio Outdoor Dining Chair",
      specifications:
        "<br/>Weather resistant for easy upkeep and outdoor use. <br/>Made of high-quality steel to ensure durable use.",
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
