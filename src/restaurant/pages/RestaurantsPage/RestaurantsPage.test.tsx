import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import RestaurantsPage from "./RestaurantsPage";
import store from "../../../store/store";

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
  });
});
