import type { RestaurantsData } from "../client/types";

export type RestaurantState = {
  restaurantsData: RestaurantsData;
  status: "idle" | "loading" | "succeeded" | "failed";
};
