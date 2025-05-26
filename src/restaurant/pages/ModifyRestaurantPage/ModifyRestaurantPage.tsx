import { useParams } from "react-router";
import RestaurantForm from "../../components/RestaurantForm/RestaurantForm";
import useRestaurants from "../../hooks/useRestaurants";
import { useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";
import type { RestaurantData } from "../../types";
import "../pages.css";

const ModifyRestaurantPage: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const { modifyRestaurant, loadRestaurantById } = useRestaurants();

  useEffect(() => {
    window.scrollTo({ top: 0 });

    loadRestaurantById(restaurantId!);
  }, [loadRestaurantById, restaurantId]);

  const restaurantToModify = useAppSelector((state) =>
    state.restaurantStateData.restaurantsData.restaurants.find(
      (restaurant) => restaurant.id === restaurantId,
    ),
  );

  if (restaurantToModify) {
    const initialRestaurantData: RestaurantData = {
      name: restaurantToModify.name,
      adress: restaurantToModify.adress,
      foodType: restaurantToModify.foodType,
      imageUrl: restaurantToModify.imageUrl,
      description: restaurantToModify.description,
      isVisited: restaurantToModify.isVisited,
      servingsAmount: restaurantToModify.servingsAmount ?? undefined,
      waitTime: restaurantToModify.waitTime ?? undefined,
      customerService: restaurantToModify.customerService ?? undefined,
      priceCategory: restaurantToModify.priceCategory ?? undefined,
      rating: restaurantToModify.rating ?? undefined,
      visitDate: restaurantToModify.visitDate ?? "",
    };

    return (
      <div className="page">
        <header className="page__header">
          <h2 className="page__title">Modificar restaurante</h2>
        </header>
        <RestaurantForm
          modifyAction={modifyRestaurant}
          restaurantToModify={restaurantToModify}
          restaurantId={restaurantId}
          initialRestaurantData={initialRestaurantData}
        />
      </div>
    );
  }

  return (
    <div className="page">
      <header className="page__header">
        <h2 className="page__title">Modificar restaurante</h2>
      </header>
    </div>
  );
};

export default ModifyRestaurantPage;
