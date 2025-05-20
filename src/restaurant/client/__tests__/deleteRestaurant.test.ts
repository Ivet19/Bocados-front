import { http, HttpResponse } from "msw";
import { server } from "../../mocks/node";
import RestaurantClient from "../RestaurantClient";
import { mapRestaurantDtoToRestaurant } from "../../dto/mappers";
import { threeBroomsticksDto } from "../../fixtures";

describe("Given the deleteRestaurant method of RestaurantClient", () => {
  describe("When it's called with The Three Broomsticks restaurant id", () => {
    test("Then it should return The Three Broomsticks restaurant", async () => {
      const restaurantClient = new RestaurantClient();

      const deletedRestaurantDto = await restaurantClient.deleteRestaurant(
        threeBroomsticksDto._id,
      );

      const restaurant = mapRestaurantDtoToRestaurant(threeBroomsticksDto);

      expect(deletedRestaurantDto).toStrictEqual(restaurant);
    });
  });

  describe("When it's called and response is not ok", () => {
    test("Then it should throw 'Error deleting restaurant'", () => {
      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.delete(`${apiUrl}/restaurants/${threeBroomsticksDto._id}`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const restaurantClient = new RestaurantClient();

      const deletedRestaurant = restaurantClient.deleteRestaurant(
        threeBroomsticksDto._id,
      );

      expect(deletedRestaurant).rejects.toThrow("Error deleting restaurant");
    });
  });
});
