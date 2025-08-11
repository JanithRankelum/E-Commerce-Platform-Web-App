import "react";
import "./Offers.css";
import watch from "../../../../assets/images/Offers/pelawaththa.jpg";
import router from "../../../../assets/images/Offers/Butter.jpg"; 
import cctv from "../../../../assets/images/Offers/Baking_powder.jpg";
import pen from "../../../../assets/images/Offers/bread.jpg";
import console from "../../../../assets/images/Offers/Tetos.jpg";
import fridge from "../../../../assets/images/Offers/Patties.jpg";
import camera from "../../../../assets/images/Offers/Cardamon.jpg";
import drone from "../../../../assets/images/Offers/Curry_paste.jpg";
import mic from "../../../../assets/images/Offers/Paspangu_tea.jpg";
import mini_camera from "../../../../assets/images/Offers/Cloves.jpg";
import tripod from "../../../../assets/images/Offers/Detergent.jpg";
import tv from "../../../../assets/images/Offers/nila_warala.jpg";

const Offers = () => {
  const deals = [
    {
      id: "001",
      name: "Pelawatte Milk",
      price: "LKR. 1092.50",
      originalPrice: "1150",
      discountPercentage: "5%",
      save: "LKR. 57.50",
      imgSrc: watch,
    },
    {
      id: "002",
      name: "Ambewela Butter",
      price: "LKR. 1012",
      originalPrice: "LKR. 1100",
      discountPercentage: "8%",
      save: "LKR. 88",
      imgSrc: router,
    },
    {
      id: "003",
      name: "Motha Baking Powder",
      price: "LKR. 361",
      originalPrice: "LKR. 380",
      discountPercentage: "5%",
      save: "LKR. 19",
      imgSrc: cctv,
    },
    {
      id: "004",
      name: "Bread Slices",
      price: "LKR. 153",
      originalPrice: "LKR. 170",
      discountPercentage: "10%",
      save: "LKR. 27",
      imgSrc: pen,
    },
    {
      id: "005",
      name: "Ramba Tetos",
      price: "LKR. 90",
      originalPrice: "LKR. 100",
      discountPercentage: "10%",
      save: "LKR. 10",
      imgSrc: console,
    },
    {
      id: "006",
      name: "MDK Patties",
      price: "LKR. 544.50 ",
      originalPrice: "LKR. 605",
      discountPercentage: "10%",
      save: "LKR. 61.50",
      imgSrc: fridge,
    },
    {
      id: "007",
      name: "Cardamon",
      price: "LKR. 342",
      originalPrice: "LKR. 380",
      discountPercentage: "10%",
      save: "LKR. 38",
      imgSrc: camera,
    },
    {
      id: "008",
      name: "Hot Curry Paste",
      price: "LKR. 252",
      originalPrice: "LKR. 280",
      discountPercentage: "10%",
      save: "LKR. 28",
      imgSrc: drone,
    },
    {
      id: "009",
      name: "Paspangu Tea",
      price: "LKR. 324",
      originalPrice: "LKR. 360",
      discountPercentage: "10%",
      save: "LKR. 38",
      imgSrc: mic,
    },
    {
      id: "0010",
      name: "Cloves",
      price: "LKR. 117.60",
      originalPrice: "LKR. 120",
      discountPercentage: "2%",
      save: "LKR. 2.40",
      imgSrc: mini_camera,
    },
    {
      id: "0011",
      name: "Tide Detergent",
      price: "LKR. 803.25",
      originalPrice: "LKR. 945",
      discountPercentage: "15%",
      save: "LKR. 141.75",
      imgSrc: tripod,
    },
    {
      id: "0012",
      name: "Nila Warala Oil",
      price: "LKR. 653.20",
      originalPrice: "LKR. 710",
      discountPercentage: "8%",
      save: "LKR. 56.80",
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
