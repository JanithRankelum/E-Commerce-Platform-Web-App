import "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";

// Import category images
import clothingIcon from "../../../../assets/images/Category/clothing.fashion.png";
import perfumeIcon from "../../../../assets/images/Category/perfume.fashion.png";
import jgIcon from "../../../../assets/images/Category/jg.fashion.png";
import hairIcon from "../../../../assets/images/Category/hair.fashion.png";
import shoesIcon from "../../../../assets/images/Category/shoes.fashion.png";
import bagIcon from "../../../../assets/images/Category/bag.fashion.png";
import walletIcon from "../../../../assets/images/Category/wallet.fashion.png";
import othersIcon from "../../../../assets/images/Category/Others.png";



const categories = [
  { name: "Clothing", icon: clothingIcon, path: "/clothing" },
  { name: "Perfumes", icon: perfumeIcon, path: "/perfumes" },
  { name: "Gem & Jewellary", icon: jgIcon, path: "/Gemjewellery" },
  { name: "Hair extention & wigs", icon: hairIcon, path: "/Hairwigs" },
  { name: "Shoes", icon: shoesIcon, path: "/shoes" },
  { name: "Luggages & bags", icon: bagIcon, path: "/luggages" },
  { name: "Wallets", icon: walletIcon, path: "/wallets" },
  { name: "Fashionothers", icon: othersIcon, path: "/fashionothers" },
];


const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path); // Navigate to the respective category page
  };

  return (
    <div style={{marg: "3vw"}} className="category-section">
      <div style={{gap: "10px"}}className="category-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => handleCategoryClick(category.path)} // Handle click
            style={{ cursor: "pointer" }}
          >
            <img src={category.icon} alt={category.name} className="category-icon" />
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;