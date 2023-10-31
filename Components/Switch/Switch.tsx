import React from "react";
import Styles from "./Switch.module.css";

const Switch = ({ isDarkModeOn }) => {
  return (
    <div className="h-[40px] flex items-center">
      <label className={`${Styles.switch}`}>
        <input type="checkbox" onChange={isDarkModeOn} />
        <span className={`${Styles.slider} ${Styles.round}`}></span>
      </label>
    </div>
  );
};

export default Switch;
