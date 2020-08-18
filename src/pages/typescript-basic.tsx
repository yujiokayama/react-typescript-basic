import * as React from "react";

import classNames from "classnames";

const TypeScriptBasic: React.FC = () => {
  /**
   * typeとinterface
   * typeを使おうね
   */

  /**
   * ジェネリクス
   */
  type Foo<T, S> = {
    foo: T;
    bar: S;
  };

  interface Hoge<T, S> {
    obj: T;
    array: S;
  }

  /**
   * 変数・定数
   */

  // プリミティブ

  const test: Foo<number, string> = {
    foo: 3,
    bar: "hi",
  };

  // object, array
  type MemberObject = {
    id: number;
    name: string;
  };
  const test2: Hoge<MemberObject, Array<string | number>> = {
    obj: {
      id: 50,
      name: "hoge",
    },
    array: ["1", 2],
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
    <React.Fragment>
      <h1 className="text-4xl mb-5">TypeScriptBasic</h1>

      <h2 className="text-3xl">ジェネリクス</h2>
    </React.Fragment>
  );
};

export default TypeScriptBasic;
