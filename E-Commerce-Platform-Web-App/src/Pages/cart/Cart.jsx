import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  // Fetch the cart from localStorage when the component mounts
  const [cartItems, setCartItems] = useState([]);
  const [shipping, setShipping] = useState(250.0);

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Update the cart in localStorage whenever the cartItems state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Handle quantity change for items in the cart
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Remove an item from the cart
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedItems)); // Update localStorage after removing the item
      return updatedItems;
    });
  };

  // Calculate the total price of the cart (including shipping)
  const calculateTotal = () => {
    const itemsTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return itemsTotal + shipping;
  };

  // Navigate to checkout with cart items as state
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems } });
  };

  // Function to format the price with the currency symbol
  const formatPrice = (price) => {
    return `LKR. ${price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="Shopping-cart">
      <div className="cart-items">
        <h1>Your Shopping Cart</h1>
        <p>
          {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
        </p>
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-details">
              <div className="item-name">{item.name}</div>
              <div className="item-description">{item.description}</div>
            </div>
            <div className="item-quantity">
              <button onClick={() => handleQuantityChange(item.id, -1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>
                +
              </button>
            </div>
            <div className="item-price">{formatPrice(item.price)}</div>

            {/* Delete button */}
            <button
              className="remove-item"
              onClick={() => handleRemoveItem(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
        <a className="back-to-shop" onClick={() => navigate("/")}>
          Back to shop
        </a>
      </div>

      <div className="cart-summary">
        <h2>Summary</h2>
        <div className="summary-item">
          <span>ITEMS {cartItems.length}</span>
          <span>
            Rs.{" "}
            {cartItems
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toFixed(2)}
          </span>
        </div>
        <div className="summary-item">
          <span>SHIPPING</span>
          <div>
            <select
              value={shipping}
              onChange={(e) => setShipping(parseFloat(e.target.value))}
            >
              <option value={250.0}>Standard-Delivery - Rs.250.00</option>
              <option value={350.0}>Express-Delivery - Rs.350.00</option>
            </select>
          </div>
        </div>
        <div className="summary-item">
          <span>Enter your code</span>
          <input type="text" placeholder="Enter your code" />
        </div>
        <div className="summary-item">
          <span>TOTAL PRICE</span>
          <span>Rs. {calculateTotal().toFixed(2)}</span>
        </div>
        <button className="checkout-button" onClick={handleCheckout}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
