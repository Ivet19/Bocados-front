import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import store from "../../../store/store";
import RestaurantCard from "./RestaurantCard";
import { jackRabbitSlims, moesTavern } from "../../fixtures";
import { MemoryRouter } from "react-router";

describe("Given the RestaurantCard component", () => {
  describe("When it receives Moe's Tavern restaurant", () => {
    test("Then it should show Moe's Tavern inside a heading", () => {
      const expectedTitle = /moe's tavern/i;

      render(
        <Provider store={store}>
          <RestaurantCard restaurant={moesTavern} position={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const restaurantTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(restaurantTitle).toBeVisible();
    });

    test("Then it should show an image of the dining area of Moe's Tavern restaurant", () => {
      render(
        <Provider store={store}>
          <RestaurantCard restaurant={moesTavern} position={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const restaurantImage = screen.getByAltText(moesTavern.imageAlt);

      expect(restaurantImage).toBeVisible();
    });

    test("Then it should show Pub americano as the restaurant's food type", () => {
      render(
        <Provider store={store}>
          <RestaurantCard restaurant={moesTavern} position={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const restaurantFoodType = screen.getByText(moesTavern.foodType);

      expect(restaurantFoodType).toBeVisible();
    });

    test("Then it should show a delete button with a trash icon", () => {
      render(
        <Provider store={store}>
          <RestaurantCard restaurant={moesTavern} position={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const deleteButton = screen.getByLabelText(/borrar restaurante/i);

      expect(deleteButton).toBeVisible();
    });

    test("Then it should show a 'ver más' link", () => {
      render(
        <Provider store={store}>
          <RestaurantCard restaurant={moesTavern} position={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const detailLink = screen.getByRole("link", {
        name: /ver más/i,
      });

      expect(detailLink).toBeVisible();
    });

    describe("And it's visited", () => {
      test("Then it should show a green check button", () => {
        render(
          <Provider store={store}>
            <RestaurantCard restaurant={moesTavern} position={0} />
          </Provider>,
          { wrapper: MemoryRouter },
        );

        const checkButton = screen.getByAltText(/green check icon/i);

        expect(checkButton).toBeInTheDocument();
      });
    });
  });

  describe("When it receives not visited Jack Rabbit Slim's restaurant", () => {
    test("Then it should show a grey check button", () => {
      render(
        <Provider store={store}>
          <RestaurantCard restaurant={jackRabbitSlims} position={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const checkButton = screen.getByAltText(/grey check icon/i);

      expect(checkButton).toBeInTheDocument();
    });
  });
});
