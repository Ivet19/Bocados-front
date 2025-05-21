import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import Layout from "./Layout";
import store from "../../store/store";
import AppTestRouter from "../../router/AppTestRouter/AppTestRouter";
import "./Layout.css";

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

      expect(restaurantsLink).toBeVisible();
      expect(addRestaurantLink).toBeVisible();
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
});
