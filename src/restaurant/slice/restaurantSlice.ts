import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RestaurantsData } from "../client/types";
import type { RestaurantState } from "./types";

const initialState: RestaurantState = {
  restaurantsData: {
    restaurants: [],
    restaurantsTotal: 0,
  },
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    loadRestaurants: (
      currentState,
      action: PayloadAction<RestaurantsData>,
    ): RestaurantState => {
      return {
        ...currentState,
        restaurantsData: action.payload,
      };
    },
  },
});

export const restaurantsReducer = restaurantSlice.reducer;

export const { loadRestaurants: loadRestaurantsActionCreator } =
  restaurantSlice.actions;
