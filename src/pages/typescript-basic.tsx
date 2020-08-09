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
  type Foo<S, T> = {
    foo: S;
    bar: T;
  }

  // 変数・定数
  const obj: Foo<number, string> = {
    foo: 3,
    bar: "hi",
  };

  // クラス
  class Fuga<T> {
    constructor(obj: T) {
    }
  }
  const obj1 = new Fuga<string>('foo');
  
  // 関数
  function func<T>(arg: T): T {
    return arg
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
