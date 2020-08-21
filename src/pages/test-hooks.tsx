import React, { useEffect, useState, useContext } from "react";

const TestHooks: React.FC = () => {
  /**
   * UseState
   */
  const [counter, setCount] = React.useState(0);
  const handleClick = () => setCount(counter + 1);

  /**
   * UseEffect
   */
  React.useEffect(() => {
    console.log(refDivElement.current);
  }, []);

  /**
   * ref
   */

  const refDivElement = React.createRef<HTMLDivElement>();


  return (
    <>
      <h1 className="text-4xl mb-5">React Hooksのテスト</h1>

      <h2 className="text-2xl mb-2">useEffect</h2>
      <div ref={refDivElement}>ref1</div>


      <h2 className="text-2xl mb-2">useState</h2>
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
