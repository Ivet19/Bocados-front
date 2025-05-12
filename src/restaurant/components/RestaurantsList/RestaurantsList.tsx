import type { Restaurant } from "../../types";
import "./RestaurantsList.css";

interface RestaurantsListProps {
  restaurants: Restaurant[];
}

const RestaurantsList: React.FC<RestaurantsListProps> = ({ restaurants }) => {
  return (
    <ul className="restaurants">
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}></li>
      ))}
    </ul>
  );
};

export default RestaurantsList;
