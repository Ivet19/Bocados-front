import { Provider } from "react-redux";
import { act } from "react";
import { renderHook } from "@testing-library/react";
import setupStore from "../../../store/setUpStore";
import { moesTavern } from "../../fixtures";
import type { RestaurantState } from "../../slice/types";
import { moesTavernDto } from "../../dto/fixturesDto";
import useRestaurants from "../useRestaurants";

describe("Given the loadRestaurantById function", () => {
  describe("When it's called with Moe's Tavern id", () => {
    test("Then it should set the Moe's Tavern restaurant", async () => {
      const expectedRestaurantName = "Moe's Tavern";

      const initialState: { restaurantStateData: RestaurantState } = {
        restaurantStateData: {
          restaurantsData: {
            restaurants: [moesTavern],
            restaurantsTotal: 1,
          },
        },
      };

      const testStore = setupStore(initialState);

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={testStore}>{children}</Provider>
      );

      const { result } = renderHook(() => useRestaurants(), { wrapper });

      await act(() => {
        result.current.loadRestaurantById(moesTavernDto._id);
      });

      const restaurants = result.current.restaurantsData.restaurants;

      expect(restaurants).toContainEqual(
        expect.objectContaining({
          name: expectedRestaurantName,
        }),
      );
    });
  });
});
