import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminFooter.css";

function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.password) {
      alert("Username and password are required.");
      return false;
    }
    return true;
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;

    if (formData.name === "admin" && formData.password === "1234") {
      navigate("/admin/addProduct");
    } else {
      alert("Invalid username or password.");
    }
  }

  return (
    <div>
      <section
        style={{ height: "39vw", justifyContent: "center" }}
        id="login-container"
      >
        <section>
          <button id="go-back" onClick={() => navigate("/Login")}>
            Go Back
          </button>
        </section>
        <section
          style={{ justifyContent: "center", padding: "1vw" }}
          id="login-header"
        >
          <h2>
            Welcome <span id="nameSpan">Admin</span> Please login.
          </h2>
        </section>
        <section id="form-container">
          <form id="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleInputChange}
              id="form-input-u"
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              id="form-input-p"
            />
            <label id="form-check">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <h4>Show Password</h4>
            </label>
            <button type="submit" id="form-submit">
              login
            </button>
          </form>
        </section>
      </section>
    </div>
  );
}

export default AdminLogin;
