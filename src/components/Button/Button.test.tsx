import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given the Button component", () => {
  const expectedText = "Play";

  describe("When it receives 'Play' and an action", () => {
    test("Then it should show a 'Play' button", () => {
      render(
        <Button action={() => {}} classModifierName="start">
          Play
        </Button>,
      );

      const buttonElement = screen.getByRole("button", {
        name: new RegExp(expectedText, "i"),
      });

      expect(buttonElement).toBeVisible();
    });

    describe("And the user clicks the 'Play' button", () => {
      test("Then it should call the action", async () => {
        const action = vitest.fn();

        render(
          <Button action={() => action()} classModifierName="start">
            Play
          </Button>,
        );

        const buttonElement = screen.getByRole("button", {
          name: new RegExp(expectedText, "i"),
        });

        await userEvent.click(buttonElement);

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
