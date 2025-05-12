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
  visitDate,
  ...restaurantsDto
}: RestaurantDto): Restaurant => {
  const restaurant: Restaurant = {
    ...restaurantsDto,
    id: _id,
    name,
    imageAlt: `the dining area of ${name} restaurant`,
  };

  if (visitDate) {
    restaurant.visitDate = new Date(visitDate).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return restaurant;
};
