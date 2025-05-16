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

      expect(pageTitle).toBeVisible();
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

    describe("And the user clicks the button with grey check icon in not visited Jack Rabbit Slim's restaurant", () => {
      test("Then it should show a button with a green check icon", async () => {
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

        const actualCheckButton = await within(restaurantCard!).findByAltText(
          new RegExp("grey check icon", "i"),
        );

        await userEvent.click(actualCheckButton);

        const newCheckButton = await within(restaurantCard!).findByAltText(
          new RegExp("green check icon", "i"),
        );

        expect(newCheckButton).toBeInTheDocument();
      });
    });
  });
});
