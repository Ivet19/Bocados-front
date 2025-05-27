import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/restaurants">
        Restaurantes
      </NavLink>
      <NavLink className="navigation__link" to="/add-restaurant">
        Añadir restaurante
      </NavLink>
    </nav>
  );
};

export default Navigation;
