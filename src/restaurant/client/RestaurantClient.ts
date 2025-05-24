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

class RestaurantClient implements RestaurantClientStructure {
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

  public getRestaurantById = async (
    restaurantId: string,
  ): Promise<Restaurant> => {
    const response = await fetch(`${this.apiUrl}/restaurants/${restaurantId}`);

    if (!response.ok) {
      throw new Error("Error getting restaurant");
    }

    const restaurantDto = (await response.json()) as {
      restaurant: RestaurantDto;
    };

    const restaurant = mapRestaurantDtoToRestaurant(restaurantDto.restaurant);

    return restaurant;
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

  public updateRestaurant = async (
    restaurantId: string,
    restaurantData: RestaurantData,
  ): Promise<Restaurant> => {
    const response = await fetch(
      `${this.apiUrl}/restaurants/modify-restaurant/${restaurantId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaurantData),
      },
    );

    if (!response.ok) {
      throw new Error("Error updating restaurant");
    }

    const { restaurant: restaurantDto } =
      (await response.json()) as ResponseRestaurantDto;

    const updatedRestaurant = mapRestaurantDtoToRestaurant(restaurantDto);

    return updatedRestaurant;
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

  public deleteRestaurant = async (
    restaurantId: string,
  ): Promise<Restaurant> => {
    const response = await fetch(`${this.apiUrl}/restaurants/${restaurantId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error deleting restaurant");
    }

    const deletedRestaurantDto = (await response.json()) as {
      restaurant: RestaurantDto;
    };

    const deletedRestaurant = mapRestaurantDtoToRestaurant(
      deletedRestaurantDto.restaurant,
    );

    return deletedRestaurant;
  };
}

export default RestaurantClient;
