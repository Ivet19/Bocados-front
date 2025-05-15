import type { RestaurantsData } from "../client/types";

export type RestaurantState = {
  restaurantsData: RestaurantsData;
  isLoading: boolean;
};
