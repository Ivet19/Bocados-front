import { Provider } from "react-redux";
import { threeBroomsticks } from "../../fixtures";
import setupStore from "../../../store/setUpStore";
import type { RestaurantState } from "../../slice/types";
import { renderHook } from "@testing-library/react";
import useRestaurants from "../useRestaurants";
import { act } from "react";
import { threeBroomsticksDto } from "../../dto/fixturesDto";
import type { ModalState } from "../../../ui/uiSlice/types";

describe("Given the modifyRestaurant function of useRestaurants", () => {
  describe("When it's called with Three Broomsticks modified restaurant", () => {
    test("Then it should replace Three Broomsticks modified restaurant to the new state data", async () => {
      const expectedRestaurantName = threeBroomsticks.name;

      const initialState: {
        restaurantStateData: RestaurantState;
        modal: ModalState;
      } = {
        restaurantStateData: {
          restaurantsData: {
            restaurants: [threeBroomsticks],
            restaurantsTotal: 1,
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
        result.current.modifyRestaurant(
          threeBroomsticksDto._id,
          threeBroomsticksDto,
        );
      });

      const { restaurants } = result.current.restaurantsData;

      expect(restaurants).toContainEqual(
        expect.objectContaining({ name: expectedRestaurantName }),
      );
    });
  });
});
