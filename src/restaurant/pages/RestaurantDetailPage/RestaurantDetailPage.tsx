import { Link, useParams } from "react-router";
import { useEffect } from "react";
import RestaurantDetailCard from "../../components/RestaurantDetailCard/RestaurantDetailCard";
import useRestaurants from "../../hooks/useRestaurants";
import useLoading from "../../../ui/hooks/hooks/useLoading";
import Loading from "../../../ui/components/Loading/Loading";
import { useAppSelector } from "../../../store/hooks";
import "./RestaurantDetailPage.css";
import "../pages.css";

const RestaurantDetailPage: React.FC = () => {
  const {
    loadingState: { isLoading },
  } = useLoading();

  const { loadRestaurantById } = useRestaurants();

  const { restaurantId } = useParams<{ restaurantId: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0 });

    loadRestaurantById(restaurantId!);
  }, [loadRestaurantById, restaurantId]);

  const restaurant = useAppSelector((state) =>
    state.restaurantStateData.restaurantsData.restaurants.find(
      (restaurant) => restaurant.id === restaurantId,
    ),
  );

  if (isLoading) {
    return <Loading />;
  }

  if (restaurant) {
    return (
      <div className="page">
        <RestaurantDetailCard restaurant={restaurant}></RestaurantDetailCard>
        <Link
          to={`/restaurants/modify-restaurant/${restaurantId}`}
          className="page__modify-link"
        >
          Modificar
        </Link>
      </div>
    );
  }
};

export default RestaurantDetailPage;
