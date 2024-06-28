import React from "react";

export const Product = ({ category, products, onClose, onAddToCart }) => {
  const categoryProducts = products[category] || [];

  return (
    <div id="product-popup-overlay">
      <div id="product-popup-content">
        <button className="close" onClick={onClose}>×</button>
        <h2>{category}</h2>
        <ul>
          {categoryProducts.map((product, index) => (
            <li key={index} className="product-item">
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
              <button className="add-to-cart" onClick={() => onAddToCart(product)}>Añadir al carrito</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
