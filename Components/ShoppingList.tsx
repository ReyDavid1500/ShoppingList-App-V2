import React from "react";

const ShoppingList = ({
  onClick,
  name,
  selectedStyles,
  dataId,
}: {
  onClick: React.MouseEventHandler<HTMLLIElement>;
  name: string;
  selectedStyles: string;
  dataId: string;
}) => {
  return (
    <li
      data-id={dataId}
      onClick={onClick}
      className={`flex flex-col justify-center w-full sm:w-full  mt-5 bg-soft-orange rounded-lg h-[83px] pl-6 gap-y-2 cursor-pointer hover:bg-soft-orange/60 dark:bg-gray-400 dark:hover:bg-gray-600 ${selectedStyles}`}
    >
      <p className="text-3xl dark:text-white">{name}</p>
      <p className="dark:text-white">items</p>
    </li>
  );
};

export default ShoppingList;
