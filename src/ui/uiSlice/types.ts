export interface ModalState {
  modalText: string;
  isOpen: boolean;
  isSuccess: boolean;
}

export interface ShowModalPayload {
  modalText: string;
  isSuccess: boolean;
}

export interface LoadingState {
  isLoading: boolean;
}

export interface UiState {
  modal: ModalState;
  loading: LoadingState;
}
