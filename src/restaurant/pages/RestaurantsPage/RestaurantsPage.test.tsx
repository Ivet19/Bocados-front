import { render, screen } from "@testing-library/react";
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
  });
});
