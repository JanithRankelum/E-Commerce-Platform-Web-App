import "react";
import "./Offers.css";


import GamePad from "../../assets/P002.png";
import Fridge from "../../assets/P010.png";
import pen from "../../assets/pen.png";
import cctv from "../../assets/cctv.png";
import Watch from "../../assets/Watch.png";
import Router from "../../assets/Router.png";
import camera from "../../../../assets/images/Offers/camera.png";
import drone from "../../../../assets/images/Offers/drone.png";
import mic from "../../../../assets/images/Offers/mic.png";
import mini_camera from "../../../../assets/images/Offers/mini-camera.png";
import tripod from "../../../../assets/images/Offers/tripod.png";
import tv from "../../../../assets/images/Offers/tv.png";

const Offers = () => {
  const deals = [
    {
      id: "001",
      name: "Apple Watch Series 7",
      price: "LKR. 32,999",
      originalPrice: "LKR. 74,999",
      discountPercentage: "56%",
      save: "LKR. 42,000",
      imgSrc: Watch,
    },
    {
      id: "002",
      name: "Asus Router",
      price: "LKR. 10,499",
      originalPrice: "LKR. 65,999",
      discountPercentage: "40%",
      save: "LKR. 4,500",
      imgSrc: Router,
    },
    {
      id: "003",
      name: "Sony CCTV Camera",
      price: "LKR. 16 000",
      originalPrice: "LKR. 24,999",
      discountPercentage: "60%",
      save: "LKR. 10,000",
      imgSrc: cctv,
    },
    {
      id: "004",
      name: "Kingston Pen Drive",
      price: "LKR. 3,000",
      originalPrice: "LKR. 4,000",
      discountPercentage: "10%",
      save: "LKR. 1,000",
      imgSrc: pen,
    },
    {
      id: "005",
      name: "PlayStation 5",
      price: "LKR. 438,999",
      originalPrice: "LKR. 540,999",
      discountPercentage: "20%",
      save: "LKR. 110,000",
      imgSrc: GamePad,
    },
    {
      id: "006",
      name: "LG Double Door Fridge",
      price: "LKR. 224,999",
      originalPrice: "LKR. 340,999",
      discountPercentage: "45%",
      save: "LKR. 120,000",
      imgSrc: Fridge,
    },
    {
      id: "007",
      name: "Canon 200D Camera",
      price: "LKR. 31,999",
      originalPrice: "LKR. 40,999",
      discountPercentage: "56%",
      save: "LKR. 10,000",
      imgSrc: camera,
    },
    {
      id: "008",
      name: "DJI Mini 2 Drone",
      price: "LKR. 31,999",
      originalPrice: "LKR. 40,999",
      discountPercentage: "48%",
      save: "LKR. 25,000",
      imgSrc: drone,
    },
    {
      id: "009",
      name: "Jbl Mic",
      price: "LKR. 31,999",
      originalPrice: "LKR. 40,999",
      discountPercentage: "28%",
      save: "LKR. 9,000",
      imgSrc: mic,
    },
    {
      id: "0010",
      name: "Mini Camera",
      price: "LKR. 31,999",
      originalPrice: "LKR. 40,999",
      discountPercentage: "26%",
      save: "LKR. 9,000",
      imgSrc: mini_camera,
    },
    {
      id: "0011",
      name: "Tripod",
      price: "LKR. 31,999",
      originalPrice: "LKR. 40,999",
      discountPercentage: "35%",
      save: "LKR. 9,000",
      imgSrc: tripod,
    },
    {
      id: "0012",
      name: "Samsung 32 inch TV",
      price: "LKR. 31,999",
      originalPrice: "LKR. 40,999",
      discountPercentage: "54%",
      save: "LKR. 9,000",
      imgSrc: tv,
    },
  ];

  const handleViewAll = () => {
    window.location.reload(); // Opens the same page
  };

  return (
    <div className="offers-container">
      <div className="offers-header">
        <h2 onClick={handleViewAll}>
          Grab the best deal on <span className="highlight">Today Deals</span>
        </h2>
        <div className="underline-1"></div>
        <div className="underline-2"></div>
        <button className="view-all" onClick={handleViewAll}>
          View All &gt;
        </button>
      </div>
      <div className="offers-grid">
        {deals.map((deal, index) => (
          <div key={index} className="offer-card">
            <div className="offer-badge">
              <div>{deal.discountPercentage}</div>
              <div>off</div>
            </div>
            <img src={deal.imgSrc} alt={deal.name} className="offer-image" />
            <div className="offer-details">
              <h3 className="offer-name">{deal.name}</h3>
              <p className="offer-price">
                {deal.price} <span className="original-price">{deal.originalPrice}</span>
              </p>
              <div className="offer-save">
              <span className="underline-card"></span>
                Save: <span>{deal.save}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
