import { http, HttpResponse } from "msw";
import type { RestaurantDto } from "../dto/typesDto";
import {
  moviesRestaurantsFirstPageDto,
  moviesRestaurantsSecondPageDto,
} from "../dto/fixturesDto";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("Not found URL");
}

export const handlers = http.get(`${apiUrl}/restaurants`, ({ request }) => {
  const url = new URL(request.url);
  const currentPage = url.searchParams.get("page");

  if (currentPage === "2") {
    return HttpResponse.json<{
      restaurants: RestaurantDto[];
      restaurantsTotal: number;
    }>({
      restaurants: moviesRestaurantsSecondPageDto,
      restaurantsTotal: moviesRestaurantsSecondPageDto.length,
    });
  }

  return HttpResponse.json<{
    restaurants: RestaurantDto[];
    restaurantsTotal: number;
  }>({
    restaurants: moviesRestaurantsFirstPageDto,
    restaurantsTotal: moviesRestaurantsFirstPageDto.length,
  });
});
