import Facebook from "../../assets/YouTube.png";
import Twitter from "../../assets/Twitter.png";
import Instagram from "../../assets/Instagram.png";
import LinkedIn from "../../assets/LinkedIn.png";
import YouTube from "../../assets/YouTube.png";
import storeImg from "../../assets/images/footer/Logo.png";
import card1Img from "../../assets/images/footer/visa.png";
import card2Img from "../../assets/images/footer/master.png";
import card3Img from "../../assets/images/footer/american.png";
import { useNavigate } from "react-router-dom";

import "./Footer.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <section id="footer">
      <div className="footer-container">
        <div id="footer-details-main">
          <img id="storeImage" src={storeImg} alt="Store logo"></img>
          <p>Better Choice, Better Price.</p>
          <br></br>
          <br></br>
          <img id="image" src={Facebook} alt="Facebook"></img>
          <img id="image" src={Twitter} alt="Twitter"></img>
          <img id="image" src={Instagram} alt="Instagram"></img>
          <img id="image" src={LinkedIn} alt="LinkedIn"></img>
          <img id="image" src={YouTube} alt="YouTube"></img>
        </div>
        <div id="footer-details">
          <ul>
            <li>
              <span>Pages</span>
            </li>
            <li>Home</li>
            <li>Profile</li>
            <li>Favourite</li>
            <li>Cart</li>
          </ul>
        </div>
        <div id="footer-details">
          <ul>
            <li>
              <span>Know Us</span>
            </li>
            <li>About</li>
            <li id="contact-us" onClick={() => navigate("/ContactUs")}>Contact us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div id="footer-details">
          <ul>
            <li>
              <span>Support</span>
            </li>
            <li>Getting started</li>
            <li>Help center</li>
            <li>Report a bug</li>
            <li>Chat support</li>
          </ul>
        </div>
        <div id="footer-details">
          <ul>
            <li>
              <span>Pay With</span>
            </li>
            <li>
              <img id="cardImage" src={card1Img}></img>
              <img id="cardImage" src={card2Img}></img>
              <img id="cardImage" src={card3Img}></img>
            </li>
          </ul>
        </div>
      </div>
      <div id="footer-end">
        <br></br>
        <br></br>
        <hr></hr>
        <p>
          Copyright © 2024 VirtualStore | All Rights Reserved | Terms and
          Conditions | Privacy Policy
        </p>
      </div>
    </section>
  );
}
