import React, { useState } from "react";
import { Product } from "./product";
import { Cart } from "./cart";
import data from "../data/data.json";

export const Features = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleBuyClick = (category) => {
    setSelectedCategory(category);
  };

  const closeProductPopup = () => {
    setSelectedCategory(null);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    setSelectedCategory(null);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const closeCartPopup = () => {
    setIsCartOpen(false);
  };

  return (
    <div id="features">
      <div className="container">
        <div className="section-title">
          <h2>Productos</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.text}-${i}`} className="col-md-3">
                  <div className="features">
                    <div className="features-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="features-content">
                      <h3 className="features-name">{d.name}</h3>
                      <p className="features-meta">{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <button className="btn coffee" onClick={() => handleBuyClick('Cafés')}>Comprar</button>
        <button className="btn milkshake" onClick={() => handleBuyClick('Malteadas')}>Comprar</button>
        <button className="btn soda" onClick={() => handleBuyClick('Refrescos')}>Comprar</button>
        <button className="btn energy" onClick={() => handleBuyClick('Energéticas')}>Comprar</button>
      </div>
      {selectedCategory && (
        <Product
          category={selectedCategory}
          products={data.Products}
          onClose={closeProductPopup}
          onAddToCart={handleAddToCart}
        />
      )}
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          onClose={closeCartPopup}
          onRemoveFromCart={handleRemoveFromCart}
        />
      )}
    </div>
  );
};
