import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import AddRestaurantPage from "./AddRestaurantPage";
import store from "../../../store/store";

describe("Given the AddRestaurantPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Añadir restaurante' inside a heading", () => {
      const expectedPageTitle = /añadir restaurante/i;
      render(
        <Provider store={store}>
          <AddRestaurantPage />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
