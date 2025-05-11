import { transformRestaurantsDataDtoToRestaurantsData } from "../dto/mappers";
import type {
  RestaurantClientStructure,
  RestaurantsData,
  RestaurantsDataDto,
} from "./types";

class RestaurantsClient implements RestaurantClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

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
}

export default RestaurantsClient;
