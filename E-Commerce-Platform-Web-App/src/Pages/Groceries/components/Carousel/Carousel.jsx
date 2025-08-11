import "react";
import "./Carousel.css";
import Image from "../../../Electronics/assets/Carousel.png"; // Replace with your actual image path

const Carousel = () => {
  return (
    <div
      style={{
        marginTop: "1vw",
        width: "92%",
      }}
      className="carousel-container"
    >
      <img src={Image} alt="Carousel" />
    </div>
  );
};

export default Carousel;
