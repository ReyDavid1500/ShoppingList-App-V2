import {
  addNewProduct,
  productId,
  ProductList,
  toggleProductChecked,
} from "../features/productSlice";
import {
  addNewList,
  deleteList,
  editListName,
  shoppingId,
  ShoppingList,
} from "../features/shoppingSlice";
import { openSnackbar, closeSnackbar } from "../features/snackbarSlice";
import { useAppDispatch } from "./storeHooks";

export const useReducerActions = () => {
  const dispatch = useAppDispatch();

  //Snackbar Slice Actions
  const showSnackbar = (message: string) => {
    dispatch(openSnackbar(message));
  };

  const hideSnackbar = () => {
    dispatch(closeSnackbar());
  };

  //Shopping Actions
  const newList = (listName: ShoppingList) => {
    dispatch(addNewList(listName));
  };

  const removeList = (id: shoppingId) => {
    dispatch(deleteList(id));
  };

  const renameList = (id: string, listName: string) => {
    dispatch(editListName({ id, listName }));
  };

  // Products Actions

  const newProduct = (itemName: ProductList) => {
    dispatch(addNewProduct(itemName));
  };

  const toggleProduct = (id: productId) => {
    dispatch(toggleProductChecked(id));
  };

  return {
    showSnackbar,
    hideSnackbar,
    newList,
    removeList,
    renameList,
    newProduct,
    toggleProduct,
  };
};
