import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ShowModalPayload, UiState } from "./types";

export const initialState: UiState = {
  loading: {
    isLoading: false,
  },
  modal: {
    isOpen: false,
    isSuccess: true,
    modalText: "",
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showModal: (
      state,
      { payload: { isSuccess, modalText } }: PayloadAction<ShowModalPayload>,
    ) => {
      state.modal = {
        isOpen: true,
        isSuccess,
        modalText,
      };
    },
    hideModal: (state) => {
      state.modal = {
        isOpen: false,
        isSuccess: true,
        modalText: "",
      };
    },
    startLoading: (state) => {
      state.loading.isLoading = true;
    },
    stopLoading: (state) => {
      state.loading.isLoading = false;
    },
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
  startLoading: startLoadingActionCreator,
  stopLoading: stopLoadingActionCreator,
} = uiSlice.actions;
