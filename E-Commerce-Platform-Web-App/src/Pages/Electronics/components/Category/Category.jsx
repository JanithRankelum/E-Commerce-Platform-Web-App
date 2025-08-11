import "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";

// Import category images
import phoneIcon from "../../../../assets/images/Category/phone.png";
import computerIcon from "../../../../assets/images/Category/computer.png";
import smartwatchIcon from "../../../../assets/images/Category/smartwatch.png";
import cameraIcon from "../../../../assets/images/Category/camera.png";
import headphonesIcon from "../../../../assets/images/Category/Headphone.png";
import gamingIcon from "../../../../assets/images/Category/gaming.png";
import networkIcon from "../../../../assets/images/Category/Network.png";
import othersIcon from "../../../../assets/images/Category/Others.png";

const categories = [
  { name: "Phones", icon: phoneIcon, path: "/phones" },
  { name: "Computers", icon: computerIcon, path: "/computers" },
  { name: "Watches", icon: smartwatchIcon, path: "/watches" },
  { name: "Cameras", icon: cameraIcon, path: "/cameras" },
  { name: "Sounds", icon: headphonesIcon, path: "/sounds" },
  { name: "Games", icon: gamingIcon, path: "/games" },
  { name: "Networks", icon: networkIcon, path: "/networks" },
  { name: "Others", icon: othersIcon, path: "/eothers" },
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
