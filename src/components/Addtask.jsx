import React, { useEffect, useRef, useState } from "react";
import "./Addtask.css";
function Addtask(props) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.addEventListener("keyup", ({ key }) => {
      if (key === "Enter") {
        console.log("entered");
        if (inputRef.current.value !== "") {
          props.setData((prev) => [
            ...prev,
            { id: "4", title: inputRef.current.value },
          ]);
          inputRef.current.value = "";
        }
      }
    });
  }, []);

  return (
    <div className="Addtask">
      {" "}
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="tickbox"
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
        </g>
        <defs>
          <clipPath id="clip0_2_2">
            <rect width="100" height="100" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <input
        type="text"
        placeholder="Add a task"
        className="input"
        ref={inputRef}
      />
    </div>
  );
}

export default Addtask;
