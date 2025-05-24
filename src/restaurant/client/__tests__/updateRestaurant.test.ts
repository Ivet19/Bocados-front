import { http, HttpResponse } from "msw";
import { server } from "../../mocks/node";
import RestaurantClient from "../RestaurantClient";
import {
  kelpShakeDto,
  kelpShakeDtoData,
  moesTavernDto,
  moesTavernDtoData,
} from "../../dto/fixturesDto";

describe("Given the updateRestaurant method of restaurantClient", () => {
  describe("When it's called with the modified X restaurant data and id", () => {
    test("Then it should return X restaurant", async () => {
      const expectedRestaurantName = /mcbobesponja/i;
      const restaurantClient = new RestaurantClient();

      const updatedRestaurant = await restaurantClient.updateRestaurant(
        kelpShakeDto._id,
        kelpShakeDtoData,
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
        moesTavernDtoData,
      );

      expect(updatedRestaurant).rejects.toThrow(expectedErrorMessage);
    });
  });
});
