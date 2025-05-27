import { configureStore } from "@reduxjs/toolkit";
import type { RestaurantPreloadedState } from "../restaurant/slice/types";
import { restaurantsReducer } from "../restaurant/slice/restaurantSlice";
import { uiReducer } from "../ui/uiSlice/uiSlice";

const setupStore = (preloadedState?: RestaurantPreloadedState) => {
  const store = configureStore({
    reducer: {
      restaurantStateData: restaurantsReducer,
      uiSlice: uiReducer,
    },
    preloadedState,
  });

  return store;
};

export default setupStore;
