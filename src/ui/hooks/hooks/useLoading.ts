import { useCallback } from "react";
import type { UseLoadingStructure } from "../types";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  startLoadingActionCreator,
  stopLoadingActionCreator,
} from "../../uiSlice/uiSlice";

const useLoading = (): UseLoadingStructure => {
  const loadingState = useAppSelector((state) => state.uiSlice.loading);

  const dispatch = useAppDispatch();

  const startLoading = useCallback((): void => {
    const action = startLoadingActionCreator();

    dispatch(action);
  }, [dispatch]);

  const stopLoading = useCallback((): void => {
    const action = stopLoadingActionCreator();

    dispatch(action);
  }, [dispatch]);

  return {
    loadingState,
    startLoading,
    stopLoading,
  };
};

export default useLoading;
