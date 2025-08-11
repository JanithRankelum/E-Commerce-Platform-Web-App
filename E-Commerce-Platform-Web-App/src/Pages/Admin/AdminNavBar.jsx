import storeImg from "../../assets/images/footer/logo.png";
import "./AdminFooter.css"

export default function NavBar() {
  return (
    <ul id="logo-ul">
      <li id="logo-li">
        <img id="logo-main" src={storeImg} alt="Store logo"></img>
      </li>
    </ul>
  );
}
