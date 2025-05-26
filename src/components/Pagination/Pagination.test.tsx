import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Pagination from "./Pagination";
import { moviesRestaurants } from "../../restaurant/fixtures";

describe("Given the Pagination component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Anterior' and '>' Siguiente", () => {
      render(
        <Pagination
          restaurantsTotal={moviesRestaurants.length}
          currentPage={1}
        />,
        { wrapper: MemoryRouter },
      );

      const previousLink = screen.getByRole("link", { name: /anterior/i });
      const nextLink = screen.getByRole("link", { name: /siguiente/i });

      expect(previousLink).toBeInTheDocument();
      expect(nextLink).toBeInTheDocument();
    });
  });
});
