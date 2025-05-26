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

      expect(restaurantTitle).toBeInTheDocument();
    });

    test("Then it should show an image of the dining area of Moe's Tavern restaurant", () => {
      render(
        <Provider store={store}>
          <RestaurantCard restaurant={moesTavern} position={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const restaurantImage = screen.getByAltText(moesTavern.imageAlt);

      expect(restaurantImage).toBeInTheDocument();
    });

    test("Then it should show Pub americano as the restaurant's food type", () => {
      render(
        <Provider store={store}>
          <RestaurantCard restaurant={moesTavern} position={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const restaurantFoodType = screen.getByText(moesTavern.foodType);

      expect(restaurantFoodType).toBeInTheDocument();
    });

    test("Then it should show a delete button", () => {
      render(
        <Provider store={store}>
          <RestaurantCard restaurant={moesTavern} position={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const deleteButton = screen.getByLabelText(/borrar restaurante/i);

      expect(deleteButton).toBeInTheDocument();
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

      expect(detailLink).toBeInTheDocument();
    });

    test("Then it should show a modify link", () => {
      render(
        <Provider store={store}>
          <RestaurantCard restaurant={moesTavern} position={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const modifyLink = screen.getByLabelText(/modificar restaurante/i);

      expect(modifyLink).toBeInTheDocument();
    });

    describe("And it's visited", () => {
      test("Then it should show a 'marcar como no visitado' check button", () => {
        render(
          <Provider store={store}>
            <RestaurantCard restaurant={moesTavern} position={0} />
          </Provider>,
          { wrapper: MemoryRouter },
        );

        const checkButton = screen.getByLabelText(/marcar como no visitado/i);

        expect(checkButton).toBeInTheDocument();
      });
    });
  });

  describe("When it receives not visited Jack Rabbit Slim's restaurant", () => {
    test("Then it should show a 'marcar como visitado' check button", () => {
      render(
        <Provider store={store}>
          <RestaurantCard restaurant={jackRabbitSlims} position={0} />
        </Provider>,
        { wrapper: MemoryRouter },
      );

      const checkButton = screen.getByLabelText(/marcar como visitado/i);

      expect(checkButton).toBeInTheDocument();
    });
  });
});
