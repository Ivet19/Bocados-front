import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import "./Layout.css";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'BOCADOS' inside a level 1 heading", () => {
      const expectedHeadingText = /b\s*ocados/i;

      render(<Layout />);

      const appTitle = screen.getByRole("heading", {
        name: expectedHeadingText,
        level: 1,
      });

      expect(appTitle).toBeInTheDocument();
    });
  });
});
