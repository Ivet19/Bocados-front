import { http, HttpResponse } from "msw";
import { server } from "../../mocks/node";
import { moviesRestaurantsFirstPageDto } from "../../dto/fixturesDto";
import { mapRestaurantsDtoToRestaurants } from "../../dto/mappers";
import RestaurantsClient from "../RestaurantClient";

describe("Given the getPosts method of PostClient", () => {
  describe("When it's called", () => {
    test("Then it should return Jack Rabbit Slim's, Gusteau's, The Leaky Cauldron, Pizza Planet, Kelp Shake and Moe's Tavern restaurants", async () => {
      const restaurantClient = new RestaurantsClient();

      const restaurantsData = await restaurantClient.getRestaurants();

      const restaurants = restaurantsData.restaurants;

      expect(restaurants).toStrictEqual(
        mapRestaurantsDtoToRestaurants(moviesRestaurantsFirstPageDto),
      );
    });

    test("Then it should return 6 to as the total number of restaurants", async () => {
      const expectedRestaurantsTotal = 6;

      const restaurantsClient = new RestaurantsClient();

      const restaurantsData = await restaurantsClient.getRestaurants();

      const restaurantsTotal = restaurantsData.restaurantsTotal;

      expect(restaurantsTotal).toBe(expectedRestaurantsTotal);
    });
  });

  describe("When it's called and response is not ok", () => {
    test("Then it should throw 'Error fetching restaurants'", () => {
      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.get(`${apiUrl}/restaurants`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const restaurantClient = new RestaurantsClient();

      const restaurants = restaurantClient.getRestaurants();

      expect(restaurants).rejects.toThrow("Error fetching restaurants");
    });
  });
});
