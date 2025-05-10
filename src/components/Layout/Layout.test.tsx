import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import "./Layout.css";
import { MemoryRouter } from "react-router";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'BOCADOS' inside a level 1 heading", () => {
      const expectedHeadingText = /b\s*ocados/i;

      render(<Layout />, { wrapper: MemoryRouter });

      const appTitle = screen.getByRole("heading", {
        name: expectedHeadingText,
        level: 1,
      });

      expect(appTitle).toBeInTheDocument();
    });

    test("Then it should show a 'Restaurants' link", () => {
      render(<Layout />, { wrapper: MemoryRouter });

      const restaurantsLink = screen.getByRole("link", {
        name: /restaurants/i,
      });

      expect(restaurantsLink).toBeVisible();
    });
  });
});
