import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import store from "../../../store/store";
import { jackRabbitSlims } from "../../fixtures";
import AppTestRouter from "../../../router/AppTestRouter/AppTestRouter";
import { leakyCauldronDto } from "../../dto/fixturesDto";

describe("Given the RestaurantDetailPage component", () => {
  describe("When it receives not visited Jack Rabbit Slim's restaurant id", () => {
    test("Then it should show 'Jack Rabbit Slim's' inside a heading", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/restaurants/${jackRabbitSlims.id}`]}>
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const restaurantName = await screen.findByRole("heading", {
        name: /jack rabbit slim's/i,
      });

      expect(restaurantName).toBeVisible();
    });

    test("Then it should show a mark as visited button", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/restaurants/${jackRabbitSlims.id}`]}>
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const checkButton = await screen.getByRole("button", {
        name: /mark as visited/i,
      });

      expect(checkButton).toBeVisible();
    });

    test("Then it should show Jack Rabbit Slim's restaurant's description", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/restaurants/${jackRabbitSlims.id}`]}>
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const restaurantDescription = await screen.findByText(
        jackRabbitSlims.description,
      );

      expect(restaurantDescription).toBeVisible();
    });
  });

  describe("When it receives visited Leacky Cauldron restaurant id", () => {
    test("Then it should show 'Normal' as servings amount", async () => {
      const expectedServingsAmount = /normal/i;

      render(
        <Provider store={store}>
          <MemoryRouter
            initialEntries={[`/restaurants/${leakyCauldronDto._id}`]}
          >
            <AppTestRouter />
          </MemoryRouter>
        </Provider>,
      );

      const restaurantServingsAmount = await screen.findByText(
        expectedServingsAmount,
      );

      expect(restaurantServingsAmount).toBeVisible();
    });
  });
});
