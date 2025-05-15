import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import RestaurantsClient from "../client/RestaurantClient";
import {
  isDataLoading,
  loadRestaurantsActionCreator,
} from "../slice/restaurantSlice";

const useRestaurants = () => {
  const restaurantsData = useAppSelector(
    (state) => state.restaurantsReducer.restaurantsData,
  );

  const loadingStatus = useAppSelector(
    (state) => state.restaurantsReducer.isLoading,
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

  return {
    restaurantsData,
    loadRestaurants,
    loadingStatus,
  };
};

export default useRestaurants;
