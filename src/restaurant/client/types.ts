import type { RestaurantDto } from "../dto/typesDto";
import type { Restaurant } from "../types";

export interface RestaurantClientStructure {
  getRestaurants: (pageNumber?: number) => Promise<RestaurantsData>;
}

export interface RestaurantsDataDto {
  restaurants: RestaurantDto[];
  restaurantsTotal: number;
}

export type RestaurantsData = Omit<RestaurantsDataDto, "restaurants"> & {
  restaurants: Restaurant[];
};
