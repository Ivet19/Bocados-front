import {
  mapRestaurantDtoToRestaurant,
  transformRestaurantsDataDtoToRestaurantsData,
} from "../dto/mappers";
import type { RestaurantDto } from "../dto/typesDto";
import type { Restaurant, RestaurantData } from "../types";
import type {
  ResponseRestaurantDto,
  RestaurantClientStructure,
  RestaurantsData,
  RestaurantsDataDto,
} from "./types";

class RestaurantsClient implements RestaurantClientStructure {
  private readonly apiUrl = import.meta.env.VITE_API_URL;

  public getRestaurants = async (
    pageNumber?: number,
  ): Promise<RestaurantsData> => {
    const fetchUrl = !pageNumber
      ? `${this.apiUrl}/restaurants`
      : `${this.apiUrl}/restaurants?page=${pageNumber}`;

    const response = await fetch(fetchUrl);

    if (!response.ok) {
      throw new Error("Error fetching restaurants");
    }

    const restaurantsDataDto = (await response.json()) as RestaurantsDataDto;

    const restaurantsData =
      transformRestaurantsDataDtoToRestaurantsData(restaurantsDataDto);

    return restaurantsData;
  };

  public toggleRestaurantById = async (
    RestaurantId: string,
  ): Promise<Restaurant> => {
    const response = await fetch(
      `${this.apiUrl}/restaurants/visit-restaurant/${RestaurantId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      },
    );

    if (!response.ok) {
      throw new Error("Error updating restaurant");
    }

    const restaurantDto = (await response.json()) as {
      restaurant: RestaurantDto;
    };

    const restaurant = mapRestaurantDtoToRestaurant(restaurantDto.restaurant);

    return restaurant;
  };

  public addRestaurant = async (
    restaurantData: RestaurantData,
  ): Promise<Restaurant> => {
    const response = await fetch(`${this.apiUrl}/restaurants`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(restaurantData),
    });

    if (!response.ok) {
      throw new Error("Error adding the new restaurant");
    }

    const { restaurant: restaurantDto } =
      (await response.json()) as ResponseRestaurantDto;

    const newRestaurant = mapRestaurantDtoToRestaurant(restaurantDto);

    return newRestaurant;
  };
}

export default RestaurantsClient;
