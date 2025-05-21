import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import {
  hideModalActionCreator,
  showModalActionCreator,
} from "../../slices/slices/modalSlice.ts";
import type { UseModalStructure } from "../types.ts";
import type { ShowModalPayload } from "../../slices/types.ts";

const useModal = (): UseModalStructure => {
  const modalState = useAppSelector((state) => state.modalSlice);

  const dispatch = useAppDispatch();

  const showModal = useCallback(
    (isSuccess: boolean, modalText: string): void => {
      const payload: ShowModalPayload = { isSuccess, modalText };

      const action = showModalActionCreator(payload);

      dispatch(action);
    },
    [dispatch],
  );

  const hideModal = (): void => {
    const action = hideModalActionCreator();

    dispatch(action);
  };

  return {
    modalState,
    showModal,
    hideModal,
  };
};

export default useModal;
