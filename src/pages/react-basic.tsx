import * as React from "react";

import classNames from "classnames";
import ChildComponent from "../componets/ChildComponent";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../stores/rootReducer";

import {
  incrementCounter,
  decrementCounter,
  fetchAPI,
} from "../stores/modules/Counter";

function ReactBasic() {
  /**
   * 配列やオブジェクトで動的なクラスを指定
   */
  const buttonClass = classNames({
    btn: true,
    "btn-primary": true,
  });

  const buttonClass2 = classNames(["hoge", "fuga"]);

  /**
   * useStateを使用したステート管理
   */
  const [counter, setCount] = React.useState(0);
  const handleClick = () => setCount(counter + 1);

  /**
   * フォームの双方向バインディング
   */
  const [name, setName] = React.useState("");
  const handleInput = (e: any) => setName(e.target.value);

  /**
   * コンポーネントメソッド
   */
  const sayHello = () => {
    console.log(`Hello, ${name}!`);
  };

  /**
   * ref
   */
  const refTarget = React.useRef(null);
  const handleClickRef = () => {
    console.log(refTarget.current);
  };

  /**
   * created
   */
  sayHello();

  /**
   * マウント後に実行したい処理
   */
  React.useEffect(() => {
    console.log("is mounted!");
  }, []);

  /**
   * reduxを使用したステート管理
   */

  const { count, list } = useSelector((state: RootState) => state.Counter);
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementCounter(1));
  const decrement = () => dispatch(decrementCounter(1));
  React.useEffect(() => {
    // dispatch(fetchAPI());
  }, []);

  return (
    // React.Fragmentでルート要素を返却する
    <React.Fragment>
      <h1 className="text-4xl mb-5">ReactBasic</h1>

      <h2 className="text-3xl">配列やオブジェクトで動的なクラスを指定</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
      <button className={buttonClass2}>Button</button>

      <h2 className="text-3xl mt-10">ステートを管理する</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        カウント:{counter}
      </button>

      <h2 className="text-3xl mt-10">フォームの双方向バインディング</h2>
      <p>双方向バインディング:{name}</p>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        onChange={handleInput}
        value={name}
      />

      <h2 className="text-3xl mt-10">ref</h2>
      <div ref={refTarget}>ref</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClickRef}
      >
        Click me
      </button>

      <h2 className="text-3xl mt-10">Reduxを使用したステート管理</h2>
      {count}
      {/* {list.map((v: any) => (
          <li key={v.id}>
            {v.id}
            {v.name}
            {v.age}
          </li>
        ))} */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={increment}
      >
        増やす
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={decrement}
      >
        減らす
      </button>
      <h2 className="text-3xl mt-10">子コンポーネントにpropsを渡す</h2>
      <ChildComponent foo="渡したよ" />
    </React.Fragment>
  );
}

export default ReactBasic;
