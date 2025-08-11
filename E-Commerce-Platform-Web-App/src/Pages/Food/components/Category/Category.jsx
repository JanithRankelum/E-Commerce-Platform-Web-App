import "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";

// Import category images
import vegetableIcon from "../../../../assets/images/Category/vegetable.png";
import fruitIcon from "../../../../assets/images/Category/fruits.png";
import meatIcon from "../../../../assets/images/Category/meat.png";
import fishIcon from "../../../../assets/images/Category/fish.png";
import beveragesIcon from "../../../../assets/images/Category/beverages.png";
import dessertsIcon from "../../../../assets/images/Category/dessert.png";
import frozenfoodIcon from "../../../../assets/images/Category/frozen-food.png";
import othersIcon from "../../../../assets/images/Category/Others.png";

const categories = [
  { name: "Vegetables", icon: vegetableIcon, path: "/Vegetables" },
  { name: "Fruits", icon: fruitIcon, path: "/Fruits" },
  { name: "Meat", icon: meatIcon, path: "/Meat" },
  { name: "Fish", icon: fishIcon, path: "/Fish" },
  { name: "Beverages", icon: beveragesIcon, path: "/Beverages" },
  { name: "Desserts", icon: dessertsIcon, path: "/Dessert" },
  { name: "Frozen Foods", icon: frozenfoodIcon, path: "/Frozen-Food" },
  { name: "Others", icon: othersIcon, path: "/foodothers" },
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
