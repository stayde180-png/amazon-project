import React from "react";
import "../App.css";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      {/* Back To Top */}
      <div className="box20" onClick={scrollToTop}>
        <p>Back to top</p>
      </div>

      {/* Footer Links */}
      <div className="foot-panel">

        <ul>
          <p>Get to Know Us</p>
          <a href="#">About Amazon</a>
          <a href="#">Careers</a>
          <a href="#">Sustainability</a>
          <a href="#">Amazon Science</a>
        </ul>

        <ul>
          <p>Make Money with Us</p>
          <a href="#">Sell on Amazon</a>
          <a href="#">Sell on Amazon Business</a>
          <a href="#">Sell on Amazon Handmade</a>
          <a href="#">Protect and build your brand</a>
          <a href="#">Associates Programme</a>
          <a href="#">Fulfilment by Amazon</a>
          <a href="#">Supply to Amazon</a>
          <a href="#">Advertise Your Products</a>
          <a href="#">Independently Publish with Us</a>
          <a href="#">Amazon Pay</a>
        </ul>

        <ul>
          <p>Amazon Payment Methods</p>
          <a href="#">Amazon Business Amex Card</a>
          <a href="#">Payment Methods Help</a>
          <a href="#">Amazon Currency Converter</a>
          <a href="#">Gift Cards</a>
          <a href="#">Top Up Your Account</a>
          <a href="#">Top Up Your Account in Store</a>
        </ul>

        <ul>
          <p>Let Us Help You</p>
          <a href="#">Track Packages or View Orders</a>
          <a href="#">Delivery Rates & Policies</a>
          <a href="#">Returns & Replacements</a>
          <a href="#">Legal Guarantee</a>
          <a href="#">Recalls and Product Safety Alerts</a>
          <a href="#">Recycling</a>
          <a href="#">Amazon Mobile App</a>
          <a href="#">Customer Service</a>
          <a href="#">Accessibility</a>
          <a href="#">Lists and Gifting</a>
          <a href="#">Report illegal content</a>
        </ul>

      </div>
    </div>
  );
};

export default Footer;