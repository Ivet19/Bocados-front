import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RestaurantsData } from "../client/types";
import type { RestaurantState } from "./types";

const initialState: RestaurantState = {
  restaurantsData: {
    restaurants: [],
    restaurantsTotal: 0,
  },
  isLoading: false,
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    isDataLoading: (currentState): void => {
      currentState.isLoading = true;
    },

    loadRestaurants: (
      currentState,
      {
        payload: { restaurants, restaurantsTotal },
      }: PayloadAction<RestaurantsData>,
    ): RestaurantState => {
      return {
        ...currentState,
        restaurantsData: {
          restaurants: [...restaurants],
          restaurantsTotal,
        },
        isLoading: false,
      };
    },
  },
});

export const restaurantsReducer = restaurantSlice.reducer;

export const { loadRestaurants: loadRestaurantsActionCreator, isDataLoading } =
  restaurantSlice.actions;
