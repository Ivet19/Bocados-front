import type { LoadingState, ModalState } from "../uiSlice/types";

export interface UseModalStructure {
  modalState: ModalState;
  showModal: (isSuccess: boolean, modalText: string) => void;
  hideModal: () => void;
}

export interface UseLoadingStructure {
  loadingState: LoadingState;
  startLoading: () => void;
  stopLoading: () => void;
}
