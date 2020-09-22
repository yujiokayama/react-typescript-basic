import React, { useEffect, useState } from "react";
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
    console.log("mounted時、カウンターが更新されるたび実行される");
  }, [counter]);

  useEffect(() => {
    console.log("mounted時に一度");
  }, []);

  /**
   * ref
   */

  const refDivElement = React.createRef<HTMLDivElement>();

  return (
    <>
      <h1 className="text-4xl">React Hooksのテスト</h1>

      <h2 className="text-2xl mt-5 mb-2">useEffect</h2>
      <div ref={refDivElement}>ref1</div>

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
