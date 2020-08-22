import React, { useContext } from "react";

const ThemeSwitchButton: React.FC = () => {
  return (
    <>
      <button
        onClick={() => {
          alert("Light");
        }}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Light
      </button>
      <button
        onClick={() => {
          alert("Dark");
        }}
        className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Dark
      </button>
    </>
  );
};

export default ThemeSwitchButton;
