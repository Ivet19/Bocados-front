import { renderHook } from "@testing-library/react";
import { act } from "react";
import { Provider } from "react-redux";
import { threeBroomsticksData } from "../../fixtures";
import useRestaurants from "../useRestaurants";
import store from "../../../store/store";

describe("Given the createRestaurant function of useRestaurants", () => {
  describe("When it's called with Three Broomsticks restaurant", () => {
    test("Then it should add Three Broomsticks to the new state data", async () => {
      const expectedRestaurantName = threeBroomsticksData.name;
      const expectedRestaurantsTotal = 1;

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useRestaurants(), { wrapper });

      await act(() => {
        result.current.createRestaurant(threeBroomsticksData);
      });

      const { restaurants, restaurantsTotal } = result.current.restaurantsData;

      expect(restaurants).toContainEqual(
        expect.objectContaining({ name: expectedRestaurantName }),
      );
      expect(restaurantsTotal).toBe(expectedRestaurantsTotal);
    });
  });
});
