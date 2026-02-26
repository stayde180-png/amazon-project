import React from "react";
import "../App.css";

const Panel = () => {
  return (
    <div className="panel">
      <div className="panel-all border">All</div>

      <div className="panel-ops border">
        <p>Fresh</p>
      </div>

      <div className="border"><p>MX Player</p></div>
      <div className="border"><p>Sell</p></div>
      <div className="border"><p>Bestsellers</p></div>
      <div className="border"><p>Today's Deals</p></div>
      <div className="border"><p>Mobiles</p></div>
      <div className="border"><p>New Releases</p></div>
      <div className="border"><p>Electronics</p></div>
      <div className="border"><p>Customer Service</p></div>
      <div className="border"><p>Home & Kitchen</p></div>
      <div className="border"><p>Prime</p></div>
      <div className="border"><p>Fashion</p></div>
      <div className="border"><p>Amazon Pay</p></div>
    </div>
  );
};

export default Panel;