import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphone",
    price: 1000,
    img: "https://5.imimg.com/data5/SELLER/Default/2022/10/MR/NM/HB/151089970/xyz-company-headphone.jpg"
  },
  {
    id: 2,
    name: "Apple iPhone 16 pro",
    price: 180000,
    img: "https://media.icdn.hu/product/2024-09/635680/1720381_apple-iphone-16-pro-128gb-fekete-titan.webp"
  },
  {
    id: 3,
    name: "Air Consitioner",
    price: 120000,
    img: "https://airgreen.ca/cdn/shop/articles/f5480e23d9d8bb6a134ea1b5ffb8e7f8.jpg?v=1715507473"
  },
  {
    id: 4,
    name: "Photographic Equipment",
    price: 150000,
    img: "https://png.pngtree.com/png-clipart/20240312/original/pngtree-compact-digital-photo-camera-isolated-photographic-equipment-png-image_14576721.png"
  },
   {
    id: 5,
    name: "Domestic Refrigerator",
    price: 25000,
    img: "https://tiimg.tistatic.com/fp/1/008/932/domestic-refrigerator-489.jpg"
  },
  {
    id: 6,
    name: "Electric Fan",
    price: 2000,
    img: "https://media.istockphoto.com/id/997118478/photo/retro-table-fan-3d-rendering-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=4dRZ5Gmkqy36mew3lHaSbdOLXnoJMuOlOx8NHdWwL_4="
  },
  {
    id: 7,
    name: "Belizzi Brown Study Table",
    price: 600,
    img: "https://www.jiomart.com/images/product/original/494461648/belizzi-brown-study-table-product-images-o494461648-p609906468-0-202509291757.jpg?im=Resize=(420,420)"
  },
  {
    id: 8,
    name: "NOA right corner sofa",
    price: 5000,
    img: "https://lifeinteriors.com.au/cdn/shop/files/SF-SCD-NOA-FAB-RIG-CORN-BLME-AMBR_1.jpg?v=1751559770&width=800"
  },
  {
    id: 9,
    name: "School Backpack",
    price: 1500,
    img: "https://tiimg.tistatic.com/fp/1/007/013/tear-resistance-polyester-school-backpack-009.jpg"
  },
  {
    id: 10,
    name: "Kraasa Running Shoes",
    price: 2000,
    img: "https://www.jiomart.com/images/product/500x630/rvo4xkoe18/kraasa-running-shoes-for-men-uk-10-product-images-rvo4xkoe18-0-202209250950.jpg"
  },
  {
    id: 11,
    name: "Nova Professional NHP 8215 Hair Dryer Red",
    price: 1200,
    img: "https://www.novaindia.co.in/cdn/shop/products/B083F853KB_MAIN.jpg?v=1654940341"
  },
  {
    id: 12,
    name: "Mens Suit Jackets Casual Two Button Slim Fit Blazers",
    price: 35000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8MWbVKENTyJ1IJL21SfzeYm-vIRgfPSvCQ&s"
  },
];

const Shop = () => {
  const [cart, setCart] = useState({});
  const [search, setSearch] = useState("");
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev[product.id];
      return {
        ...prev,
        [product.id]: existing
          ? { ...existing, quantity: existing.quantity + 1 }
          : { ...product, quantity: 1 }
      };
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const existing = prev[id];
      if (!existing) return prev;
      if (existing.quantity === 1) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: { ...existing, quantity: existing.quantity - 1 } };
    });
  };

  const orderNow = () => {
    if (Object.keys(cart).length === 0) {
      alert("Cart is empty!");
      return;
    }
    alert("Order placed successfully!");
    setCart({});
  };
  const totalPrice = Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1 className="shop-title">Our Shop</h1>
      <div>
  {/* ------------- Search Section ------------- */}
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
  {/* ----------------------------------------- */}

  <div className="shop-section">
    {products
      .filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((product) => (
        <div key={product.id} className="box">
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <p className="price">₹{product.price}</p>
          <button className="add-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
    ))}
  </div>
</div>
      {Object.keys(cart).length > 0 && (
        <div className="cart">
          <h2>
            <FaShoppingCart className="cart-icon" /> Your Cart
          </h2>
          {Object.values(cart).map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <div className="quantity">
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: ₹{totalPrice}</h3>
          <button className="order-btn" onClick={orderNow}>
            Order Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
