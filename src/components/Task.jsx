import React, { useState } from "react";
import "./Task.css";

let touchStartX;
let touchMoveX;
function Task(props) {
  const [checked, setChecked] = useState(false);
  const [differenceX, setDifferenceX] = useState(0);

  const handleCheckPress = (e) => {
    setChecked((prev) => !prev);
  };

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };
  const handleTouchMove = (e) => {
    touchMoveX = e.changedTouches[0].screenX;
    setDifferenceX(touchMoveX - touchStartX);
    if (differenceX > 200) {
      props.deleteTask(props.val.id);
    }
    console.log(
      "start",
      touchStartX,
      "move",
      touchMoveX,
      "difference",
      differenceX
    );
  };
  const handleTouchEnd = (e) => {
    setDifferenceX(0);
  };

  return (
    <div className="Taskcontainer">
      <svg
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        className="trashIcon"
      >
        <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
      </svg>
      <div
        className="Task"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateX(${differenceX}px)` }}
      >
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
              strokeOpacity={checked ? "1" : "0"}
            />
            <path
              id="stroke2"
              d="M28 82C40.0082 63.9877 54.5806 48.1598 69.6667 32.6667C99.7595 1.76173 131.674 -27.367 163 -57"
              stroke="black"
              strokeWidth="6"
              strokeLinecap="round"
              strokeOpacity={checked ? "1" : "0"}
            />
          </g>
          <defs>
            <clipPath id="clip0_2_2">
              <rect width="100" height="100" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span id="title" className={checked ? "strike" : ""}>
          {props.val.title}
        </span>
      </div>
    </div>
  );
}

export default Task;
