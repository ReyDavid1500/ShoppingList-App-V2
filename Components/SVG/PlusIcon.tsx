import React from "react";

const PlusIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 75 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="37.5" cy="29.5" rx="27.5" ry="26.5" fill="#9A9595" />
      <path
        d="M46 29.2564H29"
        stroke="#943737"
        strokeWidth="6"
        strokeLinecap="square"
      />
      <path
        d="M37.7179 20V39"
        stroke="#943737"
        strokeWidth="6"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default PlusIcon;
