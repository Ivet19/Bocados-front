import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="page-title-container" aria-label="Bocados">
        <h1 className="page-title">
          <img
            className="page-title__image"
            src="logo.svg"
            alt="B"
            width={60}
            height={70}
          />
          OCADOS
        </h1>
      </div>
    </header>
  );
};

export default Header;
