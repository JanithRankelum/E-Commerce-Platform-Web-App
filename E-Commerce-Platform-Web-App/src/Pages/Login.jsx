import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../Components/Context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [uemail, setuemail] = useState("");
  const [uphone, setuphone] = useState("");
  const [uaddress, setuaddress] = useState("");
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const toggleForm = () => setIsSignUpVisible(!isSignUpVisible);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddressInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    if (
      !formData.email &&
      !formData.phone &&
      !formData.name &&
      !formData.password
    ) {
      alert("Please fill in all required fields.");
      return false;
    }
    if (!formData.name || !formData.password) {
      alert("Username and password are required.");
      return false;
    }
    return true;
  };

  const validateAddressForm = () => {
    if (!formData.name && !formData.address) {
      alert("Please fill in all required fields in Address Book.");
      return false;
    }
    if (!formData.address) {
      alert("Address is required.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const url = isSignUpVisible
      ? "http://localhost:8000/login"
      : "http://localhost:8000/validate-user";

    try {
      setIsLoading(true);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "An error occurred");

      setUser({ name: formData.name, ...result });

      alert(result.message || "Address added successfully!");
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    if (!validateAddressForm()) return;

    const url = "http://localhost:8000/address";

    try {
      setIsLoading(true);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "An error occurred");

      alert(result.message || "Login successful!");
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user && user.name) {
      const fetchUserDetails = async () => {
        try {
          const res = await fetch(
            `http://localhost:8000/get-user-details/${user.name}`
          );
          const result = await res.json();
          if (res.ok) {
            setuemail(result.email);
            setuphone(result.phone);
          } else {
            alert(result.message || "Error fetching user details.");
          }
        } catch (error) {
          alert("Error fetching user details.");
        }
      };

      fetchUserDetails();
    }
  }, [user]);

  useEffect(() => {
    if (user && user.name) {
      const fetchUseraddressDetails = async () => {
        try {
          const res = await fetch(
            `http://localhost:8000/get-user-address/${user.name}`
          );
          const result = await res.json();
          if (res.ok) {
            setuaddress(result.address);
          } else {
            alert(result.message || "Error fetching user address.");
          }
        } catch (error) {
          alert("Error fetching user address.");
        }
      };

      fetchUseraddressDetails();
    }
  }, [user]);

  const handleLogout = () => {
    setUser(null);
  };

  if (user) {
    return (
      <div>
        <section id="profile-container">
          <section id="profile-header">
            <h2>WELCOME {user.name}!</h2>
          </section>
          <h1>Manage My Account</h1>
          <section id="account-container">
            <section id="pp-container">
              <div id="account-header">
                <h4>Personal Profile</h4>
              </div>
              <div id="account-details">
                <form>
                  <label>User Name</label>
                  <input type="text" value={user.name} disabled />

                  <label>Email</label>
                  <input type="email" value={uemail} disabled />

                  <label>Phone No</label>
                  <input type="tel" value={uphone} disabled />
                </form>
              </div>
              <br></br>
              <button
                id="form-submit"
                style={{ width: "30vw", justifyItems: "center" }}
              >
                Edit Profile
              </button>
            </section>
            <section id="ad-container">
              <div id="account-header">
                <h4>Address Book</h4>
              </div>
              <div id="account-details">
                <form onSubmit={handleAddressSubmit}>
                  <label>User Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    disabled
                  />
                  <label>Address</label>
                  {uaddress === "" ? (
                    <>
                      <input
                        type="text"
                        name="address"
                        placeholder={uaddress}
                        value={formData.address}
                        onChange={handleAddressInputChange}
                      />
                      <button
                        style={{ width: "30vw", justifySelf: "center" }}
                        type="submit"
                        id="form-submit"
                      >
                        Add Address
                      </button>
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        name="address"
                        placeholder={uaddress}
                      />
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <button
                        style={{ width: "30vw", justifySelf: "center" }}
                        id="form-submit"
                      >
                        Edit Profile
                      </button>
                    </>
                  )}
                </form>
              </div>
            </section>
          </section>
          <button
            id="form-submit"
            onClick={handleLogout}
            style={{ width: "20vw", backgroundColor: "red" }}
          >
            Logout
          </button>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section id="login-container">
        <section id="login-header">
          <h2>
            Welcome to <span id="nameSpan">VirtualStore!</span> Please login.
          </h2>
          <h3 onClick={() => navigate("/admin")}>Admin Login</h3>
        </section>
        <section id="form-container">
          <form id="form" onSubmit={handleSubmit}>
            <p id="form-header">
              {isSignUpVisible ? (
                <span id="form-header">Sign Up</span>
              ) : (
                <span id="form-header">Sign In</span>
              )}
            </p>
            {isSignUpVisible && (
              <>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  id="form-input-e"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  id="form-input-no"
                />
              </>
            )}
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
            <button type="submit" id="form-submit" disabled={isLoading}>
              {isLoading
                ? "Processing..."
                : isSignUpVisible
                ? "Sign Up"
                : "Login"}
            </button>
            <label id="form-fPass">
              <h4>
                Forgot <span id="fPassSpan">Password?</span>
              </h4>
            </label>
            <label id="switch-container">
              {isSignUpVisible ? (
                <p>
                  {" "}
                  Already have an account?{" "}
                  <span onClick={toggleForm}>Sign in</span>
                </p>
              ) : (
                <p>
                  New here? <span onClick={toggleForm}> Sign up</span>
                </p>
              )}
            </label>
          </form>
        </section>
      </section>
    </div>
  );
}

export default Login;
