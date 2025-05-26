import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import RestaurantForm from "./RestaurantForm";
import store from "../../../store/store";
import type { RestaurantData } from "../../types";
import { threeBroomsticks, threeBroomsticksData } from "../../fixtures";

const user = userEvent.setup();

describe("Given the RestaurantForm component", () => {
  const action = vitest.fn();

  beforeEach(() => {
    action.mockClear();
  });

  describe("When it renders", () => {
    const initialRestaurantData: RestaurantData = {
      name: "",
      adress: "",
      foodType: "",
      imageUrl: "",
      description: "",
      isVisited: false,
      servingsAmount: undefined,
      waitTime: undefined,
      customerService: undefined,
      priceCategory: undefined,
      rating: undefined,
      visitDate: "",
    };

    test("Then it should show 'Completa los siguientes campos para añadir un nuevo restaurante' inside a heading", async () => {
      render(
        <Provider store={store}>
          <RestaurantForm
            addAction={action}
            initialRestaurantData={initialRestaurantData}
          />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const formTitle = await screen.findByRole("heading", {
        name: /completa los siguientes campos para añadir un nuevo restaurante/i,
      });

      expect(formTitle).toBeInTheDocument();
    });

    test("Then it should show a 'Nombre' text box", () => {
      const expectedTextboxName = /nombre/i;
      render(
        <Provider store={store}>
          <RestaurantForm
            addAction={action}
            initialRestaurantData={initialRestaurantData}
          />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const nameTextBox = screen.getByLabelText(expectedTextboxName);

      expect(nameTextBox).toBeInTheDocument();
    });

    test("Then it should show a a star icon image", async () => {
      const expectedImageAlt = /star icon/i;

      render(
        <Provider store={store}>
          <RestaurantForm
            addAction={action}
            initialRestaurantData={initialRestaurantData}
          />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const starIcon = await screen.findByAltText(expectedImageAlt);

      expect(starIcon).toBeInTheDocument();
    });

    test("Then it should show a 'Añadir' inside a disabled button", () => {
      const expectedButtonName = /añadir/i;
      render(
        <Provider store={store}>
          <RestaurantForm
            addAction={action}
            initialRestaurantData={initialRestaurantData}
          />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const submitButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
    });

    describe("And the user types 'Bernie's' in Name text box", () => {
      test("Then it should show 'Bernie's' in Name text box", async () => {
        const restaurantName = "Bernie's";
        const expectedTextboxName = /nombre/i;
        render(
          <Provider store={store}>
            <RestaurantForm
              addAction={action}
              initialRestaurantData={initialRestaurantData}
            />
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
            <RestaurantForm
              addAction={action}
              initialRestaurantData={initialRestaurantData}
            />
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
            <RestaurantForm
              addAction={action}
              initialRestaurantData={initialRestaurantData}
            />
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
            <RestaurantForm
              addAction={action}
              initialRestaurantData={initialRestaurantData}
            />
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
            <RestaurantForm
              addAction={action}
              initialRestaurantData={initialRestaurantData}
            />
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

  describe("When it receives a modify action, a 662a1c9d7f8b9f001a1b0015 id and Three Broomsticks restaurant's data", () => {
    const restaurantId = "662a1c9d7f8b9f001a1b0015";

    const restaurantToModify = threeBroomsticksData;

    const initialRestaurantToModifyData: RestaurantData = {
      name: restaurantToModify.name ?? "",
      adress: restaurantToModify.adress ?? "",
      foodType: restaurantToModify.foodType ?? "",
      imageUrl: restaurantToModify.imageUrl ?? "",
      description: restaurantToModify.description ?? "",
      isVisited: restaurantToModify.isVisited ?? false,
      servingsAmount: restaurantToModify.servingsAmount ?? undefined,
      waitTime: restaurantToModify.waitTime ?? undefined,
      customerService: restaurantToModify.customerService ?? undefined,
      priceCategory: restaurantToModify.priceCategory ?? undefined,
      rating: restaurantToModify.rating ?? undefined,
      visitDate: restaurantToModify.visitDate ?? "",
    };

    test("Then it should show an enabled 'Guardar' button", async () => {
      render(
        <Provider store={store}>
          <RestaurantForm
            modifyAction={action}
            restaurantToModify={threeBroomsticks}
            restaurantId={restaurantId}
            initialRestaurantData={initialRestaurantToModifyData}
          />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const nameTextBox = screen.getByLabelText(/nombre/i);
      const adressTextBox = screen.getByLabelText(/dirección/i);
      const foodTypeTextBox = screen.getByLabelText(/tipo de comida/i);
      const imageUrlTextBox = screen.getByLabelText(/link url de la imagen/i);
      const descriptionTextBox = screen.getByLabelText(/descripción/i);

      await user.type(nameTextBox, "The Three Broomsticks");
      await user.type(adressTextBox, "Hogsmeade, Escocia");
      await user.type(imageUrlTextBox, "https://www.google.com/");
      await user.type(foodTypeTextBox, "Tavern / mágica");
      await user.type(
        descriptionTextBox,
        "Taberna mágica del universo 'Harry Potter'",
      );

      const submitButton = screen.getByRole("button", {
        name: /guardar/i,
      });

      expect(submitButton).toBeEnabled();
    });

    test("Then it should show 'A continuación puedes modificar los datos de The Three Broomsticks' inside a heading", async () => {
      render(
        <Provider store={store}>
          <RestaurantForm
            modifyAction={action}
            restaurantToModify={threeBroomsticks}
            restaurantId={restaurantId}
            initialRestaurantData={initialRestaurantToModifyData}
          />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const formTitle = await screen.findByRole("heading", {
        name: /a continuación puedes modificar los datos de the three broomsticks/i,
      });

      expect(formTitle).toBeInTheDocument();
    });
  });
});
