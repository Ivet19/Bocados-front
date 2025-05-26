import { render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import RestaurantsPage from "./RestaurantsPage";
import store from "../../../store/store";
import {
  gusteaus,
  jackRabbitSlims,
  kelpShake,
  leakyCauldron,
  pizzaPlanet,
} from "../../fixtures";
import userEvent from "@testing-library/user-event";
import { jackRabbitSlimsDto } from "../../dto/fixturesDto";

describe("Given the RestaurantsPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Lista de restaurantes' inside a heading", async () => {
      render(
        <Provider store={store}>
          <RestaurantsPage />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const pageTitle = await screen.findByRole("heading", {
        name: /lista de restaurantes/i,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    describe("When it renders in /restaurants", () => {
      test("Then it should show Jack Rabbit Slim's, Gusteau's, The Leaky Cauldron, Pizza Planet and Kelp Shake inside a heading", async () => {
        const expectedTitles = [
          jackRabbitSlims.name,
          gusteaus.name,
          leakyCauldron.name,
          pizzaPlanet.name,
          kelpShake.name,
        ];

        render(
          <Provider store={store}>
            <RestaurantsPage />
          </Provider>,
          { wrapper: MemoryRouter },
        );

        expectedTitles.forEach((title) => {
          expect(screen.getByText(title)).toBeInTheDocument();
        });
      });
    });

    describe("And the user clicks the 'marcar como visitado' button in not visited Jack Rabbit Slim's restaurant", () => {
      test("Then it should show a 'marcar como no visitado' button", async () => {
        render(
          <Provider store={store}>
            <RestaurantsPage />
          </Provider>,
          { wrapper: MemoryRouter },
        );

        const restaurantName = await screen.findByRole("heading", {
          name: new RegExp(jackRabbitSlims.name, "i"),
        });

        expect(restaurantName).toBeInTheDocument();

        const restaurantCard = restaurantName.closest("article");

        const actualCheckButton = await within(restaurantCard!).findByLabelText(
          new RegExp("marcar como visitado", "i"),
        );

        await userEvent.click(actualCheckButton);

        const newCheckButton = await within(restaurantCard!).findByLabelText(
          new RegExp("marcar como no visitado", "i"),
        );

        expect(newCheckButton).toBeInTheDocument();
      });
    });

    describe("And the user clicks the delete button with a trash icon inside in Jack Rabbit Slim's restaurant", () => {
      test("Then it should delete Jack Rabbit Slim's restaurant and not show it anymore", async () => {
        render(
          <Provider store={store}>
            <RestaurantsPage />
          </Provider>,
          { wrapper: MemoryRouter },
        );

        const restaurantName = await screen.findByRole("heading", {
          name: new RegExp(jackRabbitSlimsDto.name, "i"),
        });

        const restaurantCard = restaurantName.closest("article");

        const deleteButton = await within(restaurantCard!).findByLabelText(
          /borrar restaurante/i,
        );

        await userEvent.click(deleteButton);

        const deletedRestaurantName = await screen.queryByRole("heading", {
          name: new RegExp(jackRabbitSlimsDto.name, "i"),
        });

        expect(deletedRestaurantName).not.toBeInTheDocument();
      });
    });
  });
});
