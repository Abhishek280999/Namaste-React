import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import Logo from "../assets/img/food.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="nav-item">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/">
            <li>Cart</li>
          </Link>
        </ul>
      </div>

      {/* /* conditional rendering */}
      {isLoggedIn ? (
        <button className="btn" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="btn" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
