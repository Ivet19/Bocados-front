import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RestaurantsData } from "../client/types";
import type { RestaurantState } from "./types";
import type { Restaurant } from "../types";

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
      };
    },
    updateRestaurant: (
      currentState,
      action: PayloadAction<Restaurant>,
    ): RestaurantState => {
      return {
        restaurantsData: {
          ...currentState.restaurantsData,
          restaurants: currentState.restaurantsData.restaurants.map(
            (restaurant) =>
              restaurant.id === action.payload.id ? action.payload : restaurant,
          ),
        },
      };
    },
    createRestaurant: (
      { restaurantsData: { restaurants, restaurantsTotal } },
      {
        payload: { newRestaurant },
      }: PayloadAction<{ newRestaurant: Restaurant }>,
    ): RestaurantState => {
      return {
        restaurantsData: {
          restaurants: [...restaurants, newRestaurant],
          restaurantsTotal: restaurantsTotal + 1,
        },
      };
    },
    removeRestaurant: (
      { restaurantsData: { restaurants, restaurantsTotal } },
      {
        payload: {
          deletedRestaurant: { id },
        },
      }: PayloadAction<{ deletedRestaurant: Restaurant }>,
    ): RestaurantState => {
      return {
        restaurantsData: {
          restaurants: restaurants.filter((restaurant) => restaurant.id !== id),
          restaurantsTotal: restaurantsTotal - 1,
        },
      };
    },
  },
});

export const restaurantsReducer = restaurantSlice.reducer;

export const {
  loadRestaurants: loadRestaurantsActionCreator,
  updateRestaurant: updateRestaurantActionCreator,
  createRestaurant: createRestaurantActionCreator,
  removeRestaurant: deleteRestaurantActionCreator,
} = restaurantSlice.actions;
