import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../Components/Context/UserContext"; // Import UserContext
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const cartItems = state?.cartItems || [];
  const [total, setTotal] = useState(0);

  // Access the username from the UserContext
  const { user } = useContext(UserContext);

  // Local state for form data and user details
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    province: "",
    address: "",
    town: "",
    zone: "",
    postalcode: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Declare loading state
  
  useEffect(() => {
    if (user && user.name) {
      const fetchUserData = async () => {
        setLoading(true); // Set loading state to true
        try {
          // Fetch user details (email and phone)
          const userRes = await fetch(`http://localhost:8000/get-user-details/${user.name}`);
          const userResult = await userRes.json();
          if (userRes.ok) {
            // Fetch user address
            const addressRes = await fetch(`http://localhost:8000/get-user-address/${user.name}`);
            const addressResult = await addressRes.json();
            if (addressRes.ok) {
              setFormData({
                ...formData,
                name: user.name || "",
                email: userResult.email || "",
                phone: userResult.phone || "",
                address: addressResult.address || "",
              });
            } else {
              alert(addressResult.message || "Error fetching user address.");
            }
          } else {
            alert(userResult.message || "Error fetching user details.");
          }
        } catch (error) {
          alert("Error fetching user data.");
        } finally {
          setLoading(false); // Set loading state to false once the request is complete
        }
      };

      fetchUserData();
    }
  }, [user]); // Ensure the effect runs when the user changes

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Calculate total amount from cart items

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFieldFilled = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    if (!allFieldFilled) {
      setError("Please fill all the required fields.");
      return;
    }
    setError("");
    navigate("/payment", { state: { total } }); // Pass total via state
  };

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal +250.00);
  }, [cartItems]);

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <div className="checkout-content">
        {/* Billing Details Section */}
        <div className="billing-details">
          <h2>Billing details</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {loading ? (
            <p>Loading...</p> // Display loading state
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div>
                  <label>First name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="First name"
                    value={formData.name}
                    onChange={handleInputChanges}
                  />
                </div>
                <div>
                  <label>Last name *</label>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                    value={formData.lastname}
                    onChange={handleInputChanges}
                  />
                </div>
              </div>
              <div>
                <label>Province / Region *</label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleInputChanges}
                >
                  <option value="">Select your province</option>
                  <option value="WP">Western Province</option>
                  <option value="SP">Southern Province</option>
                </select>
              </div>
              <div>
                <label>Street address *</label>
                <input
                  type="text"
                  name="address"
                  placeholder="House number and street name"
                  value={formData.address}
                  onChange={handleInputChanges}
                />
                <input
                  type="text"
                  name="apartment"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  onChange={handleInputChanges}
                />
              </div>
              <div>
                <label>Town / City *</label>
                <input
                  type="text"
                  name="town"
                  placeholder="Town / City"
                  value={formData.town}
                  onChange={handleInputChanges}
                />
              </div>
              <div>
                <label>Zone *</label>
                <input
                  type="text"
                  name="zone"
                  placeholder="Zone"
                  value={formData.zone}
                  onChange={handleInputChanges}
                />
              </div>
              <div>
                <label>Postal Code *</label>
                <input
                  type="text"
                  name="postalcode"
                  placeholder="Postal Code"
                  value={formData.postalcode}
                  onChange={handleInputChanges}
                />
              </div>
              <div>
                <label>Phone *</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChanges}
                />
              </div>
              <div>
                <label>Email address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChanges}
                />
              </div>

              <button type="submit" className="place-order-button">
                Place Order
              </button>
            </form>
          )}
        </div>

        {/* Order Details Section */}
        <div className="order-details">
          <h2>Your order</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    {item.name} × {item.quantity}
                  </td>
                  <td>{item.price}</td>
                  <td>{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Total Price : Rs. {total.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
