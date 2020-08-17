import React from "react";
import "../App.css";

const Top: React.FC = () => {
  const testFunc = (arg: string): string => {
    return arg;
  };

  return (
    <div>
      <h1>Top</h1>
      <button
        onClick={() => {
          testFunc("こんにちは");
        }}
      ></button>
    </div>
  );
};

export default Top;
