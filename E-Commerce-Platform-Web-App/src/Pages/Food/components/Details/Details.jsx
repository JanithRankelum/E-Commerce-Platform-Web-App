import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./F&vDetails.css";
import Product from "../Product/Product";

import watch from "../../../../assets/images/Popular/Bellpepper.png";
import router from "../../../../assets/images/Popular/delum 1.png";
import cctv from "../../../../assets/images/Popular/brocoli.png";
import pen from "../../../../assets/images/Popular/papaya.png";
import console from "../../../../assets/images/Popular/prawn 1.png";
import fridge from "../../../../assets/images/Popular/kiwi.jpeg";
import camera from "../../../../assets/images/Popular/sweetcorn.jpg";
import drone from "../../../../assets/images/Popular/pine.png";
import mic from "../../../../assets/images/Popular/chickendrumsticks.png";
import mini_camera from "../../../../assets/images/Popular/porkcubes.png";
import tripod from "../../../../assets/images/Popular/dragonfruit 1.png";
import tv from "../../../../assets/images/Popular/gotukola.png";

import fridge_1 from "../../../../assets/images/Popular/fridge/1.png";
import fridge_2 from "../../../../assets/images/Popular/fridge/2.png";
import fridge_3 from "../../../../assets/images/Popular/fridge/3.png";
import fridge_4 from "../../../../assets/images/Popular/fridge/4.png";

const Details = () => {
  const productList = [
    {
      id: "001",
      name: "Bellpepper",
      model: "Bellpepper Green ,red , yellow (per 100g)",
      rating: "",
      sold: "70k",
      price: 350.00,
      imgSrc: watch,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "Per 100g",
      specifications: "",
    },
    {
      id: "002",
      name: "Delum",
      model: "Imported (per 1kg) ",
      rating: "3.2",
      sold: "80k",
      price: 2400.00,
      imgSrc: router,
      images: [router, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "Per 1kg",
      specifications: "",
    },
    {
      id: "003",
      name: "broccoli",
      model: "",
      rating: "3.2",
      sold: "90k",
      price: 4500.00,
      imgSrc: cctv,
      images: [watch, pen, watch, watch],
      colors: ["#402E7A", "#FFDF5A", "#488FB1", "#8BE3E1", "#A3CD9E"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "Per 1kg",
      specifications: "",
    },
    {
      id: "004",
      name: "Papaya",
      model: "tanin",
      rating: "5.0",
      sold: "52k",
      price: 340.00,
      imgSrc: pen,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "",
      specifications: "",
    },
    {
      id: "005",
      name: "prawn",
      model: "",
      rating: "3.2",
      sold: "120k",
      price: 3800.00,
      imgSrc: console,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "Per 1kg",
      specifications: "",
    },
    {
      id: "006",
      name: "kiwi",
      model: "",
      rating: "3.0",
      sold: "20k",
      price: 2500.00,
      imgSrc: fridge,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "Per 1kg",
      specifications: "",
    },
    {
      id: "007",
      name: "sweetcorn",
      model: "",
      rating: "3.2",
      sold: "70k",
      price: 750.00,
      imgSrc: camera,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "",
      specifications: "",
    },
    {
      id: "008",
      name: "pineapple",
      model: "",
      rating: "4.0",
      sold: "52k",
      price: 800.00,
      imgSrc: drone,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "Per 1kg",
      specifications: "",
    },
    {
      id: "009",
      name: "chicken drumsticks",
      model: "",
      rating: "3.2",
      sold: "80k",
      price: 1600.00,
      imgSrc: mic,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "Per 1kg",
      specifications: "",
    },
    {
      id: "0010",
      name: "pork cubes",
      model: " ",
      rating: "4.5",
      sold: "52k",
      price: 3200.00,
      imgSrc: mini_camera,
      images: [fridge, fridge_1, fridge_2, fridge_3, fridge_4],
      colors: ["#89A8B2", "#4C585B", "#2A004E", "#8D0B41", "#000000"],
      capacities: ["250  L", "500  L", "1000 L"],
      inch: ["5  Ft", "5.5  Ft", "6  Ft"],
      description:
        "Per 1kg",
      specifications:
        "  ",
    },
    {
      id: "0011",
      name: "dragon fruit",
      model: "",
      rating: "3.2",
      sold: "60k",
      price: 1950.00,
      imgSrc: tripod,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "Per 1kg",
      specifications: "",
    },
    {
      id: "0012",
      name: "gotukola",
      model: "",
      rating: "3.2",
      sold: "50k",
      price: 150.00,
      imgSrc: tv,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "Per 100g",
      specifications: "",
    },
  ];

  const qaData = [
    {
      question: "Are the fruits and vegetables fresh?",
      answer:
        "Yes, we source our produce daily from trusted farms and suppliers to ensure freshness and quality.",
    },
    {
      question: "Where do you source your fruits and vegetables?",
      answer:
        "We partner with local farmers and certified organic suppliers to bring you the best seasonal and high-quality produce.",
    },
    {
      question: "Can I customize the weight of the produce?",
      answer:
        "Yes, you can choose the weight or quantity options available on each product page.",
    },
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
