import React from "react";

export interface ProductItem {
  name: string;
  dataChecked: boolean;
  dataId: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ProductItem = ({ name, dataChecked, dataId, onChange }: ProductItem) => {
  return (
    <div className="bg-white mb-4 p-2 border border-solid border-blue-gray-300 rounded-lg flex flex-row gap-4 items-center text-lg font-medium">
      <input
        type="checkbox"
        id="check-list"
        data-checked={dataChecked}
        data-id={dataId}
        onChange={onChange}
      />
      <label htmlFor="item">{name}</label>
    </div>
  );
};

export default ProductItem;
