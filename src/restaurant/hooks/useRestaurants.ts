import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import RestaurantsClient from "../client/RestaurantClient";
import { loadRestaurantsActionCreator } from "../slice/restaurantSlice";

const useRestaurants = () => {
  const restaurants = useAppSelector(
    (state) => state.restaurantsReducer.restaurantsData,
  );

  const dispatch = useAppDispatch();

  const restaurantClient = useMemo(() => new RestaurantsClient(), []);

  const loadRestaurants = useCallback(
    async (pageNumber?: number): Promise<void> => {
      const restaurantsData = await restaurantClient.getRestaurants(pageNumber);

      const action = loadRestaurantsActionCreator(restaurantsData);

      dispatch(action);
    },
    [restaurantClient, dispatch],
  );

  return {
    restaurants,
    loadRestaurants,
  };
};

export default useRestaurants;
