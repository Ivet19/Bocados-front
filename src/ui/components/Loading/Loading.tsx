import type React from "react";
import "./Loading.css";

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <h2 className="loading__message">Cargando información...</h2>
      <img
        className="loading__image"
        src="/images/loading.svg"
        alt="un hombre aburrido esperando sentado a que le llegue la comida"
        width={380}
        height={348}
      />
      <span className="loading__message">¡Gracias por tu paciencia!</span>
    </div>
  );
};

export default Loading;
