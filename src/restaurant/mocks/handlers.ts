import { http, HttpResponse } from "msw";
import type { RestaurantDto } from "../dto/typesDto";
import {
  moviesRestaurantsDto,
  moviesRestaurantsFirstPageDto,
  moviesRestaurantsSecondPageDto,
  visitedJackRabbitSlimsDto,
} from "../dto/fixturesDto";
import { jackRabbitSlims, threeBroomsticksDto } from "../fixtures";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("Not found URL");
}

export const handlers = [
  http.get(`${apiUrl}/restaurants`, ({ request }) => {
    const url = new URL(request.url);
    const currentPage = url.searchParams.get("page");

    if (currentPage === "2") {
      return HttpResponse.json<{
        restaurants: RestaurantDto[];
        restaurantsTotal: number;
      }>({
        restaurants: moviesRestaurantsSecondPageDto,
        restaurantsTotal: moviesRestaurantsDto.length,
      });
    }

    return HttpResponse.json<{
      restaurants: RestaurantDto[];
      restaurantsTotal: number;
    }>({
      restaurants: moviesRestaurantsFirstPageDto,
      restaurantsTotal: moviesRestaurantsDto.length,
    });
  }),

  http.patch(
    `${apiUrl}/restaurants/visit-restaurant/${jackRabbitSlims.id}`,
    () => {
      return HttpResponse.json<{ restaurant: RestaurantDto }>({
        restaurant: visitedJackRabbitSlimsDto,
      });
    },
  ),

  http.post(`${apiUrl}/restaurants`, () => {
    return HttpResponse.json<{ restaurant: RestaurantDto }>({
      restaurant: threeBroomsticksDto,
    });
  }),
];
