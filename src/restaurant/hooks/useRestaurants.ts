import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import RestaurantsClient from "../client/RestaurantClient";
import {
  createRestaurantActionCreator,
  deleteRestaurantActionCreator,
  loadRestaurantsActionCreator,
  updateRestaurantActionCreator,
} from "../slice/restaurantSlice";
import type { RestaurantData } from "../types";

const useRestaurants = () => {
  const restaurantsData = useAppSelector(
    (state) => state.restaurantStateData.restaurantsData,
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

  const updateRestaurant = useCallback(
    async (restaurantId: string): Promise<void> => {
      const restaurant =
        await restaurantClient.toggleRestaurantById(restaurantId);

      const action = updateRestaurantActionCreator(restaurant);

      dispatch(action);
    },
    [restaurantClient, dispatch],
  );

  const createRestaurant = async (
    restaurantData: RestaurantData,
  ): Promise<void> => {
    const newRestaurant = await restaurantClient.addRestaurant(restaurantData);

    const action = createRestaurantActionCreator({ newRestaurant });

    dispatch(action);
  };

  const removeRestaurant = async (restaurantId: string): Promise<void> => {
    const deletedRestaurant =
      await restaurantClient.deleteRestaurant(restaurantId);

    const action = deleteRestaurantActionCreator({ deletedRestaurant });

    dispatch(action);
  };

  return {
    restaurantsData,
    loadRestaurants,
    updateRestaurant,
    createRestaurant,
    removeRestaurant,
  };
};

export default useRestaurants;
