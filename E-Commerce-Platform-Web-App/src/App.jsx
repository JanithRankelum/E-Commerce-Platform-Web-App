import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Electronics from "./Pages/Electronics/Electronics";
import Food from "./Pages/Food/Food";
import Health from "./Pages/Health/Health";
import HDetails from "./Pages/Health/components/Details/HDetails";
import Fashion from "./Pages/Fashion/Fashion";
import Furniture from "./Pages/Furniture/Furniture";
import HFDetails from "./Pages/Furniture/components/Details/HFDetails";
import Groceries from "./Pages/Groceries/Groceries";
import GDetails from "./Pages/Groceries/components/Details/GDetails";
import Cart from "./Pages/cart/Cart";
import EDetails from "./Pages/Electronics/components/Details/EDetails";
import FDetails from "./Pages/Fashion/components/Details/FDetails";
import Details from "./Pages/Food/components/Details/Details";
import Checkout from "./Pages/Cart/Checkout/Checkout";
import Payment from "./Pages/Cart/Checkout/Payment/Payment";
import SucessPayment from "./Pages/Cart/Checkout/Payment/SucessPayment/SuccessPayment";
import Favourite from "./Pages/Favourite/Favourite";
import ContactUs from "./Pages/ContactUs";
import Admin from "./Pages/Admin/Admin";
import AdminLayout from "./Pages/Admin/AdminLayout";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AddProduct from "./Pages/Admin/AddProduct";
import Phones from "./Pages/Electronics/Components/Category/Phones";
import Computers from "./Pages/Electronics/Components/Category/Computers";
import Watches from "./Pages/Electronics/components/Category/Watchers";
import Cameras from "./Pages/Electronics/Components/Category/Cameras";
import Sounds from "./Pages/Electronics/Components/Category/Sounds";
import Games from "./Pages/Electronics/Components/Category/Games";
import Networks from "./Pages/Electronics/Components/Category/Networks";
import EOthers from "./Pages/Electronics/Components/Category/EOthers";
import Bathroom from "./Pages/Furniture/components/Category/Bathroom";
import Bedroom from "./Pages/Furniture/components/Category/Bedroom";
import Kitchen from "./Pages/Furniture/components/Category/Kitchen";
import Livingroom from "./Pages/Furniture/components/Category/Livingroom";
import Diningroom from "./Pages/Furniture/components/Category/Diningroom";
import Officefurniture from "./Pages/Furniture/components/Category/Officefurniture";
import Outdoorfurniture from "./Pages/Furniture/components/Category/Outdoorfurniture";
import HFOthers from "./Pages/Furniture/components/Category/HFOthers";
import Vegetables from "./Pages/Food/components/Category/Vegetables";
import Fruits from "./Pages/Food/Components/Category/Fruits";
import Meat from "./Pages/Food/Components/Category/Meat";
import Fish from "./Pages/Food/Components/Category/Fish";
import Beverages from "./Pages/Food/Components/Category/Beverages";
import Dessert from "./Pages/Food/Components/Category/Dessert";
import Frozen_food from "./Pages/Food/Components/Category/frozen-food";
import FoodOthers from "./Pages/Food/components/Category/FoodOthers";
import Skincare from "./Pages/Health/components/Category/Skincare";
import Haircare from "./Pages/Health/components/Category/Haircare";
import Personalcare from "./Pages/Health/components/Category/Personalcare";
import MakeUp from "./Pages/Health/components/Category/Makeup";
import Wellness from "./Pages/Health/components/Category/Wellness";
import Tools from "./Pages/Health/components/Category/Tools";
import Fragrances from "./Pages/Health/components/Category/Fragrances";
import HOthers from "./Pages/Health/components/Category/Hothers";

import Clothing from "./Pages/Fashion/components/Category/Clothing";
import Gemjewellery from "./Pages/Fashion/components/Category/Gemjewellery";
import Hairwigs from "./Pages/Fashion/components/Category/Hairwigs";
import Luggages from "./Pages/Fashion/components/Category/Luggages";
import Perfumes from "./Pages/Fashion/components/Category/Perfumes";
import Shoes from "./Pages/Fashion/components/Category/Shoes";
import Wallets from "./Pages/Fashion/components/Category/Wallets";
import Fashionothers from "./Pages/Fashion/components/Category/Fashionothers";
import Daily from "./Pages/Groceries/components/Category/Daily";
import Bakery from "./Pages/Groceries/components/Category/Bakery";
import Snack from "./Pages/Groceries/components/Category/Snack";
import Pantry from "./Pages/Groceries/components/Category/Pantry";
import Herbs from "./Pages/Groceries/components/Category/Herbs";
import Personal from "./Pages/Groceries/components/Category/Personal";
import Healthw from "./Pages/Groceries/components/Category/Healthw";
import GOthers from "./Pages/Groceries/components/Category/GOthers";

import "./App.css";

function App() {
  return (
    <Routes>
      {/* Default Layout Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="edetails" element={<EDetails />} />
        <Route path="fdetails" element={<FDetails />} />
        <Route path="hfdetails" element={<HFDetails />} />
        <Route path="hdetails" element={<HDetails />} />
        <Route path="details" element={<Details />} />
        <Route path="food" element={<Food />} />
        <Route path="health" element={<Health />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="furniture" element={<Furniture />} />
        <Route path="groceries" element={<Groceries />} />
        <Route path="gdetails" element={<GDetails />} />
        <Route path="cart" element={<Cart />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path="payment" element={<Payment />} />
        <Route path="successpayment" element={<SucessPayment />} />

        <Route path="favourite" element={<Favourite />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/computers" element={<Computers />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/cameras" element={<Cameras />} />
        <Route path="/sounds" element={<Sounds />} />
        <Route path="/games" element={<Games />} />
        <Route path="/networks" element={<Networks />} />
        <Route path="/eothers" element={<EOthers />} />
        <Route path="/bathroom" element={<Bathroom />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/livingroom" element={<Livingroom />} />
        <Route path="/diningroom" element={<Diningroom />} />
        <Route path="/officefurniture" element={<Officefurniture />} />
        <Route path="/outdoorfurniture" element={<Outdoorfurniture />} />
        <Route path="/hfothers" element={<HFOthers />} />
        <Route path="/Vegetables" element={<Vegetables />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/Meat" element={<Meat />} />
        <Route path="/Fish" element={<Fish />} />
        <Route path="/Beverages" element={<Beverages />} />
        <Route path="/Dessert" element={<Dessert />} />
        <Route path="/frozen-food" element={<Frozen_food />} />
        <Route path="/foodothers" element={<FoodOthers />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/gemjewellery" element={<Gemjewellery />} />
        <Route path="/hairwigs" element={<Hairwigs />} />
        <Route path="/luggages" element={<Luggages />} />
        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/wallets" element={<Wallets />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/haircare" element={<Haircare />} />
        <Route path="/personalcare" element={<Personalcare />} />
        <Route path="/makeup" element={<MakeUp />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/hothers" element={<HOthers />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/snack" element={<Snack />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route path="/herbs" element={<Herbs />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/healthw" element={<Healthw />} />
        <Route path="/gothers" element={<GOthers />} />
        <Route path="/fashionothers" element={<Fashionothers />} />
      </Route>

      {/* Admin Layout Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="addProduct" element={<AddProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
