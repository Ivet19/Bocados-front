import RestaurantForm from "../../components/RestaurantForm/RestaurantForm";
import useRestaurants from "../../hooks/useRestaurants";
import "./AddRestaurantPage.css";

const AddRestaurantPage: React.FC = () => {
  const { createRestaurant } = useRestaurants();
  return (
    <div className="form">
      <header className="page-header">
        <h2 className="page-header__title">Añadir restaurante</h2>
      </header>
      <RestaurantForm action={createRestaurant} />
    </div>
  );
};

export default AddRestaurantPage;
