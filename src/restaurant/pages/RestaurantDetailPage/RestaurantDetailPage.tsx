import { useParams } from "react-router";
import { useEffect } from "react";
import RestaurantDetailCard from "../../components/RestaurantDetailCard/RestaurantDetailCard";
import useRestaurants from "../../hooks/useRestaurants";
import useLoading from "../../../hooks/hooks/useLoading";
import Loading from "../../../components/Loading/Loading";
import { useAppSelector } from "../../../store/hooks";

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
      <RestaurantDetailCard restaurant={restaurant}></RestaurantDetailCard>
    );
  }
};

export default RestaurantDetailPage;
