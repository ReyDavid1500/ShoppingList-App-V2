import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "../features/snackbarSlice";
import shoppingReducer from "../features/shoppingSlice";
import productReducer from "../features/productSlice";

export const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
    shopping: shoppingReducer,
    product: productReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
