import RestaurantForm from "../../components/RestaurantForm/RestaurantForm";
import useRestaurants from "../../hooks/useRestaurants";
import type { RestaurantData } from "../../types";
import "../pages.css";

const AddRestaurantPage: React.FC = () => {
  const { createRestaurant } = useRestaurants();

  const initialRestaurantData: RestaurantData = {
    name: "",
    adress: "",
    foodType: "",
    imageUrl: "",
    description: "",
    isVisited: false,
    servingsAmount: undefined,
    waitTime: undefined,
    customerService: undefined,
    priceCategory: undefined,
    rating: undefined,
    visitDate: "",
  };

  return (
    <div className="page">
      <header className="page__header">
        <h2 className="page__title">Añadir restaurante</h2>
      </header>
      <RestaurantForm
        addAction={createRestaurant}
        initialRestaurantData={initialRestaurantData}
      />
    </div>
  );
};

export default AddRestaurantPage;
