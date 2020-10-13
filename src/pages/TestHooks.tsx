import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "../context/TestContext";

const TestHooks: React.FC = () => {

  /**
   * UseState
   */
  const [counter, setCount] = useState(0);
  const handleClick = () => setCount(counter + 1);

  /**
   * UseEffect
   */

  console.log('created')

  useEffect(() => {
    console.log(`${counter}mounted時、カウンターが更新されるたび実行される`)
  }, [counter]);

  useEffect(() => {
    console.log("mounted時に一度");
  }, []);

  /**
   * useRef
   */
  const inputRef = useRef<HTMLInputElement>(null);
  const checkRefValue = () => {
    console.log(inputRef.current?.value)
  }

  return (
    <>
      <h1 className="text-4xl">React Hooksのテスト</h1>

      <h2>useRef</h2>
      <input type="text" ref={inputRef} onChange={checkRefValue} />

      <h2 className="text-2xl mt-5 mb-2">useState</h2>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        カウントアップ
      </button>
      {counter}
    </>
  );
};

export default TestHooks;
