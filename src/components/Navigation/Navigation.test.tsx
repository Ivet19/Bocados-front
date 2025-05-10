import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Restaurants' link", () => {
      render(<Navigation />, { wrapper: MemoryRouter });

      const restaurantsLink = screen.getByRole("link", {
        name: /restaurants/i,
      });

      expect(restaurantsLink).toBeVisible();
    });
  });
});
