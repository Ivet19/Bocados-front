import { act, renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import useRestaurants from "../useRestaurants";
import { pizzaPlanet } from "../../fixtures";
import type { RestaurantState } from "../../slice/types";
import { pizzaPlanetDto } from "../../dto/fixturesDto";
import setupStore from "../../../store/setUpStore";
import type { ModalState } from "../../../ui/slices/types";

describe("Given the removeRestaurant function", () => {
  describe("When it's called with Pizza Planet restaurant id", () => {
    test("Then it should delete Pizza Planet restaurant", async () => {
      const expectedDeletedRestaurantName = "Moe's Tavern";
      const expectedRestaurantsTotal = 5;

      const initialState: {
        restaurantStateData: RestaurantState;
        modal: ModalState;
      } = {
        restaurantStateData: {
          restaurantsData: {
            restaurants: [pizzaPlanet],
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
        result.current.removeRestaurant(pizzaPlanetDto._id);
      });

      const restaurants = result.current.restaurantsData.restaurants;
      const restaurantsTotal = result.current.restaurantsData.restaurantsTotal;

      expect(restaurants).not.toContainEqual(
        expect.objectContaining({
          name: expectedDeletedRestaurantName,
        }),
      );

      expect(restaurantsTotal).toBe(expectedRestaurantsTotal);
    });
  });
});
