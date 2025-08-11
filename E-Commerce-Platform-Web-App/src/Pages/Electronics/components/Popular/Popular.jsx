import "react";
import "./Popular.css";
import Product from "../Product/EProduct"; // Adjust the path accordingly

const Popular = () => {
  const handleViewAll = () => {
    window.location.reload();
  };

  return (
    <div className="card-area">
      <div className="popular-container">
        <div className="popular-header">
          <h2 onClick={handleViewAll}>
            Our <span className="highlight">Popular Products</span>
          </h2>
          <div className="underline-p1"></div>
          <div className="underline-p2"></div>
          <button className="view-all" onClick={handleViewAll}>
            View All &gt;
          </button>
        </div>
      </div>
      <div className="popular-products">
        <Product />
      </div>
    </div>
  );
};

export default Popular;
