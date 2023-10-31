import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ModalType {
  isOpen: boolean;
  title: string;
  content: string;
}

const initialState: ModalType = {
  isOpen: false,
  title: "",
  content: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ title: string; content: string }>
    ) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = "";
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
