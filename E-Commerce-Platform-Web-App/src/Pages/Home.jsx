import SubscribeImg from "../assets/Subscribe.png";
import Ad from "../assets//PdfImage.png";
import Offers from "./Furniture/components/Offers/Offers";
import Daily from "./Daily";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* ------------- HomePage Start ---------------------- */}
      <section id="homePage">
        <div className="homePage-container">
          <h2>
            Unlock Savings with Group Buying at <span>VirtualStore</span>
          </h2>
          <p>
            Join forces with friends and family to enjoy lower prices on your
            favorite products!
          </p>
          <div className="cta-buttons">
            <button className="a">Shop Now</button>
            <button className="b">Learn More</button>
          </div>
        </div>
      </section>
      {/* ------------- HomePage End ---------------------- */}

      {/* ------------- Top Categories -------------------- */}
      <section id="topCategories">
        <div className="topCategories-container">
          <div className="topCategories-heading">
            <h2>
              Shop From <span>Top Categories</span>
            </h2>
            <h4>View All</h4>
          </div>
          <div id="topCategories-card-container">
            <div id="topCategories-card" onClick={() => navigate("/phones")}>
              <div id="topCategories-card-img"></div>
              <h3>Phones</h3>
            </div>
            <div id="topCategories-card">
              <div id="topCategories-card-img1" onClick={() => navigate("/clothing")}></div>
              <h3>Clothing</h3>
            </div>
            <div id="topCategories-card">
              <div id="topCategories-card-img2"></div>
              <h3>Vegetable</h3>
            </div>
            <div id="topCategories-card">
              <div id="topCategories-card-img3"></div>
              <h3>Tools</h3>
            </div>
            <div id="topCategories-card">
              <div id="topCategories-card-img4"></div>
              <h3>Makeup</h3>
            </div>
          </div>
        </div>
      </section>
      {/* ------------- Top Categories End -------------------- */}

      {/* ------------- Today Deals -------------------- */}
      <section id="todayDeals">
      <Offers />
      </section>
      {/* ------------- Today Deals End -------------------- */}
      
      {/* ------------- Ad -------------------- */}
      <section id="ad">
        <div id="ads-container">
          <img id="ads-container-img" src={Ad}></img>
        </div>
      </section>
      {/* ------------- Ad End -------------------- */}

      {/* ------------- Daily Your Releated items -------------------- */}
      <section>
        <Daily />
      </section>
      {/* ------------- Daily Your Releated items End -------------------- */}

      {/* ------------- Subscribe -------------------- */}
      <section id="subscribe">
        <div className="subscribe-container">
          <div id="subscribe-heading">
            <h6>Subscribe</h6>
            <h2>Join the Squad Today!</h2>
          </div>
          <div id="subscribe-sub-heading">
            <p>Ready to shop smarter and save more? </p>
            <p>
              Subscribe to our newsletter for the new product drops and limited
              time discounts so you ll never miss a chance to save big!
            </p>
          </div>
          <div id="subscribe-content">
            <div id="subscribe-img">
              <img src={SubscribeImg}></img>
            </div>
            <div id="subscribe-email">
              <input
                id="Email"
                type="email"
                name="email"
                placeholder="Enter Email..."
                autoComplete="email"
              />
              <input id="Subscribe" type="submit" value="Subscribe" />
            </div>
          </div>
        </div>
      </section>
      {/* ------------- Subscribe End -------------------- */}
    </div>
  );
}
