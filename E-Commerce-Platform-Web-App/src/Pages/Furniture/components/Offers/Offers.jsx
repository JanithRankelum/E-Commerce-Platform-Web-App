import "react";
import "./Offers.css";
import sofa from "../../../../assets/images/Offers/livingroom1.png";
import gamingchair from "../../../../assets/images/Offers/office3.png"; 
import tvstand from "../../../../assets/images/Offers/livingroom2.png";
import vegetablechopper from "../../../../assets/images/Offers/kitchen3.png";
import sofaset from "../../../../assets/images/Offers/outdoor3.png";
import bathlab from "../../../../assets/images/Offers/bathroom2.png";
import kitchencabinet from "../../../../assets/images/Offers/kitchen2.png";
import outdoorchair from "../../../../assets/images/Offers/outdoor2.png";
import officetable from "../../../../assets/images/Offers/office2.png";
import bathroomorganizer from "../../../../assets/images/Offers/bathroom3.png";
import diningtable from "../../../../assets/images/Offers/diningroom2.png";
import platestorage from "../../../../assets/images/Offers/kitchen1.png";

const Offers = () => {
  const deals = [
    {
      id: "001",
      name: "Wooden Sofa Living Room Sofa",
      price: "LKR. 261,675",
      originalPrice: "LKR. Rs.348,900",
      discountPercentage: "25%",
      save: "LKR. 87,225",
      imgSrc: sofa,
    },
    {
      id: "002",
      name: "LED RGB Computer PC Game Chair Gaming PU Leather Silla Gamer Massage Racing Gaming Chair with Lights and Speakers",
      price: "LKR. 19,457",
      originalPrice: "LKR. 22,890",
      discountPercentage: "15%",
      save: "LKR. 3,433 ",
      imgSrc: gamingchair,
    },
    {
      id: "003",
      name: "Bestier TV Stand Cabinet 140CM Modern TV Unit with Glass Shelf RGB LED Lighted for 65 TVs TV Entertainment Unit with Ambient Lights for Living Room Bedroom",
      price: "LKR.  60,078",
      originalPrice: "LKR. 88,350",
      discountPercentage: "32%",
      save: "LKR. 28,272",
      imgSrc: tvstand,
    },
    {
      id: "004",
      name: "Vegetable Chopper and Slicer Dicer for Kitchen 23 PCS Veggie Slicer and Chopper Vegetable Cutter Cooking Accessories Gadget Stuff Salad Maker Dicing Machine Potato Fruit Chopper with Container",
      price: "LKR. 4,050",
      originalPrice: "LKR. 4,500",
      discountPercentage: "10%",
      save: "LKR. 450",
      imgSrc: vegetablechopper,
    },
    {
      id: "005",
      name: "Aluminum Patio Furniture Set with Waterproof Cover Modern Outdoor Patio Furniture with Coffee Table 7 Pieces Outdoor",
      price: "LKR. 520,440",
      originalPrice: "LKR. 650,550",
      discountPercentage: "20%",
      save: "LKR. 130,110",
      imgSrc: sofaset,
    },
    {
      id: "006",
      name: "Freestanding Bathtub, The Model 8007-2, Length 67′′ Acrylic, Oval Soaking Tub, Customized Faucet",
      price: "LKR. 111,053",
      originalPrice: "LKR. 170,850",
      discountPercentage: "35%",
      save: "LKR. 59,797",
      imgSrc: bathlab,
    },
    {
      id: "007",
      name: "Kitchen Cabinet Shelf Metal Under Shelves Hanging Cup Utensils Wardrobe Kitchen Bathroom Organizer Home Accessories",
      price: "LKR. 4,675",
      originalPrice: "LKR. 5,500",
      discountPercentage: "15%",
      save: "LKR.825 ",
      imgSrc: kitchencabinet,
    },
    {
      id: "008",
      name: "Outdoor Furniture Wicker Courtyard Leisure Balcony Garden Patio Design Furniture Set",
      price: "LKR. 310,250",
      originalPrice: "LKR. 620,500",
      discountPercentage: "50%",
      save: "LKR. 310,250",
      imgSrc: outdoorchair,
    },
    {
      id: "009",
      name: "Solid Wood Rectangular Conference Table Office Desk",
      price: "LKR. 101,513",
      originalPrice: "LKR. 135,350",
      discountPercentage: "25%",
      save: "LKR. 33,837",
      imgSrc: officetable,
    },
    {
      id: "0010",
      name: "Bathroom Organizer No Drilling Wall Mount Aluminum Shower Shampoo Holder Gray Toilet Storage Bathroom Accessories",
      price: "LKR. 5,100",
      originalPrice: "LKR. 8,500",
      discountPercentage: "40%",
      save: "LKR. 3,400",
      imgSrc: bathroomorganizer,
    },
    {
      id: "0011",
      name: "Dining Tables Turkish Dining Tables",
      price: "LKR. 98,600",
      originalPrice: "LKR. 170,000",
      discountPercentage: "42%",
      save: "LKR. 71,400",
      imgSrc: diningtable,
    },
    {
      id: "0012",
      name: "Single Layer Plate Drain Holder Metal Plate Bowl Shelf Kitchen Cabinet Organizers Plate Storage Rack",
      price: "LKR. 3,825",
      originalPrice: "LKR. 4,500",
      discountPercentage: "15%",
      save: "LKR. 675",
      imgSrc: platestorage,
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
