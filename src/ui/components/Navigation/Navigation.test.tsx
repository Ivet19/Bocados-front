import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Restaurantes' link", () => {
      render(<Navigation />, { wrapper: MemoryRouter });

      const restaurantsLink = screen.getByRole("link", {
        name: /restaurantes/i,
      });

      expect(restaurantsLink).toBeInTheDocument();
    });

    test("Then it should show an 'Añadir restaurante' link", () => {
      render(<Navigation />, { wrapper: MemoryRouter });

      const addRestaurantLink = screen.getByRole("link", {
        name: /añadir restaurante/i,
      });

      expect(addRestaurantLink).toBeInTheDocument();
    });
  });
});
