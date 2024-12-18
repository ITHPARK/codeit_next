import React from "react";

const SpinSvg = () => {
  return (
    <svg
      viewBox="0 0 1026 1026"
      fill="none"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full animate-spin z-[9999]"
    >
      <path
        d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
        stroke="#D4D4D4"
        // stroke-opacity="0.7"
      ></path>
      <path
        d="M913 513c0 220.914-179.086 400-400 400"
        stroke="url(#:S1:-gradient-2)"
        strokeLinecap="round"
      ></path>
      <defs>
        <linearGradient
          id=":S1:-gradient-2"
          x1="913"
          y1="513"
          x2="913"
          y2="913"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06b6d4"></stop>
          <stop offset="1" stopColor="#06b6d4" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SpinSvg;
