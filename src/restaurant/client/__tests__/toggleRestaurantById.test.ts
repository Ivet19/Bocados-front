import { http, HttpResponse } from "msw";
import { jackRabbitSlims } from "../../fixtures";
import { server } from "../../mocks/node";
import RestaurantsClient from "../RestaurantClient";

describe("Given the toggleRestaurantById method of RestaurantClient", () => {
  describe("When it's called with restaurant id", () => {
    test("Then it should return restaurant as visited", async () => {
      const restaurantsClient = new RestaurantsClient();

      const restaurant = await restaurantsClient.toggleRestaurantById(
        jackRabbitSlims.id,
      );

      expect(restaurant.isVisited).toBe(true);
    });
  });

  describe("When it's called and the response is not ok", () => {
    test("Then it should throw 'Error updating restaurant'", () => {
      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.patch(
          `${apiUrl}/restaurants/visit-restaurant/662a1c9d7f8b9f001a1b0011`,
          () => {
            return new HttpResponse(null, { status: 500 });
          },
        ),
      );

      const restaurantClient = new RestaurantsClient();

      const restaurant = restaurantClient.toggleRestaurantById(
        jackRabbitSlims.id,
      );

      expect(restaurant).rejects.toThrow("Error updating restaurant");
    });
  });
});
