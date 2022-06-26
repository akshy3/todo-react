import React, { useEffect, useState } from "react";
import "./Task.css";
function Task() {
  const [checked, setChecked] = useState(false);

  const handleCheckPress = (e) => {
    setChecked(prev => !prev)
    console.log(e)
  }
  

  return (
    <div className="Task">
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="tickbox"
        onClick={handleCheckPress}
      >
        <g id="checkbox" clipPath="url(#clip0_2_2)">
          <circle
            id="circle"
            cx="50"
            cy="50"
            r="45.5"
            fill="#FFFCFC"
            stroke="black"
            strokeWidth="6"
          />
          <path
            id="stroke1"
            d="M13 60C18.1571 67.048 24.1127 74.2254 28 82"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            id="stroke2"
            d="M28 82C40.0082 63.9877 54.5806 48.1598 69.6667 32.6667C99.7595 1.76173 131.674 -27.367 163 -57"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_2">
            <rect width="100" height="100" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Task1
    </div>
  );
}

export default Task;
