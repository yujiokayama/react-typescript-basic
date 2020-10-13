import * as React from "react";
import ThemeSwitchButton from "../components/ThemeSwitchButton";
import { type } from "os";

const TypeScriptBasic: React.FC = () => {
  /**
   * typeとinterface
   * typeを使おうね
   * 違いは？
   * https://qiita.com/tkrkt/items/d01b96363e58a7df830e
   */

  /**
   * type
   */
  type Foo<T, S> = {
    foo: T;
    bar: S;
  };

  type Hoge<T, S> = {
    obj: T;
    array: S;
  }

  /**
   * interface
   */
  interface Bar<T, S> {
    obj: T;
    array: S;
  }

  /**
   * 変数・定数
   */

  const test: Foo<number, string> = {
    foo: 3,
    bar: "hi",
  };

  // object, array
  type MemberObject = {
    id: number;
    name: string;
  };

  type ItemObject = {
    name: string;
    amount: number;
  };

  const test2: Hoge<MemberObject, Array<ItemObject>> = {
    obj: {
      id: 50,
      name: "hoge",
    },
    array: [
      {
        name: "けしごむ",
        amount: 5,
      },
      {
        name: "えんぴつ",
        amount: 1,
      },
    ],
  };

  // クラス
  class Fuga<T> {
    constructor(obj: T) {}
  }
  const obj1 = new Fuga<string>("foo");

  // 関数
  function func<T>(arg: T): T {
    return arg;
  }

  func<number>(3);

  return (
    <>
      <h1 className="text-4xl mb-5">TypeScriptBasic</h1>

      <h2 className="text-3xl">ジェネリクス</h2>
    </>
  );
};

export default TypeScriptBasic;
