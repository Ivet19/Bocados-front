import { http, HttpResponse } from "msw";
import { mapRestaurantDtoToRestaurant } from "../../dto/mappers";
import { server } from "../../mocks/node";
import RestaurantClient from "../RestaurantClient";
import { moesTavernDto } from "../../dto/fixturesDto";

describe("Given the getRestaurantById method to RestaurantClient", () => {
  describe("When it's called with '662a1c9d7f8b9f001a1b0017' id", () => {
    test("Then it should return Moe's Tavern restaurant", async () => {
      const restaurantClient = new RestaurantClient();

      const restaurantDto = await restaurantClient.getRestaurantById(
        moesTavernDto._id,
      );

      const restaurant = mapRestaurantDtoToRestaurant(moesTavernDto);

      expect(restaurantDto).toStrictEqual(restaurant);
    });
  });

  describe("When it's called and response is not ok", () => {
    test("Then it should throw 'Error getting restaurant'", () => {
      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.get(`${apiUrl}/restaurants/${moesTavernDto._id}`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const restaurantClient = new RestaurantClient();

      const restaurant = restaurantClient.getRestaurantById(moesTavernDto._id);

      expect(restaurant).rejects.toThrow("Error getting restaurant");
    });
  });
});
