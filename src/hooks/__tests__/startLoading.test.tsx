import { renderHook } from "@testing-library/react";
import { act } from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import useLoading from "../hooks/useLoading";

describe("Given the startLoading method from useLoading", () => {
  describe("When it is called", () => {
    test("Then it should start the loading", async () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useLoading(), { wrapper });

      await act(() => {
        result.current.startLoading();
      });

      const isLoading = result.current.loadingState.isLoading;

      expect(isLoading).toBe(true);
    });
  });
});
