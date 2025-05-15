import { configureStore } from "@reduxjs/toolkit";
import type { RestaurantPreloadedState } from "../restaurant/slice/types";
import { restaurantsReducer } from "../restaurant/slice/restaurantSlice";

const setupStore = (preloadedState?: RestaurantPreloadedState) => {
  const store = configureStore({
    reducer: { restaurantStateData: restaurantsReducer },
    preloadedState,
  });

  return store;
};

export default setupStore;
