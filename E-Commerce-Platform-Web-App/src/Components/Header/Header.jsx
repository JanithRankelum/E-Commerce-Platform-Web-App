import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import "./Header.css";
import storeImg from "../../assets/Landing Page Logo.png";
import storeLogoImg from "../../assets/Landing Page Logo Small.png";
import userImg from "../../assets/Landing Page p.png";
import heartImg from "../../assets/Landing Page h.png";
import cartImg from "../../assets/Landing Page c.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <header>
      <ul>
        <li id="storeLogo">
          <img src={storeImg} alt="Store logo"></img>
        </li>
        <li id="storeLogoSmall">
          <img src={storeLogoImg} alt="Store logo"></img>
        </li>
        <li>
          <input
            id="search-bar"
            type="search"
            placeholder="Search ...."
          ></input>
        </li>
        <li>
          <img
            id="imgClick"
            src={userImg}
            alt="User logo"
            onClick={() => navigate(user ? "/Login" : "/Login")}
          ></img>
        </li>
        <li>
          <img id="imgClick" src={heartImg} alt="Heart logo"></img>
        </li>
        <li>
          <img
            id="imgClick"
            src={cartImg}
            alt="Cart logo"
            onClick={() => navigate("/Cart")}
          ></img>
        </li>
      </ul>
    </header>
  );
}
