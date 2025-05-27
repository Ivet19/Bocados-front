import { act } from "react";
import { Provider } from "react-redux";
import { renderHook } from "@testing-library/react";
import useModal from "../hooks/useModal";
import store from "../../../store/store";

describe("Given the showModal method from useModal", () => {
  describe("When it receives a true and 'Tutto benne' text", () => {
    test("Then it should show a success modal with 'Tutto benne'", async () => {
      const expectedIsModalSuccess = true;
      const expectedModalText = "Tutto benne";

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useModal(), { wrapper });

      await act(() => {
        result.current.showModal(true, expectedModalText);
      });

      const isModalSuccess = result.current.modalState.isSuccess;
      const modalText = result.current.modalState.modalText;

      expect(isModalSuccess).toBe(expectedIsModalSuccess);
      expect(modalText).toBe(expectedModalText);
    });
  });

  describe("When it receives a false and 'Tutto male' text", () => {
    test("Then it should show an error modal with 'Tutto male'", async () => {
      const expectedIsModalSuccess = false;
      const expectedModalText = "Tutto male";

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useModal(), { wrapper });

      await act(() => {
        result.current.showModal(false, expectedModalText);
      });

      const isModalSuccess = result.current.modalState.isSuccess;
      const modalText = result.current.modalState.modalText;

      expect(isModalSuccess).toBe(expectedIsModalSuccess);
      expect(modalText).toBe(expectedModalText);
    });
  });
});
