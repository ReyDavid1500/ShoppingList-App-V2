import { createSlice } from "@reduxjs/toolkit";

export interface Snackbar {
  isOpen: boolean;
  message: string;
}

const initialState = {
  isOpen: false,
  message: "",
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackbar: (state, action) => {
      state.isOpen = true;
      state.message = action.payload;
    },
    closeSnackbar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
