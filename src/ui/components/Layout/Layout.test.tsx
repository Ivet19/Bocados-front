import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import Layout from "./Layout";
import store from "../../../store/store";
import AppTestRouter from "../../../router/AppTestRouter/AppTestRouter";
import { jackRabbitSlims, kelpShake } from "../../../restaurant/fixtures";
import { jackRabbitSlimsDto } from "../../../restaurant/dto/fixturesDto";
import type { RestaurantState } from "../../../restaurant/slice/types";
import setupStore from "../../../store/setUpStore";
import "./Layout.css";

window.scrollTo = vitest.fn();
const user = userEvent.setup();

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'BOCADOS' inside a level 1 heading", () => {
      const expectedTitle = /bocados/i;

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <Layout />
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const appTitle = screen.getByRole("heading", {
        name: expectedTitle,
        level: 1,
      });

      expect(appTitle).toBeInTheDocument();
    });

    test("Then it should show a 'Restaurantes' and 'Añadir restaurante' links", () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <Layout />
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const restaurantsLink = screen.getByRole("link", {
        name: /restaurantes/i,
      });

      const addRestaurantLink = screen.getByRole("link", {
        name: /añadir restaurante/i,
      });

      expect(restaurantsLink).toBeInTheDocument();
      expect(addRestaurantLink).toBeInTheDocument();
    });

    describe("And the user clicks the link 'restaurantes", () => {
      test("Then it should show 'Lista de restaurantes' inside a heading", async () => {
        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={["/"]}>
              <Layout />
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const restaurantsLink = screen.getByRole("link", {
          name: /restaurantes/i,
        });

        await userEvent.click(restaurantsLink);

        const expectedTitle = screen.getByRole("heading", {
          name: /lista de restaurantes/i,
        });

        expect(expectedTitle).toBeInTheDocument();
      });
    });

    describe("And the user clicks the link 'añadir restaurante'", () => {
      test("Then it should show 'Añadir restaurante' inside a heading", async () => {
        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={["/restaurants"]}>
              <Layout />
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const restaurantsLink = screen.getByRole("link", {
          name: /añadir restaurante/i,
        });

        await userEvent.click(restaurantsLink);

        const expectedTitle = screen.getByRole("heading", {
          name: /añadir restaurante/i,
        });

        expect(expectedTitle).toBeInTheDocument();
      });
    });
  });

  describe("When it renders in path /restaurants", () => {
    describe("And the user clicks 'ver más' link in Jack Rabbit Slim's", () => {
      test("Then it should show Jack Rabbit Slim's restaurant description", async () => {
        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={["/restaurants"]}>
              <Layout />
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const restaurantName = await screen.findByRole("heading", {
          name: new RegExp(jackRabbitSlims.name, "i"),
        });

        expect(restaurantName).toBeInTheDocument();

        const restaurantCard = restaurantName.closest("article");

        const detailLink = await within(restaurantCard!).findByRole("link", {
          name: /ver más/i,
        });

        debugger;

        await userEvent.click(detailLink);

        const description = await screen.findByText(
          jackRabbitSlimsDto.description,
        );

        expect(description).toBeInTheDocument();
      });
    });

    describe("And the user clicks 'modificar' link in Jack Rabbit Slim's", () => {
      test("Then it should show 'A continuación puedes modificar los datos de Jack Rabbit Slim's' inside a heading", async () => {
        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={["/restaurants"]}>
              <Layout />
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const restaurantName = await screen.findByRole("heading", {
          name: new RegExp(jackRabbitSlims.name, "i"),
        });

        expect(restaurantName).toBeInTheDocument();

        const restaurantCard = restaurantName.closest("article");

        const modifyLink = await within(restaurantCard!).findByLabelText(
          "modificar restaurante",
        );

        await userEvent.click(modifyLink);

        const description = await screen.findByRole("heading", {
          name: /a continuación puedes modificar los datos de jack rabbit slim's/i,
        });

        expect(description).toBeInTheDocument();
      });
    });

    describe("And the user clicks the link 'siguiente'", () => {
      test("Then it should show moe's tavern inside a heading in the new page", async () => {
        const expectedSecondPageTitle = new RegExp("moe's tavern", "i");

        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={["/restaurants"]}>
              <Layout />
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const nextPageLink = screen.getByRole("link", { name: /siguiente/i });

        await userEvent.click(nextPageLink);

        const currentPage2 = await screen.findByRole("heading", {
          name: expectedSecondPageTitle,
        });

        expect(currentPage2).toBeInTheDocument();
      });
    });
  });

  describe("When it renders in in path /restaurants?page=2", () => {
    describe("And the user clicks the link 'anterior'", () => {
      test("Then it should show Jack Rabbit Slim's inside a heading in the new page", async () => {
        const expectedFirstPageTitle = new RegExp("jack rabbit slim's", "i");

        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={["/restaurants"]}>
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const previousPageLink = screen.getByRole("link", {
          name: /anterior/i,
        });

        await userEvent.click(previousPageLink);

        const currentPage = await screen.findByRole("heading", {
          name: expectedFirstPageTitle,
        });

        expect(currentPage).toBeInTheDocument();
      });
    });
  });

  describe("When it renders in path /restaurants/662a1c9d7f8b9f001a1b0011", () => {
    describe("And the user clicks the 'modificar' link", () => {
      test("Then it should show 'A continuación puedes modificar los datos de Jack Rabbit Slim's' inside a heading", async () => {
        render(
          <Provider store={store}>
            <MemoryRouter
              initialEntries={[`/restaurants/${jackRabbitSlims.id}`]}
            >
              <Layout />
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const modifyLink = await screen.findByRole("link", {
          name: /modificar/i,
        });

        await userEvent.click(modifyLink);

        const pageTitle = await screen.findByRole("heading", {
          name: /a continuación puedes modificar los datos de jack rabbit slim's/i,
        });

        expect(pageTitle).toBeInTheDocument();
      });
    });
  });

  describe("When it renders in path /restaurants/modify-restaurant/662a1c9d7f8b9f001a1b0011 to modify Kelp Shake visited restaurant", () => {
    const initialState: { restaurantStateData: RestaurantState } = {
      restaurantStateData: {
        restaurantsData: {
          restaurants: [kelpShake, jackRabbitSlims],
          restaurantsTotal: 2,
        },
      },
    };
    const testStore = setupStore(initialState);
    describe("And the user modifies the restaurant's name and clicks the save button to save the changes", () => {
      test("Then it should show 'Lista de restaurantes' inside a heading", async () => {
        render(
          <Provider store={testStore}>
            <MemoryRouter
              initialEntries={[
                `/restaurants/modify-restaurant/${kelpShake.id}`,
              ]}
            >
              <AppTestRouter />
            </MemoryRouter>
          </Provider>,
        );

        const nameTextBox = screen.getByLabelText(/nombre/i);

        await user.clear(nameTextBox);

        await user.type(nameTextBox, "McBobEsponja");

        const saveButton = await screen.findByRole("button", {
          name: /guardar/i,
        });

        await user.click(saveButton);

        const pageTitle = await screen.findByRole("heading", {
          name: /lista de restaurantes/i,
        });

        expect(pageTitle).toBeInTheDocument();
      });
    });

    describe("When it renders in path /restaurants/modify-restaurant/662a1c9d7f8b9f001a1b0011 to modify Jack Rabbit Slim's not visited restaurant", () => {
      const initialState: { restaurantStateData: RestaurantState } = {
        restaurantStateData: {
          restaurantsData: {
            restaurants: [kelpShake, jackRabbitSlims],
            restaurantsTotal: 2,
          },
        },
      };
      const testStore = setupStore(initialState);
      describe("And the user modifies the restaurant's name and clicks the save button to save the changes", () => {
        test("Then it should show 'Lista de restaurantes' inside a heading", async () => {
          render(
            <Provider store={testStore}>
              <MemoryRouter
                initialEntries={[
                  `/restaurants/modify-restaurant/${jackRabbitSlims.id}`,
                ]}
              >
                <AppTestRouter />
              </MemoryRouter>
            </Provider>,
          );

          const foodTypeTextBox =
            await screen.findByLabelText(/tipo de comida/i);

          await user.clear(foodTypeTextBox);

          await user.type(foodTypeTextBox, "Desayuno americano");

          const saveButton = await screen.findByRole("button", {
            name: /guardar/i,
          });

          await user.click(saveButton);

          const pageTitle = await screen.findByRole("heading", {
            name: /lista de restaurantes/i,
          });

          expect(pageTitle).toBeInTheDocument();
        });
      });
    });
  });
});
