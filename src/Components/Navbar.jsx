import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="nav-logo border">
        <div>
          <img
            src="https://www.shutterstock.com/image-vector/amazon-logo-editorial-icon-isolated-600nw-2333488123.jpg"
            width="100"
            height="50"
            alt="Amazon Logo"
          />
        </div>
      </div>

      {/* Address */}
      <div className="nav-address border">
        <p className="add-first">Deliver to</p>
        <div className="add-icon">
          <i className="fa-regular fa-location-dot"></i>
          <p className="add-second">India</p>
        </div>
      </div>

      {/* Language */}
      <div className="border">
        <select defaultValue="language">
          <option value="language" disabled>
            Language
          </option>
          <option>Hindi</option>
          <option>Marathi</option>
          <option>Gujarati</option>
          <option>Bangali</option>
          <option>Panjabi</option>
        </select>
      </div>

      {/* Signin */}
      <div className="nav-signin border">
        <a href="/signup">Hello, Signin</a>
        <p className="nav-second">Account & Lists</p>
      </div>

      {/* Login */}
      <div className="nav-login border">
        <a href="/login">Login</a>
      </div>
    
      {/* Returns */}
      <div className="nav-return border">
        <p>Returns</p>
        <p className="nav-second">& Orders</p>
      </div>
    </div>
  );
};

export default Navbar;
