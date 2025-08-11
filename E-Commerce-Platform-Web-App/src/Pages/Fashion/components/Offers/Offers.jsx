import "react";
import "./Offers.css";
import cloth1 from "../../../../assets/images/Offers/men.jpg";
import cloth2 from "../../../../assets/images/Offers/men2.jpg"; 
import wgf from "../../../../assets/images/Offers/wgf.jpg";
import tanktop from "../../../../assets/images/Offers/tanktop.jpg";
import wlgj from "../../../../assets/images/Offers/wlgj.jpg";
import tjeb from "../../../../assets/images/Offers/tjeb.jpg";
import hhtw from "../../../../assets/images/Offers/hhtw.jpg";
import cche from "../../../../assets/images/Offers/cche.jpg";
import mss from "../../../../assets/images/Offers/mss.jpg";
import bss from "../../../../assets/images/Offers/bss.jpg";
import pbc from "../../../../assets/images/Offers/pbc.jpg";
import mcs from "../../../../assets/images/Offers/mcs.jpg";

const Offers = () => {
  const deals = [
    {
      id: "001",
      name: "Men's Casual Slim Fit Sport Jumper Top Long Sleeve Hoodie Zipper Sweatshirt ",
      price: "LKR. 9,900",
      originalPrice: "LKR. 11,900",
      discountPercentage: "10%",
      save: "LKR. 2,000",
      imgSrc: cloth1,
    },
    {
      id: "002",
      name: "2025 Spring Autumn Men's High Quality Solid Color Long Sleeve Polo Shirt Luxury Fashion Business Leisure Multi Functional Top",
      price: "LKR. 2,900",
      originalPrice: "LKR. 4,900",
      discountPercentage: "10%",
      save: "LKR. 2,000",
      imgSrc: cloth2,
    },
    {
      id: "003",
      name: "Yoga Jumpsuit Women's Gym Fitness Bodysuits Sports Overalls for Woman Tracksuit Yoga Clothing Female Flared Trousers Sportswear",
      price: "LKR. 3,500",
      originalPrice: "LKR. 5,500",
      discountPercentage: "60%",
      save: "LKR. 2,000",
      imgSrc: wgf,
    },
    {
      id: "004",
      name: "Seamless Tanks Women Tank Top Fashion Korean Version Polyester Fiber Tube Top Underwear Slim Breathable Camisole",
      price: "LKR. 1,600",
      originalPrice: "LKR. 2,600",
      discountPercentage: "10%",
      save: "LKR. 1,000",
      imgSrc: tanktop,
    },
    {
      id: "005",
      name: "Europe and the United States exaggerated retro necklace set women luxury crystal banquet dress accessories clavicle chain",
      price: "LKR. 4,800",
      originalPrice: "LKR. 6,800",
      discountPercentage: "20%",
      save: "LKR. 2,000",
      imgSrc: wlgj,
    },
    {
      id: "006",
      name: "Turkish Jewelry Ethnic Bohemian Bracelets For Women Red Gem Stone Black Resin Tribal Gold-Color Femme Bracelet Jewellery",
      price: "LKR. 5,200",
      originalPrice: "LKR. 7,200",
      discountPercentage: "23%",
      save: "LKR. 2,000",
      imgSrc: tjeb,
    },
    {
      id: "007",
      name: "Natural Body Wavy Clip in Human Hair Topper for Women #1B Soft Hairpiece Extension for Mild Woman Increase Hair Volume Remy",
      price: "LKR. 1,200",
      originalPrice: "LKR. 2,200",
      discountPercentage: "10%",
      save: "LKR. 1,000",
      imgSrc: hhtw,
    },
    {
      id: "008",
      name: "Claw Clip in Hair Extension Long Curly Wavy Ponytail Extension 18 Inch Natural Soft Mini Jaw Claw Synthetic Hairpiece for Women",
      price: "LKR. 1,100",
      originalPrice: "LKR. 2,100",
      discountPercentage: "10%",
      save: "LKR. 1,000",
      imgSrc: cche,
    },
    {
      id: "009",
      name: "Men's Shoes Summer Breathable Casual Sports Net Shoes Trendy Versatile Running Youth Harajuku Style Shoes sneakers for men",
      price: "LKR. 5,300",
      originalPrice: "LKR. 8,300",
      discountPercentage: "20%",
      save: "LKR. 3,000",
      imgSrc: mss,
    },
    {
      id: "0010",
      name: "Breathable Summer Sneakers Men Casual Sport Shoes Light Weight Mesh Footwear For Running Slip On Walking Shoes",
      price: "LKR. 31,999",
      originalPrice: "LKR. 40,999",
      discountPercentage: "26%",
      save: "LKR. 9,000",
      imgSrc: bss,
    },
    {
      id: "0011",
      name: "Portable Bank Card Box Anti-theft Brush ID Credit Card Box Simple Business Card Box Aluminum Alloy Card Box Metal Wallets Pocket",
      price: "LKR. 1,999",
      originalPrice: "LKR. 2,999",
      discountPercentage: "10%",
      save: "LKR. 1,000",
      imgSrc: pbc,
    },
    {
      id: "0012",
      name: "Multi-card Slot Men Wallet Fashion Folding Large-capacity Coin Purse PU Leather Short Purse",
      price: "LKR. 3,300",
      originalPrice: "LKR. 6,300",
      discountPercentage: "20%",
      save: "LKR. 3,000",
      imgSrc: mcs,
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
