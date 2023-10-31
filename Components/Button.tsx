import React from "react";

const Button: React.FC<{
  icon: React.JSX.Element;
  title: string;
  style: React.CSSProperties;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ icon, title, onClick, style }) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className="rounded-full shadow-md bg-bitcoin-orange hover:bg-bitcoin-orange/50 hover:text-gray-100 font-bold text-just-white flex flex-row items-center justify-center gap-4 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-900 text-6xl"
    >
      {icon}
      {title}
    </button>
  );
};

export default Button;
