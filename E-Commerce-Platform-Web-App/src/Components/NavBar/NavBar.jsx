import { useNavigate } from 'react-router-dom';
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <ul>
      <li>
        <a onClick={() => navigate('/')}>Home</a>
      </li>
      <li>
        <a onClick={() => navigate('/Electronics')}>Electronics</a>
      </li>
      <li>
        <a onClick={() => navigate('/Fashion')}>Fashion</a>
      </li>
      <li>
        <a onClick={() => navigate('/Furniture')}>Home & Furniture</a>
      </li>
      <li>
        <a onClick={() => navigate('/Food')}>Fruit & vegetable</a>
      </li>
      <li>
        <a onClick={() => navigate('/Health')}>Health & Beauty</a>
      </li>
      <li>
        <a onClick={() => navigate('/Groceries')}>Groceries</a>
      </li>
    </ul>
  );
}
