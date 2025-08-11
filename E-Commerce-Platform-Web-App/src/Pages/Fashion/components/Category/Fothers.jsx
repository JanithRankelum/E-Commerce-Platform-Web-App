import "react";
import { useNavigate } from "react-router-dom";
import "./Clothing.css";

const Fothers = () => {
  const navigate = useNavigate();

  return (
    <div className="Fothers-page">
      <h1>Fothers Category</h1>
      <p>Explore our collection of the latest smartCameras and accessories.</p>
      <button onClick={() => navigate(-1)} className="back-button">
        Go Back
      </button>
    </div>
  );
};

export default Fothers;
