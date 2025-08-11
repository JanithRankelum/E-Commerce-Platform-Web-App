import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardNumber: "",
    nameOnCard: "",
    expiry: "",
    cvv: "",
  });
  const [error, setError] = useState("");
  const { total } = location.state || {};

  console.log({ total });
  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaynow = (e) => {
    e.preventDefault();

    const allFieldFilled = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    if (!allFieldFilled) {
      setError("Please fill all the required fields.");
      return;
    }

    if (!/^\d{16}$/.test(formData.cardNumber)) {
      setError("Card number must be 16 digits.");
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      setError("Expiry must be in MM/YY format.");
      return;
    }

    if (!/^\d{3}$/.test(formData.cvv)) {
      setError("CVV must be 3 digits.");
      return;
    }

    setError("");
    navigate("/SuccessPayment");
  };

  return (
    <div className="payment-container">
      <h1>Credit/Debit Card Payment</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className="payment-form" onSubmit={handlePaynow}>
        {/* Card Number */}
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            placeholder="xxxx xxxx xxxx xxxx"
            value={formData.cardNumber}
            onChange={handleInputChanges}
            maxLength="16"
            pattern="\d{16}"
            required
          />
        </div>

        {/* Name on Card */}
        <div className="form-group">
          <label htmlFor="nameOnCard">Name on Card</label>
          <input
            type="text"
            name="nameOnCard"
            placeholder="John Doe"
            value={formData.nameOnCard}
            onChange={handleInputChanges}
            required
          />
        </div>

        {/* Expiry and CVV */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiry">Expiry (MM/YY)</label>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleInputChanges}
              maxLength="5"
              pattern="\d{2}/\d{2}"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="password"
              name="cvv"
              placeholder="123"
              value={formData.cvv}
              onChange={handleInputChanges}
              maxLength="3"
              pattern="\d{3}"
              required
            />
          </div>
        </div>

        {/* Summary */}
        <div className="payment-summary">
          <p>Total Amount:<strong> Rs.{total}.00</strong></p>
        </div>

        <button type="submit" className="pay-now-button">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
