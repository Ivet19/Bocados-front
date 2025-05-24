import type { RestaurantDto } from "../dto/typesDto";
import type { Restaurant, RestaurantData } from "../types";

export interface RestaurantClientStructure {
  getRestaurants: (pageNumber?: number) => Promise<RestaurantsData>;
  getRestaurantById: (restaurantId: string) => Promise<Restaurant>;
  toggleRestaurantById: (RestaurantId: string) => Promise<Restaurant>;
  updateRestaurant: (
    restaurantId: string,
    restaurantData: RestaurantData,
  ) => Promise<Restaurant>;
  addRestaurant: (restaurantData: RestaurantData) => Promise<Restaurant>;
  deleteRestaurant: (restaurantId: string) => Promise<Restaurant>;
}

export interface RestaurantsDataDto {
  restaurants: RestaurantDto[];
  restaurantsTotal: number;
}

export type RestaurantsData = Omit<RestaurantsDataDto, "restaurants"> & {
  restaurants: Restaurant[];
};

export type ResponseRestaurantDto = {
  restaurant: RestaurantDto;
};
