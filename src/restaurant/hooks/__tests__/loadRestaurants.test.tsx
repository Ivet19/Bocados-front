import { renderHook } from "@testing-library/react";
import { act } from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import useRestaurants from "../useRestaurants";

describe("Given the loadRestaurants function", () => {
  describe("When it's called with page number 2", () => {
    test("Then it should set the restaurant Moe's Tavern and a total of 6 restaurants", async () => {
      const expectedRestaurantName = "Moe's Tavern";
      const expectedRestaurantsTotal = 6;

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useRestaurants(), { wrapper });

      await act(() => {
        result.current.loadRestaurants(2);
      });

      const restaurants = result.current.restaurants.restaurants;
      const restaurantsTotal = result.current.restaurants.restaurantsTotal;

      expect(restaurants).toContainEqual(
        expect.objectContaining({
          name: expectedRestaurantName,
        }),
      );

      expect(restaurantsTotal).toBe(expectedRestaurantsTotal);
    });
  });
});
