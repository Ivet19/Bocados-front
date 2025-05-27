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

  describe("When it renders in path /restaurants/modify-restaurant/662a1c9d7f8b9f001a1b0011 to modify Jack Rabbit Slim's not visited restaurant", () => {
    test("Then it should show optional inputs disabled'", async () => {
      render(
        <Provider store={testStore}>
          <MemoryRouter
            initialEntries={[
              `/restaurants/modify-restaurant/${jackRabbitSlims.id}`,
            ]}
          >
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const checkBox = await screen.findByRole("checkbox", {
        name: /¿has visitado este restaurante?/i,
      });

      expect(checkBox).not.toBeChecked();

      const visitDateBox = await screen.findByLabelText(/fecha de la visita/i);
      const servingsAmountBox =
        await screen.findByLabelText(/fecha de la visita/i);
      const waitTimeBox = await screen.findByLabelText(
        /cantidad de las raciones/i,
      );
      const customerServiceBox =
        await screen.findByLabelText(/trato recibido/i);
      const priceCategoryBox = await screen.findByLabelText(/precio/i);
      const ratingBox = await screen.findByLabelText(/puntuación/i);

      expect(visitDateBox).toBeDisabled();
      expect(servingsAmountBox).toBeDisabled();
      expect(waitTimeBox).toBeDisabled();
      expect(customerServiceBox).toBeDisabled();
      expect(priceCategoryBox).toBeDisabled();
      expect(ratingBox).toBeDisabled();
    });
  });
});
