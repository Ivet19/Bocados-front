import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import RestaurantsClient from "../client/RestaurantClient";
import {
  isDataLoading,
  loadRestaurantsActionCreator,
  updateRestaurantActionCreator,
} from "../slice/restaurantSlice";

const useRestaurants = () => {
  const restaurantsData = useAppSelector(
    (state) => state.restaurantStateData.restaurantsData,
  );

  const loadingStatus = useAppSelector(
    (state) => state.restaurantStateData.isLoading,
  );

  const dispatch = useAppDispatch();

  const restaurantClient = useMemo(() => new RestaurantsClient(), []);

  const loadRestaurants = useCallback(
    async (pageNumber?: number): Promise<void> => {
      const timeout = setTimeout(() => {
        dispatch(isDataLoading());
      }, 500);

      const restaurantsData = await restaurantClient.getRestaurants(pageNumber);

      clearTimeout(timeout);

      const action = loadRestaurantsActionCreator(restaurantsData);

      dispatch(action);
    },
    [restaurantClient, dispatch],
  );

  const updateRestaurant = useCallback(
    async (restaurantId: string): Promise<void> => {
      const restaurant =
        await restaurantClient.toggleRestaurantById(restaurantId);

      const action = updateRestaurantActionCreator(restaurant);

      dispatch(action);
    },
    [restaurantClient, dispatch],
  );

  return {
    restaurantsData,
    loadRestaurants,
    loadingStatus,
    updateRestaurant,
  };
};

export default useRestaurants;
