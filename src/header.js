import { NavLink, Link } from "react-router-dom"; // Correct import

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Service</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;