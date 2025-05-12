import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should show an '¡Error 404!' and a 'No se ha encontrado la página que buscas' inside a heading", () => {
      render(<NotFoundPage />);

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
      render(<NotFoundPage />);

      const icon = screen.getByAltText(/exclamation symbol icon/i);

      expect(icon).toBeVisible();
    });
  });
});
