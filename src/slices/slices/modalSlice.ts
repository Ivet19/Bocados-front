import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ModalState, ShowModalPayload } from "../types";

const initialState: ModalState = {
  isOpen: false,
  isSuccess: true,
  modalText: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (
      _state,
      { payload: { isSuccess, modalText } }: PayloadAction<ShowModalPayload>,
    ): ModalState => {
      return {
        isOpen: true,
        isSuccess,
        modalText,
      };
    },

    hideModal: (): ModalState => {
      return {
        isOpen: false,
        isSuccess: true,
        modalText: "",
      };
    },
  },
});

export const modalReducer = modalSlice.reducer;

export const {
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
} = modalSlice.actions;
