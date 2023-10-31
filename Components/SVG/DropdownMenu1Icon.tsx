import React from "react";

const DropdownMenu1: React.FC<{
  stroke?: string;
  strokeWidth?: string;
  strokeLinecap?: string;
}> = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M3 10H37" />
        <path d="M3 17H29" />
        <path d="M3 24C3.4 24 13.1667 24 18 24" />
      </g>
    </svg>
  );
};

export default DropdownMenu1;
