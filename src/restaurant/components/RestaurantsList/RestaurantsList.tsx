import type { Restaurant } from "../../types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./RestaurantsList.css";

interface RestaurantsListProps {
  restaurants: Restaurant[];
}

const RestaurantsList: React.FC<RestaurantsListProps> = ({ restaurants }) => {
  return (
    <ul className="restaurants">
      {restaurants.map((restaurant, position) => (
        <li key={restaurant.id}>
          <RestaurantCard restaurant={restaurant} position={position} />
        </li>
      ))}
    </ul>
  );
};

export default RestaurantsList;
