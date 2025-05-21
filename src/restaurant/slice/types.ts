import type { RestaurantsData } from "../client/types";

export type RestaurantState = {
  restaurantsData: RestaurantsData;
};

export type RestaurantPreloadedState = { restaurantStateData: RestaurantState };
