import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export type productId = string;

export interface ProductList {
  itemName: string;
  isChecked: boolean;
}

export interface ProductWithId extends ProductList {
  id: productId;
}

const initialState: ProductWithId[] = [
  {
    id: "1",
    itemName: "Leche",
    isChecked: false,
  },
  {
    id: "2",
    itemName: "Queso",
    isChecked: false,
  },
  {
    id: "3",
    itemName: "Yogur",
    isChecked: false,
  },
  {
    id: "4",
    itemName: "Mantequilla",
    isChecked: false,
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<ProductList>) => {
      const id = crypto.randomUUID();
      state.push({ id, ...action.payload });
    },
  },
});

export const { addNewProduct } = productSlice.actions;
export default productSlice.reducer;
