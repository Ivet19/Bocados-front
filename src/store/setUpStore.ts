import { configureStore } from "@reduxjs/toolkit";
import type { RestaurantPreloadedState } from "../restaurant/slice/types";
import { restaurantsReducer } from "../restaurant/slice/restaurantSlice";
import { modalReducer } from "../slices/slices/modalSlice";
import { loadingReducer } from "../slices/slices/loadingSlice";

const setupStore = (preloadedState?: RestaurantPreloadedState) => {
  const store = configureStore({
    reducer: {
      restaurantStateData: restaurantsReducer,
      modalSlice: modalReducer,
      loadingSlice: loadingReducer,
    },
    preloadedState,
  });

  return store;
};

export default setupStore;
