import React, { ReactNode, useState } from "react";
import useOnClickOutside from "../Hooks/useOnClickOutside";

interface TDropdownProps {
  children: ReactNode;
  dropdownOptions: Array<{ id: number; name: string; type: string }>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Dropdown = ({ children, dropdownOptions, onClick }: TDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { ref } = useOnClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between text-gray-700 font-medium hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-600"
      >
        <span>{children}</span>
      </button>
      {isOpen && (
        <div className="absolute mt-2 py-2 min-w-max bg-white rounded-lg shadow-lg z-10">
          {dropdownOptions.map((option) => (
            <button
              key={option.id}
              onClick={(id) => {
                onClick(id);
                setIsOpen(false);
              }}
              data-type={option.type}
              className="block px-4 py-2 text-xl font-medium w-full text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
