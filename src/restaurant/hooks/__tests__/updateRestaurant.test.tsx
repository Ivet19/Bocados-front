import { Provider } from "react-redux";
import { renderHook } from "@testing-library/react";
import { act } from "react";
import useRestaurants from "../useRestaurants";
import { jackRabbitSlims, visitedJackRabbitSlims } from "../../fixtures";
import setupStore from "../../../store/setUpStore";
import type { RestaurantState } from "../../slice/types";

describe("Given the updateRestaurantById function", () => {
  describe("When it's called with not visited Jack Rabbit Slim's restaurant id", () => {
    test("Then it should return Jack Rabbit's Slim's restaurant as visited", async () => {
      const initialState: { restaurantStateData: RestaurantState } = {
        restaurantStateData: {
          restaurantsData: {
            restaurants: [jackRabbitSlims],
            restaurantsTotal: 1,
          },
          isLoading: false,
        },
      };

      const testStore = setupStore(initialState);

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={testStore}>{children}</Provider>
      );

      const { result } = renderHook(() => useRestaurants(), { wrapper });

      await act(() => {
        result.current.updateRestaurant(jackRabbitSlims.id);
      });

      const restaurants = result.current.restaurantsData.restaurants;

      expect(restaurants).toContainEqual(
        expect.objectContaining({
          name: visitedJackRabbitSlims.name,
          isVisited: true,
        }),
      );
    });
  });
});
