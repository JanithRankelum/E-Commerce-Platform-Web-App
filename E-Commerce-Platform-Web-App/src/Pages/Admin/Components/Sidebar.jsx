import { useState } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Initially set to false (closed)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "←" : "→"}
      </button>
      {isOpen && (
        <ul>
          <li className="active">Add Products</li>
          <li>My Products</li>
          <li>Messages</li>
          <li>Reviews</li>
          <li>Orders</li>
          <li id="buttonLi" onClick={() => navigate('/admin/adminlogin')}>Log Out</li>
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;
