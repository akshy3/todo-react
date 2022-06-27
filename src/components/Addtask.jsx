import React, { useEffect, useRef } from "react";
import {v4 as uuid} from "uuid";
import "./Addtask.css";
function Addtask(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyUp = ({ key }) => {
      if (key === "Enter") {
        let value = (inputRef.current.value);
        if (inputRef.current.value !== "") {
          props.setData((prev) => [
            ...prev,
            { id: uuid(), title: value },
          ]);
          inputRef.current.value = "";
        }
      }
    }
    inputRef.current.addEventListener("keyup", handleKeyUp);
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
