import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Product.css";
import watch from "../../../../assets/images/Popular/watch.png";
import router from "../../../../assets/images/Popular/router.png";

import pen from "../../../../assets/images/Popular/pen.png";
import console from "../../../../assets/images/Popular/console.png";
import fridge from "../../../../assets/images/Popular/fridge.png";
import camera from "../../../../assets/images/Popular/camera.png";
import drone from "../../../../assets/images/Popular/drone.png";
import mic from "../../../../assets/images/Popular/mic.png";
import mini_camera from "../../../../assets/images/Popular/mini-camera.png";
import tripod from "../../../../assets/images/Popular/tripod.png";
import tv from "../../../../assets/images/Popular/tv.png";

import fridge_1 from "../../../../assets/images/Popular/fridge/1.png";
import fridge_2 from "../../../../assets/images/Popular/fridge/2.png";
import fridge_3 from "../../../../assets/images/Popular/fridge/3.png";
import fridge_4 from "../../../../assets/images/Popular/fridge/4.png";

import heartFilled from "../../../../assets/images/Popular/heart-filled.png";
import heartUnfilled from "../../../../assets/images/Popular/heart-unfilled.png";

const Product = () => {
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  const products = [
    {
      id: "001",
      name: "Apple Watch Series 7",
      model: "apple watch",
      rating: "5.0",
      sold: "52k",
      price: "LKR. 32999.00",
      imgSrc: watch,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "002",
      name: "Asus Router",
      model: "asus 5Ghz Router",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 10,499",
      imgSrc: router,
      images: [router, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "003",
      name: "Playstation 5",
      model: "PS5 Best Gaming Console in 2024",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 10,499",
      imgSrc: console,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "004",
      name: "Apple Watch Series 7",
      model: "apple watch",
      rating: "5.0",
      sold: "52k",
      price: "LKR. 32,999",
      imgSrc: watch,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "005",
      name: "canon",
      model: "canon",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 10,499",
      imgSrc: camera,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "006",
      name: "Drone",
      model: "apple watch",
      rating: "5.0",
      sold: "52k",
      price: "LKR. 32,999",
      imgSrc: drone,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "007",
      name: "Portable TV Stand",
      model: "asus 5Ghz Router",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 10,499",
      imgSrc: tv,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "008",
      name: "Tripods",
      model: "apple watch",
      rating: "5.0",
      sold: "52k",
      price: "LKR. 32,999",
      imgSrc: tripod,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "009",
      name: "Mini Camera",
      model: "asus 5Ghz Router",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 10,499",
      imgSrc: mini_camera,
      images: [watch, pen, watch, watch],
      description: `
      This is a high-end smartphone with amazing features. <br/>
      This is a high-end smartphone with amazing features. <br/>
      This is a high-end smartphone with amazing features.
    `,

      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "0010",
      name: "Innovex Refrigerator",
      model: " INR-240I",
      rating: "4.5",
      sold: "52",
      price: "LKR. 120,450",
      imgSrc: fridge,
      images: [fridge, fridge_1, fridge_2, fridge_3, fridge_4],
      description:
        "<br/>50L Capacity <br/> No Frost <be/> Energy Efficient <br/> Eco Friendly R600a Refrigerant <br/> Double Door <br/> 2 inch Thick Thermal Insulated Wall <br/> LED Lighting <br/> Copper Tubbing",
      specifications:
        "<br/>Brand:INNOVEX<br/>Model:INR-240I<br/>Capacity:250L<br/>Frost:No<br/>Type:Double Door Refrigeration and Cooling<br/>Technology:R600a Refrigerant<br/>No of Doors:2<br/>No of Compartments:2<br/>Wall Thickness:2 inches ",
    },
    {
      id: "0011",
      name: "Jbl Mic",
      model: "asus 5Ghz Router",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 10,499",
      imgSrc: mic,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    {
      id: "0012",
      name: "Asus Router",
      model: "asus 5Ghz Router",
      rating: "3.2",
      sold: "120k",
      price: "LKR. 10,499",
      imgSrc: router,
      images: [watch, pen, watch, watch],
      description: "This is a high-end smartphone with amazing features.",
      specifications: "5.5-inch screen, 4GB RAM, 64GB storage, 12MP camera",
    },
    // Add other products here...
  ];

  const handleHeartClick = (index) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [index]: !prevFavorites[index],
    }));
  };

  const handleCardClick = (product) => {
    const productName = product.name;
    navigate(`/edetails?productName=${productName}`);
  };

  return (
    <div className="product-container">
      <div className="product-grid">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
            onClick={() => handleCardClick(product)}
          >
            <img
              src={product.imgSrc} // Use product's specific main image
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-rating-sold">
                <span className="product-rating">
                  <span className="star">★★★★★</span> {product.rating}
                </span>
                <span className="product-sold">Sold: {product.sold}</span>
              </div>
              <div
                className="eproduct-heart-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  handleHeartClick(index);
                }}
              >
                <img
                  src={favorites[index] ? heartFilled : heartUnfilled}
                  alt="Heart Icon"
                  className="heart-image"
                />
              </div>
              <div className="product-save">
                <span className="underline-card"></span>
                Price: <span>{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
