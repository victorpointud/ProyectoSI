// src/components/Home.js
import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenido a nuestr página</h1>
      <p>Disfruta</p>
      <div className="home-content">
        <div className="home-section">
          <h2>Sobre Nosotros</h2>
          <p>Aprende mas de nosotros.</p>
        </div>
        <div className="home-section">
          <h2>Menú</h2>
          <p>Explora estas promociones.</p>
        </div>
        <div className="home-section">
          <h2>Contacto</h2>
          <p>Contáctanos para saber más.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
