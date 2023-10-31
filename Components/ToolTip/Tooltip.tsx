import React from "react";
import Styles from "./Tooltip.module.css";

const Tooltip = ({ children, title }) => {
  return (
    <div className={`${Styles.parent} relative w-full`}>
      {children}
      <div
        className={`${Styles.tooltip} absolute left-[-25%] z-10 bg-black text-white p-3 rounded-xl text-xl font font-medium max-w-max invisible`}
      >
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Tooltip;
