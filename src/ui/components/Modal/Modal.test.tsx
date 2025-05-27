import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

beforeEach(() => {
  vitest.clearAllMocks();
});

describe("Given the Modal component", () => {
  describe("When it receives 'Hotel added successfully' and an action", () => {
    const action = vitest.fn();
    const modalText = "Hotel added successfully";

    test("Then it show 'Hotel added successfully'", () => {
      render(<Modal action={action} isSuccess={true} text={modalText} />);

      const modal = screen.getByText(modalText);

      expect(modal).toBeInTheDocument();
    });

    test("Then it should show a closing button", () => {
      const closingButton = /cerrar mensaje/i;

      render(<Modal action={action} isSuccess={true} text={modalText} />);

      const modalButton = screen.getByLabelText(closingButton);

      expect(modalButton).toBeInTheDocument();
    });

    describe("And the user clicks the 'cerrar mensaje' button", () => {
      test("Then it should call the received action", async () => {
        const closingButton = /cerrar mensaje/i;

        render(<Modal action={action} isSuccess={true} text={modalText} />);

        const modalButton = await screen.findByRole("button", {
          name: closingButton,
        });

        expect(modalButton).toBeInTheDocument();

        await userEvent.click(modalButton);

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
