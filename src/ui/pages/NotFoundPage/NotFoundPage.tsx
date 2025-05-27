import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <div className="not-found__message">
        <h2 className="not-found__title">¡ERROR 404!</h2>
        <h3 className="not-found__subtitle">
          No se ha encontrado la página que buscas.
        </h3>
        <img
          src="icons/Error-icon.svg"
          alt="Exclamation symbol icon"
          width={40}
          height={40}
        />
      </div>
      <p className="not-found__suggestion">
        Prueba de nuevo o dirígete a uno de los enlaces de esta página.
      </p>
    </div>
  );
};

export default NotFoundPage;
