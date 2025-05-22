import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import RestaurantForm from "./RestaurantForm";
import store from "../../../store/store";

const user = userEvent.setup();

describe("Given the RestaurantForm component", () => {
  const action = vitest.fn();

  beforeEach(() => {
    action.mockClear();
  });

  describe("When it renders", () => {
    test("Then it should show a 'Nombre' text box", () => {
      const expectedTextboxName = /nombre/i;
      render(
        <Provider store={store}>
          <RestaurantForm action={action} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const nameTextBox = screen.getByLabelText(expectedTextboxName);

      expect(nameTextBox).toBeVisible();
    });

    test("Then it should show a a star icon image", async () => {
      const expectedImageAlt = /star icon/i;

      render(
        <Provider store={store}>
          <RestaurantForm action={action} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const starIcon = await screen.findByAltText(expectedImageAlt);

      expect(starIcon).toBeVisible();
    });

    test("Then it should show a 'Añadir' inside a disabled button", () => {
      const expectedButtonName = /añadir/i;
      render(
        <Provider store={store}>
          <RestaurantForm action={action} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const submitButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      expect(submitButton).toBeVisible();
      expect(submitButton).toBeDisabled();
    });

    describe("And the user types 'Bernie's' in Name text box", () => {
      test("Then it should show 'Bernie's' in Name text box", async () => {
        const restaurantName = "Bernie's";
        const expectedTextboxName = /nombre/i;
        render(
          <Provider store={store}>
            <RestaurantForm action={action} />
          </Provider>,
          { wrapper: MemoryRouter },
        );

        const nameTextBox = screen.getByLabelText(expectedTextboxName);

        await user.type(nameTextBox, restaurantName);

        expect(nameTextBox).toHaveValue(restaurantName);
      });
    });

    describe("And the user types '2021-03-12' in 'Fecha de la visita' text box", () => {
      test("Then it should show '2021-03-12' in 'Fecha de la visita' text box", async () => {
        const visitDate = "2021-03-12";
        const expectedTextboxName = /fecha de la visita/i;

        render(
          <Provider store={store}>
            <RestaurantForm action={action} />
          </Provider>,
          { wrapper: MemoryRouter },
        );

        const checkBox = screen.getByLabelText(
          /¿has visitado este restaurante?/i,
        );

        await user.click(checkBox);

        const visitDateBox = screen.getByLabelText(expectedTextboxName);

        await user.type(visitDateBox, visitDate);

        expect(visitDateBox).toHaveValue(visitDate);
      });
    });

    describe("And the user selects the checkbox", () => {
      test("Then it should show all the optional fields enabled", async () => {
        render(
          <Provider store={store}>
            <RestaurantForm action={action} />
          </Provider>,
          { wrapper: MemoryRouter },
        );

        const checkBox = screen.getByLabelText(
          /¿has visitado este restaurante?/i,
        );
        const visitDateBox = screen.getByLabelText(/fecha de la visita/i);
        const servingsAmountBox = screen.getByLabelText(/fecha de la visita/i);
        const waitTimeBox = screen.getByLabelText(/cantidad de las raciones/i);
        const customerServiceBox = screen.getByLabelText(/trato recibido/i);
        const priceCategoryBox = screen.getByLabelText(/precio/i);

        await user.click(checkBox);

        expect(visitDateBox).toBeEnabled();
        expect(servingsAmountBox).toBeEnabled();
        expect(waitTimeBox).toBeEnabled();
        expect(customerServiceBox).toBeEnabled();
        expect(priceCategoryBox).toBeEnabled();
      });
    });

    describe("And the user fills all the required inputs", () => {
      test("Then it should show an enabled 'Añadir' button", async () => {
        render(
          <Provider store={store}>
            <RestaurantForm action={action} />
          </Provider>,
          { wrapper: MemoryRouter },
        );

        const nameTextBox = screen.getByLabelText(/nombre/i);
        const adressTextBox = screen.getByLabelText(/dirección/i);
        const foodTypeTextBox = screen.getByLabelText(/tipo de comida/i);
        const imageUrlTextBox = screen.getByLabelText(/link url de la imagen/i);
        const descriptionTextBox = screen.getByLabelText(/descripción/i);

        await user.type(nameTextBox, "Bernie's");
        await user.type(adressTextBox, "New York");
        await user.type(imageUrlTextBox, "https://www.google.com/");
        await user.type(foodTypeTextBox, "Fried chicken");
        await user.type(descriptionTextBox, "I'ts delicious");

        const submitButton = screen.getByRole("button", {
          name: /añadir/i,
        });

        expect(submitButton).toBeEnabled();
      });
    });

    describe("And the user clicks on 'Añadir' button", () => {
      test("Then it should call the button action", async () => {
        render(
          <Provider store={store}>
            <RestaurantForm action={action} />
          </Provider>,
          { wrapper: MemoryRouter },
        );

        const nameTextBox = screen.getByLabelText(/nombre/i);
        const adressTextBox = screen.getByLabelText(/dirección/i);
        const foodTypeTextBox = screen.getByLabelText(/tipo de comida/i);
        const imageUrlTextBox = screen.getByLabelText(/link url de la imagen/i);
        const descriptionTextBox = screen.getByLabelText(/descripción/i);
        const checkBox = screen.getByLabelText(
          /¿has visitado este restaurante?/i,
        );

        await user.type(nameTextBox, "Bernie's");
        await user.type(adressTextBox, "New York");
        await user.type(imageUrlTextBox, "https://www.google.com/");
        await user.type(foodTypeTextBox, "Fried chicken");
        await user.type(descriptionTextBox, "I'ts delicious");
        await user.click(checkBox);

        const submitButton = screen.getByRole("button", {
          name: /añadir/i,
        });

        await user.click(submitButton);

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
