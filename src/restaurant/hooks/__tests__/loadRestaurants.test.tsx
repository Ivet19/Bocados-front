import { renderHook } from "@testing-library/react";
import { act } from "react";
import { Provider } from "react-redux";
import useRestaurants from "../useRestaurants";
import { moesTavern } from "../../fixtures";
import type { RestaurantState } from "../../slice/types";
import setupStore from "../../../store/setUpStore";
import type { ModalState } from "../../../ui/uiSlice/types";

describe("Given the loadRestaurants function", () => {
  describe("When it's called with page number 2", () => {
    test("Then it should set the restaurant Moe's Tavern and a total of 6 restaurants", async () => {
      const expectedRestaurantName = "Moe's Tavern";
      const expectedRestaurantsTotal = 6;

      const initialState: {
        restaurantStateData: RestaurantState;
        modal: ModalState;
      } = {
        restaurantStateData: {
          restaurantsData: {
            restaurants: [moesTavern],
            restaurantsTotal: 6,
          },
        },
        modal: {
          isSuccess: true,
          isOpen: false,
          modalText: "",
        },
      };

      const testStore = setupStore(initialState);

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={testStore}>{children}</Provider>
      );

      const { result } = renderHook(() => useRestaurants(), { wrapper });

      await act(() => {
        result.current.loadRestaurants(2);
      });

      const restaurants = result.current.restaurantsData.restaurants;
      const restaurantsTotal = result.current.restaurantsData.restaurantsTotal;

      expect(restaurants).toContainEqual(
        expect.objectContaining({
          name: expectedRestaurantName,
        }),
      );

      expect(restaurantsTotal).toBe(expectedRestaurantsTotal);
    });
  });
});
