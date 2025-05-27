import { http, HttpResponse } from "msw";
import { server } from "../../mocks/node";
import RestaurantClient from "../RestaurantClient";
import { kelpShakeDto, moesTavernDto } from "../../dto/fixturesDto";

describe("Given the updateRestaurant method of restaurantClient", () => {
  describe("When it's called with the modified Kelp Shake restaurant and its id", () => {
    test("Then it should return Kelp Shake modified restaurant", async () => {
      const expectedRestaurantName = /mcbobesponja/i;
      const restaurantClient = new RestaurantClient();

      const updatedRestaurant = await restaurantClient.updateRestaurant(
        kelpShakeDto._id,
        kelpShakeDto,
      );

      expect(updatedRestaurant).toMatchObject({ name: expectedRestaurantName });
    });
  });

  describe("When it's called and response is not ok", () => {
    test("Then it should throw 'Error updating restaurant' error message", () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      const expectedErrorMessage = "Error updating restaurant";

      const fetchUrl = `${apiUrl}/restaurants/modify-restaurant/${moesTavernDto._id}`;

      server.use(
        http.put(fetchUrl, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const restaurantClient = new RestaurantClient();

      const updatedRestaurant = restaurantClient.updateRestaurant(
        moesTavernDto._id,
        moesTavernDto,
      );

      expect(updatedRestaurant).rejects.toThrow(expectedErrorMessage);
    });
  });
});
