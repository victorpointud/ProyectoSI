import React from "react";

export const Cart = ({ cartItems, onClose, onRemoveFromCart }) => {
  return (
    <div id="cart-popup-overlay">
      <div id="cart-popup-content">
        <button className="close" onClick={onClose}>×</button>
        <h2>Carrito</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <button className="remove-from-cart" onClick={() => onRemoveFromCart(index)}>Borrar</button>
            </li>
          ))}
        </ul>
        <button className="pay-button">Pagar</button>
      </div>
    </div>
  );
};
