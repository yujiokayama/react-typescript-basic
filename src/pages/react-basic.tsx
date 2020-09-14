import * as React from "react";

import classNames from "classnames";
import ChildComponent from "../components/ChildComponent";
import SlotComponent from "../components/SlotComponent";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../stores/rootReducer";

import { incrementCounter, decrementCounter } from "../stores/modules/Counter";

function ReactBasic() {
  /**
   * 条件つきレンダー
   */
  const isLogind = undefined;
  const isActive = true;
  const isShow = true;

  const UserGreeting = () => {
    return (
      <div>
        <h1>Welcome back!</h1>
      </div>
    );
  };

  const GuestGreeting = () => {
    return (
      <div>
        <h1>Please sign up.</h1>
      </div>
    );
  };

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
   * ラジオボタン
   */
  const refRadioButtons = React.createRef<HTMLInputElement>();
  const [radio, setRadio] = React.useState<string>("");

  const handleInputRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(event.target.value);
  };

  const radioButtons = {
    radio: [
      { cd: "red", name: "赤" },
      { cd: "blue", name: "青" },
      { cd: "green", name: "緑" },
    ],
  };

  const radioClass = classNames({
    "btn-style": true,
    // "is-checked": radio
  });

  /**
   * フォームの双方向バインディング(useStateを使用したステート管理)
   */
  const [name, setName] = React.useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  /**
   * コンポーネントメソッド(methods)
   */
  const sayHello = () => {
    console.log(`Hello, ${name}!`);
  };

  /**
   * ref
   */

  const refTarget1 = React.createRef<HTMLParagraphElement>();
  const handleClickRef1 = () => {
    console.log(refTarget1.current);
  };

  const refTarget2 = React.createRef<HTMLInputElement>();
  const handleClickRef2 = () => {
    console.log(refTarget2.current?.value);
  };

  /**
   * createdのライフサイクルと同等
   */
  sayHello();

  /**
   * mountedのライフサイクルと同等
   */
  React.useEffect(() => {
    console.log("is mounted!");
  }, []);

  /**
   * reduxを使用したステート管理
   */

  const { count } = useSelector((state: RootState) => state.Counter);
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementCounter(1));
  const decrement = () => dispatch(decrementCounter(1));

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

      <h2 className="text-3xl mt-10">v-ifの代わり</h2>
      {isActive && <p>v-ifの代わり</p>}
      <p style={{ display: isShow ? "initial" : "none" }}>v-showの代わり</p>

      <h2 className="text-3xl mt-10">条件つきレンダリング</h2>
      {isLogind === false ? UserGreeting() : GuestGreeting()}

      <h2 className="text-3xl mt-10">フォームの双方向バインディング</h2>
      <p>双方向バインディング:{name}</p>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        onChange={handleInput}
        value={name}
      />

      <h2 className="text-3xl">フォームモジュール</h2>
      <h3>radio</h3>
      <p>{radio}</p>

      {radioButtons.radio.map((btn) => (
        <label key={btn.name} className={radioClass}>
          {btn.name}
          <input
            onChange={handleInputRadio}
            ref={refRadioButtons}
            type="radio"
            name="radio"
            id={btn.cd}
            checked={radio === btn.name}
            value={btn.name}
          />
        </label>
      ))}

      <h2 className="text-3xl mt-10">ref</h2>
      <p ref={refTarget1}>ref1</p>
      <input ref={refTarget2} type="text" />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClickRef1}
      >
        ref1 html element
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClickRef2}
      >
        ref input value
      </button>

      <h2 className="text-3xl mt-10">Reduxを使用したステート管理</h2>
      {count}
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
      <ChildComponent name={"ポンタ"} age={3} />

      <h2 className="text-3xl mt-10">コンテンツの差込(slot)</h2>
      <SlotComponent>
        <p>slot</p>
      </SlotComponent>
    </React.Fragment>
  );
}

export default ReactBasic;
