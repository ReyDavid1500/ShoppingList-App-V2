import React, { useEffect } from "react";
import { RootState } from "../Redux/store";
import { useAppDispatch, useAppSelector } from "../Hooks/storeHooks";
import { useReducerActions } from "../Hooks/useReducerActions";

const Snackbar = () => {
  const snackbar = useAppSelector((state: RootState) => state.snackbar);
  const { hideSnackbar } = useReducerActions();

  useEffect(() => {
    if (snackbar.isOpen) {
      setTimeout(() => {
        hideSnackbar();
      }, 3000);
    }
  }, [snackbar.isOpen, useAppDispatch]);

  return (
    snackbar.isOpen && (
      <div className="bg-orange-800 text-white font-bold text-xl border border-black rounded-md w-[300px] h-[30px] fixed bottom-8 left-12 flex items-center justify-center transition-transform duration-300 animate-pulse">
        {snackbar.message}
      </div>
    )
  );
};

export default Snackbar;
