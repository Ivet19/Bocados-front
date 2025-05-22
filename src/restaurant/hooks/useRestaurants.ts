import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import RestaurantsClient from "../client/RestaurantClient";
import useLoading from "../../hooks/hooks/useLoading";
import {
  createRestaurantActionCreator,
  deleteRestaurantActionCreator,
  loadRestaurantsActionCreator,
  updateRestaurantActionCreator,
} from "../slice/restaurantSlice";
import useModal from "../../hooks/hooks/useModal";
import type { RestaurantData } from "../types";

const useRestaurants = () => {
  const { startLoading, stopLoading } = useLoading();
  const { showModal } = useModal();

  const restaurantsData = useAppSelector(
    (state) => state.restaurantStateData.restaurantsData,
  );

  const dispatch = useAppDispatch();

  const restaurantClient = useMemo(() => new RestaurantsClient(), []);

  const loadRestaurants = useCallback(
    async (pageNumber?: number): Promise<void> => {
      const loading = setTimeout(() => {
        startLoading();
      }, 200);

      try {
        const restaurantsData =
          await restaurantClient.getRestaurants(pageNumber);

        const action = loadRestaurantsActionCreator(restaurantsData);

        dispatch(action);
      } catch {
        showModal(
          false,
          "NO SE HA PODIDO OBTENER LA INFORMACIÓN DE LOS RESTAURANTES",
        );
      } finally {
        clearTimeout(loading);
      }

      stopLoading();
    },
    [showModal, startLoading, restaurantClient, stopLoading, dispatch],
  );

  const updateRestaurant = useCallback(
    async (restaurantId: string): Promise<void> => {
      try {
        const restaurant =
          await restaurantClient.toggleRestaurantById(restaurantId);

        const action = updateRestaurantActionCreator(restaurant);

        dispatch(action);
      } catch {
        showModal(false, "NO SE HA PODIDO CAMBIAR EL ESTADO DEL RESTAURANTE");
      }
    },
    [showModal, restaurantClient, dispatch],
  );

  const createRestaurant = async (
    restaurantData: RestaurantData,
  ): Promise<void> => {
    try {
      const newRestaurant =
        await restaurantClient.addRestaurant(restaurantData);

      showModal(true, "RESTAURANTE CREADO CORRECTAMENTE");

      const action = createRestaurantActionCreator({ newRestaurant });

      dispatch(action);
    } catch {
      showModal(false, "NO SE HA PODIDO CREAR EL RESTAURANTE CORRECTAMENTE");
    }
  };

  const removeRestaurant = async (restaurantId: string): Promise<void> => {
    try {
      const deletedRestaurant =
        await restaurantClient.deleteRestaurant(restaurantId);

      showModal(true, "RESTAURANTE ELIMINADO CORRECTAMENTE");

      const action = deleteRestaurantActionCreator({ deletedRestaurant });

      dispatch(action);
    } catch {
      showModal(false, "NO SE HA PODIDO ELIMINAR EL RESTAURANTE CORRECTAMENTE");
    }
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
