import { configureStore } from "@reduxjs/toolkit";
import { restaurantsReducer } from "../restaurant/slice/restaurantSlice";

const store = configureStore({
  reducer: { restaurantsReducer: restaurantsReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
