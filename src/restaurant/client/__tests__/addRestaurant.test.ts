import { http, HttpResponse } from "msw";
import { mapRestaurantDtoToRestaurant } from "../../dto/mappers";
import { server } from "../../mocks/node";
import RestaurantClient from "../RestaurantClient";
import { threeBroomsticksData } from "../../fixtures";
import { threeBroomsticksDto } from "../../dto/fixturesDto";

describe("Given the addRestaurant method of RestaurantClient", () => {
  describe("When it's called with Three Broomsticks restaurant data", () => {
    test("Then it should return Three Broomsticks restaurant", async () => {
      const restaurantClient = new RestaurantClient();

      const newRestaurant =
        await restaurantClient.addRestaurant(threeBroomsticksData);

      const restaurant = mapRestaurantDtoToRestaurant(threeBroomsticksDto);

      expect(newRestaurant).toStrictEqual(restaurant);
    });
  });

  describe("When it's called and there's no response or it's not ok", () => {
    test("Then it should throw 'Error adding the new restaurant'", async () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      const fetchUrl = `${apiUrl}/restaurants`;

      server.use(
        http.post(fetchUrl, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const restaurantClient = new RestaurantClient();

      const newRestaurant =
        restaurantClient.addRestaurant(threeBroomsticksData);

      expect(newRestaurant).rejects.toThrow("Error adding the new restaurant");
    });
  });
});
