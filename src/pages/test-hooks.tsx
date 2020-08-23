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
  useEffect(() => {
    console.log(refDivElement.current);
  }, []);

  /**
   * ref
   */

  const refDivElement = React.createRef<HTMLDivElement>();

  return (
    <ThemeProvider>
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

      <h2 className="text-2xl mt-5 mb-2">Context</h2>
    </ThemeProvider>
  );
};

export default TestHooks;
