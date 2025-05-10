import { render, screen } from "@testing-library/react";
import AppRouter from "./AppRouter";
import { MemoryRouter } from "react-router";

describe("Given the AppRouter component", () => {
  describe("When it renders in path /patatas", () => {
    test("Then it should show an '¡Error 404!' and a 'No se ha encontrado la página que buscas' inside a heading", () => {
      render(
        <MemoryRouter initialEntries={["/mangas"]}>
          <AppRouter />,
        </MemoryRouter>,
      );

      const expectedPageTitle = screen.getByRole("heading", {
        name: /¡error 404!/i,
      });

      const expectedPageSubtitle = screen.getByRole("heading", {
        name: /no se ha encontrado la página que buscas/i,
      });

      expect(expectedPageTitle).toBeVisible();
      expect(expectedPageSubtitle).toBeVisible();
    });

    test("Then it should show a image of an exclamation symbol icon", () => {
      render(
        <MemoryRouter initialEntries={["/mangas"]}>
          <AppRouter />,
        </MemoryRouter>,
      );

      const icon = screen.getByAltText(/exclamation symbol icon/i);

      expect(icon).toBeVisible();
    });
  });
});
