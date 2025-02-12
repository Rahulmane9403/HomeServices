import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserPlus, FaSignInAlt, FaUserCog } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#008080" }}>
      <div className="container">
        {/* HomeHelper Brand Name with Logo */}
        <Link to="/workerdashboard" className="navbar-brand d-flex align-items-center fw-bold fs-2">
          <FaHome className="me-2" />
          <span className="text-warning fw-bold" style={{ fontFamily: "Georgia, serif", letterSpacing: "1.5px" }}>
            Home<span className="text-light">Helper</span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto d-flex gap-2">
           
            {/* <li className="nav-item">
              <Link to="/workerbookings" className="btn btn-outline-light">
                <FaSignInAlt className="me-2" /> Bookings
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/workerprofile" className="btn btn-outline-light">
                <FaUserCog className="me-2" /> Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/workerlogin" className="btn btn-outline-light">
                <FaSignInAlt className="me-2" /> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
