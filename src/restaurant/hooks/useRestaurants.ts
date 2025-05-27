import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import RestaurantsClient from "../client/RestaurantClient";
import useLoading from "../../ui/hooks/hooks/useLoading";
import {
  createRestaurantActionCreator,
  deleteRestaurantActionCreator,
  loadRestaurantByIdActionCreator,
  loadRestaurantsActionCreator,
  modifyRestaurantActionCreator,
  updateRestaurantActionCreator,
} from "../slice/restaurantSlice";
import useModal from "../../ui/hooks/hooks/useModal";
import type { RestaurantData } from "../types";
import type { RestaurantDto } from "../dto/typesDto";

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

  const loadRestaurantById = useCallback(
    async (restaurantId: string): Promise<void> => {
      const loading = setTimeout(() => {
        startLoading();
      }, 200);

      try {
        const restaurant =
          await restaurantClient.getRestaurantById(restaurantId);

        const action = loadRestaurantByIdActionCreator({ restaurant });

        dispatch(action);
      } catch {
        showModal(
          false,
          "NO SE HA PODIDO OBTENER LA INFORMACIÓN DEL RESTAURANTE",
        );
      } finally {
        clearTimeout(loading);
      }
    },
    [restaurantClient, dispatch, startLoading, stopLoading, showModal],
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

  const modifyRestaurant = useCallback(
    async (
      restaurantId: string,
      restaurantDto: RestaurantDto,
    ): Promise<void> => {
      try {
        const restaurant = await restaurantClient.updateRestaurant(
          restaurantId,
          restaurantDto,
        );

        const action = modifyRestaurantActionCreator(restaurant);

        dispatch(action);
      } catch {
        showModal(false, "NO SE HA PODIDO MODIFICAR EL RESTAURANTE");
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
    loadRestaurantById,
    updateRestaurant,
    modifyRestaurant,
    createRestaurant,
    removeRestaurant,
  };
};

export default useRestaurants;
