import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { act } from "react";
import store from "../../../store/store";
import useModal from "../hooks/useModal";

describe("Given the hideModal method from useModel hook", () => {
  describe("When it is called", () => {
    test("Then it should hide the modal", async () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useModal(), { wrapper });

      await act(() => {
        result.current.hideModal();
      });

      const isModalOpen = result.current.modalState.isOpen;

      expect(isModalOpen).toBe(false);
    });
  });
});
