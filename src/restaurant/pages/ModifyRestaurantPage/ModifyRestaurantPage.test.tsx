import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { jackRabbitSlims, moesTavern } from "../../fixtures";
import type { RestaurantState } from "../../slice/types";
import setupStore from "../../../store/setUpStore";
import AppTestRouter from "../../../router/AppTestRouter/AppTestRouter";

window.scrollTo = vitest.fn();

describe("Given the ModifyRestaurantPage component", () => {
  const initialState: { restaurantStateData: RestaurantState } = {
    restaurantStateData: {
      restaurantsData: {
        restaurants: [moesTavern, jackRabbitSlims],
        restaurantsTotal: 2,
      },
    },
  };

  const testStore = setupStore(initialState);
  describe("When it renders in path /restaurants/modify-restaurant/662a1c9d7f8b9f001a1b0017", () => {
    test("Then it should show 'Modificar restaurante' inside a heading", () => {
      const expectedPageTitle = /modificar restaurante/i;
      render(
        <MemoryRouter
          initialEntries={[`/restaurants/modify-restaurant/${moesTavern.id}`]}
        >
          <Provider store={testStore}>
            <AppTestRouter />
          </Provider>
        </MemoryRouter>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show 'A continuación puedes modificar los datos de Moe's Tavern'", async () => {
      const expectedPageTitle =
        /a continuación puedes modificar los datos de moe's tavern/i;

      render(
        <MemoryRouter
          initialEntries={[`/restaurants/modify-restaurant/${moesTavern.id}`]}
        >
          <Provider store={testStore}>
            <AppTestRouter />
          </Provider>
        </MemoryRouter>,
      );

      const pageTitle = await screen.findByRole("heading", {
        name: expectedPageTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });

  describe("When it renders in path /restaurants/modify-restaurant/662a1c9d7f8b9f001a1b0011", () => {
    test("Then it should show 'A continuación puedes modificar los datos de Jack Rabbit Slim's'", async () => {
      const expectedFormTitle =
        /a continuación puedes modificar los datos de jack rabbit slim's/i;

      render(
        <MemoryRouter
          initialEntries={[
            `/restaurants/modify-restaurant/${jackRabbitSlims.id}`,
          ]}
        >
          <Provider store={testStore}>
            <AppTestRouter />
          </Provider>
        </MemoryRouter>,
      );

      const pageTitle = await screen.findByRole("heading", {
        name: expectedFormTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
