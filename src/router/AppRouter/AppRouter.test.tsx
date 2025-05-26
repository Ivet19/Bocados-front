import { render, screen } from "@testing-library/react";
import AppRouter from "./AppRouter";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Given the AppRouter component", () => {
  describe("When it renders in path /patatas", () => {
    test("Then it should show an '¡Error 404!' and a 'No se ha encontrado la página que buscas' inside a heading", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/patatas"]}>
            <AppRouter />
          </MemoryRouter>
        </Provider>,
      );

      const expectedPageTitle = await screen.findByRole("heading", {
        name: /¡error 404!/i,
      });

      const expectedPageSubtitle = await screen.findByRole("heading", {
        name: /no se ha encontrado la página que buscas/i,
      });

      expect(expectedPageTitle).toBeInTheDocument();
      expect(expectedPageSubtitle).toBeInTheDocument();
    });

    test("Then it should show a image of an exclamation symbol icon", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/patatas"]}>
            <AppRouter />
          </MemoryRouter>
        </Provider>,
      );

      const icon = await screen.findByAltText(/exclamation symbol icon/i);

      expect(icon).toBeInTheDocument();
    });
  });
});
