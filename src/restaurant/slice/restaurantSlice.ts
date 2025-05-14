import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RestaurantsData } from "../client/types";
import type { RestaurantState } from "./types";

const initialState: RestaurantState = {
  restaurantsData: {
    restaurants: [],
    restaurantsTotal: 0,
  },
  status: "idle",
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    isLoading: (currentState): void => {
      currentState.status = "loading";
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
        status: "idle",
      };
    },
  },
});

export const restaurantsReducer = restaurantSlice.reducer;

export const { loadRestaurants: loadRestaurantsActionCreator, isLoading } =
  restaurantSlice.actions;
