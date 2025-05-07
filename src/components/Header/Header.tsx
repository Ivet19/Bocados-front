import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="page-title-container" aria-label="Bocados">
        <img
          className="page-title__image"
          src="logo.svg"
          alt="Logo de la aplicación 'Bocados' que representa una B con la silueta de la Sagrada Familia dentro y que tiene un bocado en la parte superior derecha"
          width={60}
          height={70}
        />
        <h1 className="page-title">OCADOS</h1>
      </div>
    </header>
  );
};

export default Header;
