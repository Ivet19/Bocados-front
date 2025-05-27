import { useCallback } from "react";
import type { UseLoadingStructure } from "../types";
import {
  startLoadingActionCreator,
  stopLoadingActionCreator,
} from "../../slices/slices/loadingSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

const useLoading = (): UseLoadingStructure => {
  const loadingState = useAppSelector((state) => state.loadingSlice);

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
