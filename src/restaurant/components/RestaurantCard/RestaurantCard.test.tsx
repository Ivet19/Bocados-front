import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import store from "../../../store/store";
import RestaurantCard from "./RestaurantCard";
import { moesTavern } from "../../fixtures";

describe("Given the RestaurantCard component", () => {
  describe("When it receives Moe's Tavern restaurant", () => {
    test("Then it should show Moe's Tavern inside a heading", () => {
      const expectedTitle = /moe's tavern/i;

      render(
        <Provider store={store}>
          <RestaurantCard restaurant={moesTavern} />
        </Provider>,
      );

      const restaurantTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(restaurantTitle).toBeVisible();
    });

    test("Then it should show an image of the dining area of Moe's Tavern restaurant", () => {
      render(
        <Provider store={store}>
          <RestaurantCard restaurant={moesTavern} />
        </Provider>,
      );

      const restaurantImage = screen.getByAltText(moesTavern.imageAlt);

      expect(restaurantImage).toBeVisible();
    });

    test("Then it should show Pub americano as the restaurant's food type", () => {
      render(
        <Provider store={store}>
          <RestaurantCard restaurant={moesTavern} />
        </Provider>,
      );

      const restaurantFoodType = screen.getByText(moesTavern.foodType);

      expect(restaurantFoodType).toBeVisible();
    });
  });
});
