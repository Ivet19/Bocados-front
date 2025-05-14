import type React from "react";
import "./Loading.css";

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <h2 className="loading__message">Cargando información...</h2>
      <img
        className="loading__image"
        src="images/loading.svg"
        alt="an exhausted man sitting on a table waiting for food"
        width={175}
        height={180}
      />
      <span className="loading__message">¡Gracias por tu paciencia!</span>
    </div>
  );
};

export default Loading;
