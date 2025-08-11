import "react";
import "./Offers.css";
import watch from "../../../../assets/images/Offers/Oregano_oil.jpg";
import router from "../../../../assets/images/Offers/Nail_clipper.jpg"; 
import cctv from "../../../../assets/images/Offers/Gun_muscle.jpg";
import pen from "../../../../assets/images/Offers/Makeup_primer.jpg";
import console from "../../../../assets/images/Offers/Black_head.jpg";
import fridge from "../../../../assets/images/Offers/Tattoo_cartridge.jpg";
import camera from "../../../../assets/images/Offers/Oxymeter.jpg";
import drone from "../../../../assets/images/Offers/Tongue_scrapper.jpg";
import mic from "../../../../assets/images/Offers/Nail_gel.jpg";
import mini_camera from "../../../../assets/images/Offers/Scissors.jpg";
import tripod from "../../../../assets/images/Offers/Stretch_band.jpg";
import tv from "../../../../assets/images/Offers/Posture_corrector.jpg";

const Offers = () => {
  const deals = [
    {
      id: "001",
      name: "Oil of Oregano Capsules - Support Digestion, Intestinal Health, Immune System, Antioxidant - 120 Capsules",
      price: "LKR. 13,346.50",
      originalPrice: "LKR. 14,049",
      discountPercentage: "5%",
      save: "LKR. 702.50",
      imgSrc: watch,
    },
    {
      id: "002",
      name: "7-24pcs Professional Nail Clippers Kit - Ultra Sharp Fingernail and Toenail Cutters for Men and Women - Sturdy Pedicure Care",
      price: "LKR. 14,24.05",
      originalPrice: "LKR. 14,99",
      discountPercentage: "5%",
      save: "LKR. 74.95",
      imgSrc: router,
    },
    {
      id: "003",
      name: "2025 fascia gun muscle relaxation massager electric vibration massage gun professional grade neck mask gun",
      price: "LKR. 36,464",
      originalPrice: "LKR. 44,464",
      discountPercentage: "10%",
      save: "LKR. 8,000",
      imgSrc: cctv,
    },
    {
      id: "004",
      name: "Makeup Set Of Makeup Primer + Setting Spray, Invisible Pore Color Rendering Hold Makeup, For Base Makeup And Makeup Finishing",
      price: "LKR. 3,450",
      originalPrice: "LKR. 4,450",
      discountPercentage: "5%",
      save: "LKR. 1,000",
      imgSrc: pen,
    },
    {
      id: "005",
      name: "Blackhead Remover Mask Facial Shrink Pores Acne Black Head Removal Cream Nose Cleansing Black Peel Off Masks Skin Care New",
      price: "LKR. 2,389",
      originalPrice: "LKR. 2,499",
      discountPercentage: "10%",
      save: "LKR. 110",
      imgSrc: console,
    },
    {
      id: "006",
      name: "CNC 20PCS Tattoo Cartridges Needles Disposable Red RL/RS/RM/M1 With Membrane Professional Sterilized Safety For Tattooist Supply",
      price: "LKR. 750",
      originalPrice: "LKR. 790",
      discountPercentage: "5%",
      save: "LKR. 40",
      imgSrc: fridge,
    },
    {
      id: "007",
      name: "KIUZOU Finger Pulse Oximeter OLED Blood Oxygen Saturation Heart Rate Monitor Oxymeters Medical With Respiratory Digital Oximeter",
      price: "LKR. 7,670",
      originalPrice: "LKR. 8,330",
      discountPercentage: "8%",
      save: "LKR. 660",
      imgSrc: camera,
    },
    {
      id: "008",
      name: "Clean Tongue Scraper Tongue Remover Halitosis Tongue Coating Oral Care Tongue Scraping Brush Stainless Steel Oral Cleaner Tools",
      price: "LKR. 381",
      originalPrice: "LKR. 390",
      discountPercentage: "2%",
      save: "LKR. 9",
      imgSrc: drone,
    },
    {
      id: "009",
      name: "Venalisa Color Nail Gel Polish Kit Jelly Pink Semi-transparent HEMA FREE Self Leveling Nude Natural Pink Nail Manicure Set",
      price: "LKR. 3,237",
      originalPrice: "LKR. 3,546",
      discountPercentage: "8%",
      save: "LKR. 309",
      imgSrc: mic,
    },
    {
      id: "0010",
      name: "Hairdressing Scissors Stainless Steel Professional Hairdressing Scissors Cutting Thinning Scissors Barber Shear Home Salon",
      price: "LKR. 1,781",
      originalPrice: "LKR. 1,790",
      discountPercentage: "1%",
      save: "LKR. 9",
      imgSrc: mini_camera,
    },
    {
      id: "0011",
      name: "Latex Resistance Circle Mini Mini Fitness Stretch Band Stretch Band Rally Band Strength Training Hip Stretch Circle Rally Band",
      price: "LKR. 1,091",
      originalPrice: "LKR. 1,100",
      discountPercentage: "1%",
      save: "LKR. 9",
      imgSrc: tripod,
    },
    {
      id: "0012",
      name: "Reinforced Belt Lumbar Column Posture Corrector Vest Adjustable Back Support Strap Shoulder Spine Brace Neck Stretcher Trainer",
      price: "LKR. 3,380",
      originalPrice: "LKR. 3,389",
      discountPercentage: "1%",
      save: "LKR. 9",
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
