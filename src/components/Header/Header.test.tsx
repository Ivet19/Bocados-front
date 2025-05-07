import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'BOCADOS' inside a level 1 heading", () => {
      const expectedHeadingText = /b\s*ocados/i;

      render(<Header />);

      const appTitle = screen.getByRole("heading", {
        name: expectedHeadingText,
        level: 1,
      });

      expect(appTitle).toBeInTheDocument();
    });
  });
});
