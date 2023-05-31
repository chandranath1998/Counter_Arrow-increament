import React, { useState } from "react";
import "./styles.css";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";
import ArrowDropRightSharpIcon from "@mui/icons-material/ArrowRightSharp";
import ArrowDropLeftSharpIcon from "@mui/icons-material/ArrowLeftSharp";
// import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
// import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
// import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
// import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function App() {
  const [count, setCount] = useState(0);

  const handleCalculation = (value) => {
    setCount((prevCount) => prevCount + value);
  };

  return (
    <div className="container">
      <div className="circle">
        <ArrowDropUpSharpIcon
          className="arrow-icon icon-up"
          onClick={() => handleCalculation(1)}
        />
        <div className="arrow-icons">
          <ArrowDropLeftSharpIcon
            className="arrow-icon icon-left"
            onClick={() => handleCalculation(-10)}
          />{" "}
          <div className="count">{count}</div>
          <ArrowDropRightSharpIcon
            className="arrow-icon"
            onClick={() => handleCalculation(10)}
          />
        </div>
        <ArrowDropDownSharpIcon
          className="arrow-icon icon-down"
          onClick={() => handleCalculation(-1)}
        />
      </div>
    </div>
  );
}
