import type { RestaurantsData, RestaurantsDataDto } from "../client/types";
import type { Restaurant } from "../types";
import type { RestaurantDto } from "./typesDto";

export const transformRestaurantsDataDtoToRestaurantsData = ({
  restaurants: restaurantsDto,
  restaurantsTotal,
}: RestaurantsDataDto): RestaurantsData => {
  const restaurants = mapRestaurantsDtoToRestaurants(restaurantsDto);

  const restaurantsData: RestaurantsData = {
    restaurants,
    restaurantsTotal,
  };

  return restaurantsData;
};

export const mapRestaurantsDtoToRestaurants = (
  restaurantsDto: RestaurantDto[],
): Restaurant[] => {
  const restaurants = restaurantsDto.map<Restaurant>((restaurantDto) =>
    mapRestaurantDtoToRestaurant(restaurantDto),
  );

  return restaurants;
};

export const mapRestaurantDtoToRestaurant = ({
  _id,
  name,
  servingsAmount,
  waitTime,
  customerService,
  priceCategory,
  rating,
  visitDate,
  ...restaurantsDto
}: RestaurantDto): Restaurant => {
  const restaurant: Restaurant = {
    ...restaurantsDto,
    id: _id,
    name,
    imageAlt: `the dining area of ${name} restaurant`,
  };

  if (servingsAmount) {
    restaurant.servingsAmount = servingsAmount;
  }

  if (waitTime) {
    restaurant.waitTime = waitTime;
  }

  if (customerService) {
    restaurant.customerService = customerService;
  }

  if (priceCategory) {
    restaurant.priceCategory = priceCategory;
  }

  if (typeof rating !== "undefined") {
    restaurant.rating = rating;
  }

  if (visitDate) {
    restaurant.visitDate = new Date(visitDate).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return restaurant;
};
