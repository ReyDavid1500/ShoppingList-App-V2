import React from "react";
import PlusIcon from "../SVG/PlusIcon";

export interface ProductInput {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  value: string;
}

const ProductInput = ({
  placeholder,
  onChange,
  onSubmit,
  value,
}: ProductInput) => {
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
        value={value}
      />
      <button type="submit">
        <PlusIcon width="45" height="35" />
      </button>
    </form>
  );
};

export default ProductInput;
