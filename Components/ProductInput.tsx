import React from "react";
import PlusIcon from "./SVG/PlusIcon";

export interface ProductInput {
  placeholder: string;
  onChange: React.ChangeEvent<HTMLInputElement>;
  onSubmit: React.FormEvent<HTMLInputElement>;
  addState: boolean;
}

const ProductInput = ({ placeholder, onChange, onSubmit, addState = true }) => {
  return (
    <form
      className="w-full ml-2 flex flex-row gap-1 items-center"
      onSubmit={onSubmit}
    >
      <input
        className="w-full rounded-md"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <button
        disabled={!addState}
        className={`${addState && "bg-white text-black"}`}
        type="submit"
      >
        <PlusIcon width="45" height="35" />
      </button>
    </form>
  );
};

export default ProductInput;
