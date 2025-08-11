import "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";

// Import category images
import kitchenIcon from "../../../../assets/images/Category/kitchenicon.png";
import bedroomIcon from "../../../../assets/images/Category/bedroomicon.png";
import livingroomIcon from "../../../../assets/images/Category/livingroomicon.png";
import diningroomIcon from "../../../../assets/images/Category/diningroomicon.png";
import outdoorIcon from "../../../../assets/images/Category/outdooricon.png";
import officeIcon from "../../../../assets/images/Category/officeicon.png";
import bathroomIcon from "../../../../assets/images/Category/bathroomicon.png";
import othersIcon from "../../../../assets/images/Category/Others.png";


const categories = [
  { name: "Kitchen", icon: kitchenIcon, path: "/kitchen" },
  { name: "Bedroom", icon: bedroomIcon, path: "/bedroom" },
  { name: "Living Room", icon: livingroomIcon, path: "/livingroom" },
  { name: "Dining Room", icon: diningroomIcon, path: "/diningroom" },
  { name: "Outdoor Furniture", icon: outdoorIcon, path: "/outdoorfurniture" },
  { name: "Office Furniture", icon: officeIcon, path: "/officefurniture" },
  { name: "Bathroom", icon: bathroomIcon, path: "/bathroom" },
  { name: "Others", icon: othersIcon, path: "/hfothers" },
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
