import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given the Loading component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Cargando información...' inside a heading", () => {
      const expectedTitle = /cargando información.../i;

      render(<Loading />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show an image 'un hombre aburrido esperando sentado a que le llegue la comida'", () => {
      const expectedImageAlt =
        "un hombre aburrido esperando sentado a que le llegue la comida";

      render(<Loading />);

      const loadingImage = screen.getByAltText(expectedImageAlt);

      expect(loadingImage).toBeInTheDocument();
    });
  });
});
