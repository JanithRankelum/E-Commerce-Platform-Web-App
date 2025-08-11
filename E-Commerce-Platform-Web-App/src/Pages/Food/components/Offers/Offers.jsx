import "react";
import "./Offers.css";
import coconut from "../../../../assets/images/Offers/coconut.jpeg";
import manioc from "../../../../assets/images/Offers/manioc.jpeg"; 
import mango from "../../../../assets/images/Offers/mango.png";
import divul from "../../../../assets/images/Offers/divul.jpeg";
import anoda from "../../../../assets/images/Offers/Anoda.jpeg";
import banana from "../../../../assets/images/Offers/banana.jpeg";
import chicken from "../../../../assets/images/Offers/chicken.jpeg";
import pork from "../../../../assets/images/Offers/pork.jpeg";
import kiripani from "../../../../assets/images/Offers/kiri pani.jpeg";
import kandos from "../../../../assets/images/Offers/kandos pudding.png";
import lime from "../../../../assets/images/Offers/lime.jpeg";
import corn from "../../../../assets/images/Offers/corn.jpeg";

const Offers = () => {
  const deals = [
    {
      id: "001",
      name: "coconut",
      price: "LKR. 179.99",
      originalPrice: "LKR. 200.00",
      discountPercentage: "15%",
      save: "LKR. 20.00",
      imgSrc: coconut,
    },
    {
      id: "002",
      name: "Manioc",
      price: "LKR. 165.00",
      originalPrice: "LKR. 200.00",
      discountPercentage: "20%",
      save: "LKR. 35.00",
      imgSrc: manioc,
    },
    {
      id: "003",
      name: "Mango",
      price: "LKR. 250.00",
      originalPrice: "LKR. 280.00",
      discountPercentage: "20%",
      save: "LKR. 30.00",
      imgSrc: mango,
    },
    {
      id: "004",
      name: "Woodapple",
      price: "LKR. 600.00",
      originalPrice: "LKR. 750.00",
      discountPercentage: "10%",
      save: "LKR. 150.00",
      imgSrc: divul,
    },
    {
      id: "005",
      name: "Katu anoda",
      price: "LKR. 700.00",
      originalPrice: "LKR. 900.00",
      discountPercentage: "20%",
      save: "LKR. 200.00",
      imgSrc: anoda,
    },
    {
      id: "006",
      name: "banana - kolikuttu",
      price: "LKR. 380.00",
      originalPrice: "LKR. 450.00",
      discountPercentage: "30%",
      save: "LKR. 70.00",
      imgSrc: banana,
    },
    {
      id: "007",
      name: "chicken liver",
      price: "LKR. 789.60 ",
      originalPrice: "LKR. 840",
      discountPercentage: "6%",
      save: "LKR. 50.40",
      imgSrc: chicken,
    },
    {
      id: "008",
      name: "Pork cubes",
      price: "LKR. 2331.00",
      originalPrice: "LKR. 2590.00",
      discountPercentage: "10%",
      save: "LKR. 259.00",
      imgSrc: pork,
    },
    {
      id: "009",
      name: "Kiri Pani",
      price: "LKR. 441.00",
      originalPrice: "LKR. 490.00",
      discountPercentage: "10%",
      save: "LKR. 49.00",
      imgSrc: kiripani,
    },
    {
      id: "0010",
      name: "Biscut pudding",
      price: "LKR. 799.00",
      originalPrice: "LKR. 850.00",
      discountPercentage: "6%",
      save: "LKR. 51.00",
      imgSrc: kandos,
    },
    {
      id: "0011",
      name: "lime",
      price: "LKR. 288.00",
      originalPrice: "LKR. 320.00",
      discountPercentage: "10%",
      save: "LKR. 32.00",
      imgSrc: lime,
    },
    {
      id: "0012",
      name: " Sweet corn",
      price: "LKR. 800.00",
      originalPrice: "LKR. 884.00",
      discountPercentage: "10%",
      save: "LKR. 84.00",
      imgSrc: corn,
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
