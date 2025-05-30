import { lazy } from "react";

export const LazyRestaurantsPage = lazy(
  () => import("../../restaurant/pages/RestaurantsPage/RestaurantsPage"),
);

export const LazyAddRestaurantPage = lazy(
  () => import("../../restaurant/pages/AddRestaurantPage/AddRestaurantPage"),
);

export const LazyNotfoundPage = lazy(
  () => import("../../ui/pages/NotFoundPage/NotFoundPage"),
);

export const LazyRestaurantDetailPage = lazy(
  () =>
    import("../../restaurant/pages/RestaurantDetailPage/RestaurantDetailPage"),
);

export const LazyModifyRestaurantPage = lazy(
  () =>
    import("../../restaurant/pages/ModifyRestaurantPage/ModifyRestaurantPage"),
);
