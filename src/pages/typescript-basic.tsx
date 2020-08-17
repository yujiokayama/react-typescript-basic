import * as React from "react";

import classNames from "classnames";

function TypeScriptBasic() {
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

  // 変数・定数
  const test: Foo<number, string> = {
    foo: 3,
    bar: "hi",
  };

  const test2: Hoge<object, Array<string>> = {
    obj: {},
    array: ['1'],
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
}

export default TypeScriptBasic;
