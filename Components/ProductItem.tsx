import React from "react";

const ProductItem = ({ name }) => {
  return (
    <div className="bg-white mb-4 p-2 border border-solid border-blue-gray-300 rounded-lg flex flex-row gap-4 items-center text-lg font-medium">
      <input type="checkbox" id="check-list" />
      <label htmlFor="item">{name}</label>
    </div>
  );
};

export default ProductItem;
