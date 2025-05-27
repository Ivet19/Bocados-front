import { http, HttpResponse } from "msw";
import type { RestaurantDto } from "../dto/typesDto";
import {
  jackRabbitSlimsDto,
  kelpShakeDto,
  leakyCauldronDto,
  moesTavernDto,
  moviesRestaurantsDto,
  moviesRestaurantsFirstPageDto,
  moviesRestaurantsSecondPageDto,
  pizzaPlanetDto,
  updatedKelpShakeDto,
  visitedJackRabbitSlimsDto,
  threeBroomsticksDto,
} from "../dto/fixturesDto";
import {
  jackRabbitSlims,
  kelpShake,
  leakyCauldron,
  moesTavern,
  threeBroomsticks,
} from "../fixtures";

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

  http.get(`${apiUrl}/restaurants/${jackRabbitSlims.id}`, () => {
    return HttpResponse.json<{ restaurant: RestaurantDto }>({
      restaurant: jackRabbitSlimsDto,
    });
  }),

  http.get(`${apiUrl}/restaurants/${leakyCauldron.id}`, () => {
    return HttpResponse.json<{ restaurant: RestaurantDto }>({
      restaurant: leakyCauldronDto,
    });
  }),

  http.get(`${apiUrl}/restaurants/${moesTavern.id}`, () => {
    return HttpResponse.json<{ restaurant: RestaurantDto }>({
      restaurant: moesTavernDto,
    });
  }),

  http.get(`${apiUrl}/restaurants/${kelpShake.id}`, () => {
    return HttpResponse.json<{ restaurant: RestaurantDto }>({
      restaurant: kelpShakeDto,
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

  http.put(`${apiUrl}/restaurants/modify-restaurant/${kelpShake.id}`, () => {
    return HttpResponse.json<{ restaurant: RestaurantDto }>({
      restaurant: updatedKelpShakeDto,
    });
  }),

  http.put(
    `${apiUrl}/restaurants/modify-restaurant/${threeBroomsticks.id}`,
    () => {
      return HttpResponse.json<{ restaurant: RestaurantDto }>({
        restaurant: threeBroomsticksDto,
      });
    },
  ),

  http.put(
    `${apiUrl}/restaurants/modify-restaurant/${jackRabbitSlims.id}`,
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

  http.delete(`${apiUrl}/restaurants/${threeBroomsticksDto._id}`, () => {
    return HttpResponse.json<{ restaurant: RestaurantDto }>({
      restaurant: threeBroomsticksDto,
    });
  }),

  http.delete(`${apiUrl}/restaurants/${pizzaPlanetDto._id}`, () => {
    return HttpResponse.json<{ restaurant: RestaurantDto }>({
      restaurant: pizzaPlanetDto,
    });
  }),

  http.delete(`${apiUrl}/restaurants/${jackRabbitSlimsDto._id}`, () => {
    return HttpResponse.json<{ restaurant: RestaurantDto }>({
      restaurant: jackRabbitSlimsDto,
    });
  }),
];
