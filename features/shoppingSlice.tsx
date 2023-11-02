import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export type shoppingId = string;

export interface ShoppingList {
  listName: string;
}

export interface ShoppingWithId extends ShoppingList {
  id: shoppingId;
}

const initialState: ShoppingWithId[] = [
  {
    id: "1",
    listName: "Compra Jumbo",
  },
  {
    id: "2",
    listName: "Compra Lider",
  },
  {
    id: "3",
    listName: "Compra Agro",
  },
];

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addNewList: (state, action: PayloadAction<ShoppingList>) => {
      const id = crypto.randomUUID();
      state.unshift({ id, ...action.payload });
    },
    deleteList: (state, action: PayloadAction<shoppingId>) => {
      const id = action.payload;
      return state.filter((list) => list.id !== id);
    },
    editListName: (
      state,
      action: PayloadAction<{ id: shoppingId; listName: string }>
    ) => {
      const { id, listName } = action.payload;
      const list = state.find((item) => item.id === id);
      if (list) {
        list.listName = listName;
      }
    },
  },
});

export const { addNewList, deleteList, editListName } = shoppingSlice.actions;

export default shoppingSlice.reducer;
