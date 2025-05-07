import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import "./Layout.css";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'OCADOS' inside a level 1 heading", () => {
      const expectedHeadingText = /ocados/i;

      render(<Layout />);

      const appTitle = screen.getByRole("heading", {
        name: expectedHeadingText,
        level: 1,
      });

      expect(appTitle).toBeInTheDocument();
    });

    test("Then it should show an image of 'Logo de la aplicación 'Bocados' que representa una B con la silueta de la Sagrada Familia dentro y que tiene un bocado en la parte superior derecha'", () => {
      const expectedImageAlt =
        /logo de la aplicación 'bocados' que representa una b con la silueta de la sagrada familia dentro y que tiene un bocado en la parte superior derecha/i;

      render(<Layout />);

      const titleImage = screen.getByAltText(expectedImageAlt);

      expect(titleImage).toBeInTheDocument();
    });

    test("Then it should show the full title 'BOCADOS'", () => {
      render(<Layout />);

      const appTitle = screen.getByLabelText(/bocados/i);

      expect(appTitle).toBeInTheDocument();
    });
  });
});
