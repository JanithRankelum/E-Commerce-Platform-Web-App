import "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";

// Import category images
import skinIcon from "../../../../assets/images/Category/Skin_care.jpg";
import makeupIcon from "../../../../assets/images/Category/Makeup.png";
import haircareIcon from "../../../../assets/images/Category/hair_care.png";
import personalcareIcon from "../../../../assets/images/Category/personal_care.jpg";
import wellnessIcon from "../../../../assets/images/Category/Nutrition.png";
import toolIcon from "../../../../assets/images/Category/Tools.png";
import fragrancesIcon from "../../../../assets/images/Category/Fragrance.png";
import othersIcon from "../../../../assets/images/Category/Others.png";



const categories = [
  { name: "Skincare", icon: skinIcon, path: "/skincare" },
  { name: "Makeup", icon: makeupIcon, path: "/makeup" },
  { name: "Haircare", icon: haircareIcon, path: "/haircare" },
  { name: "Personalcare", icon: personalcareIcon, path: "/personalcare" },
  { name: "Wellness & Nutrition", icon: wellnessIcon, path: "/wellness" },
  { name: "Tools & Accessories", icon: toolIcon, path: "/tools" },
  { name: "Fragrances", icon: fragrancesIcon, path: "/fragrances" },
  { name: "Others", icon: othersIcon, path: "/hothers" },
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

