import "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";

// Import category images
import phoneIcon from "../../../../assets/images/Category/Dairy & Eggs.png";
import computerIcon from "../../../../assets/images/Category/Bakery & bread.png";
import smartwatchIcon from "../../../../assets/images/Category/Snacks and chips.png";
import cameraIcon from "../../../../assets/images/Category/Pantry & Staples.png";
import headphonesIcon from "../../../../assets/images/Category/Herbs & spices.jpeg";
import gamingIcon from "../../../../assets/images/Category/Personal care and household.png";
import networkIcon from "../../../../assets/images/Category/Health and Wellness.png";
import othersIcon from "../../../../assets/images/Category/Others.png";

const categories = [
  { name: "Dairy & Eggs", icon: phoneIcon, path: "/daily" },
  { name: "Bakery & Bread", icon: computerIcon, path: "/bakery" },
  { name: "Snack & Chips", icon: smartwatchIcon,path: "/snack" },
  { name: "Pantry & Staples", icon: cameraIcon, path: "/pantry" },
  { name: "Herbs & Spices", icon: headphonesIcon, path: "/herbs" },
  { name: "Personal care & Household ", icon: gamingIcon, path: "/personal" },
  { name: "Health & Wellness", icon: networkIcon, path: "/healthw" },
  { name: "Others", icon: othersIcon, path: "/gothers" },
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

