import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./EDetails.css";
import Product from "../Product/EProduct";

import watch from "../../../../assets/images/Popular/watch.png";
import router from "../../../../assets/images/Popular/router.png";
import cctv from "../../../../assets/images/Popular/cctv.png";
import pen from "../../../../assets/images/Popular/pen.png";
import console from "../../../../assets/images/Popular/console.png";
import fridge from "../../../../assets/images/Popular/fridge.png";
import camera from "../../../../assets/images/Popular/camera.png";
import drone from "../../../../assets/images/Popular/drone.png";
import mic from "../../../../assets/images/Popular/mic.png";
import mini_camera from "../../../../assets/images/Popular/mini-camera.png";
import tripod from "../../../../assets/images/Popular/tripod.png";
import tv from "../../../../assets/images/Popular/tv.png";

import fridge_1 from "../../../../assets/images/Popular/fridge/1.png";
import fridge_2 from "../../../../assets/images/Popular/fridge/2.png";
import fridge_3 from "../../../../assets/images/Popular/fridge/3.png";
import fridge_4 from "../../../../assets/images/Popular/fridge/4.png";

const Details = () => {
  const productList = [
    {
      id: "001",
      name: "Apple Watch Series 7",
      model: "apple watch",
      rating: "5.0",
      sold: "52k",
      price: 32999.0,
      imgSrc: watch,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "002",
      name: "Asus Router",
      model: "asus 5Ghz Router",
      rating: "3.2",
      sold: "120k",
      price: 10499.00,
      imgSrc: router,
      images: [router, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "003",
      name: "Playstation 5",
      model: "PS5 Best Gaming Console in 2024",
      rating: "3.2",
      sold: "120k",
      price: 10499.00,
      imgSrc: console,
      images: [watch, pen, watch, watch],
      colors: ["#402E7A", "#FFDF5A", "#488FB1", "#8BE3E1", "#A3CD9E"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "004",
      name: "Apple Watch Series 7",
      model: "apple watch",
      rating: "5.0",
      sold: "52k",
      price: 32990.00,
      imgSrc: watch,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "005",
      name: "canon",
      model: "canon",
      rating: "3.2",
      sold: "120k",
      price: 10499.00,
      imgSrc: camera,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "006",
      name: "Drone",
      model: "apple watch",
      rating: "5.0",
      sold: "52k",
      price: 32999.00,
      imgSrc: drone,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "007",
      name: "Asus Router",
      model: "asus 5Ghz Router",
      rating: "3.2",
      sold: "120k",
      price: 10499.00,
      imgSrc: tv,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "008",
      name: "Apple Watch Series 7",
      model: "apple watch",
      rating: "5.0",
      sold: "52k",
      price: 32990.00,
      imgSrc: tripod,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "009",
      name: "Asus Router",
      model: "asus 5Ghz Router",
      rating: "3.2",
      sold: "120k",
      price: 10499.00,
      imgSrc: mini_camera,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: `
        This is a high-end smartphone with amazing features. <br/>
        This is a high-end smartphone with amazing features. <br/>
        This is a high-end smartphone with amazing features.
      `,

      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "0010",
      name: "Innovex Refrigerator",
      model: " INR-240I",
      rating: "4.5",
      sold: "52",
      price: 120450.00,
      imgSrc: fridge,
      images: [fridge, fridge_1, fridge_2, fridge_3, fridge_4],
      colors: ["#89A8B2", "#4C585B", "#2A004E", "#8D0B41", "#000000"],
      capacities: ["250  L", "500  L", "1000 L"],
      inch: ["5  Ft", "5.5  Ft", "6  Ft"],
      description:
        "<br/>50L Capacity <br/> No Frost <be/> Energy Efficient <br/> Eco Friendly R600a Refrigerant <br/> Double Door <br/> 2 inch Thick Thermal Insulated Wall <br/> LED Lighting <br/> Copper Tubbing",
      specifications:
        "<br/>Brand:INNOVEX<br/>Model:INR-240I<br/>Capacity:250L<br/>Frost:No<br/>Type:Double Door Refrigeration and Cooling<br/>Technology:R600a Refrigerant<br/>No of Doors:2<br/>No of Compartments:2<br/>Wall Thickness:2 inches ",
    },
    {
      id: "0011",
      name: "Asus Router",
      model: "asus 5Ghz Router",
      rating: "3.2",
      sold: "120k",
      price: 10499.00,
      imgSrc: mic,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "0012",
      name: "Asus Router",
      model: "asus 5Ghz Router",
      rating: "3.2",
      sold: "120k",
      price: 10499.00,
      imgSrc: cctv,
      images: [watch, pen, watch, watch],
      colors: ["#ff0000", "#0000ff", "#ffff00", "#ffffff"],
      capacities: [128, 256, 512],
      inch: [128, 256, 512],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
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
