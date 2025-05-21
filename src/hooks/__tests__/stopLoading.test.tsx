import { renderHook } from "@testing-library/react";
import { act } from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import useLoading from "../hooks/useLoading";

describe("Given the stopLoading method from useLoading", () => {
  describe("When it is called", () => {
    test("Then it should end the loading", async () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useLoading(), { wrapper });

      await act(() => {
        result.current.stopLoading();
      });

      const isLoading = result.current.loadingState.isLoading;

      expect(isLoading).toBe(false);
    });
  });
});
