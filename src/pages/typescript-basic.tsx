import * as React from 'react';

import classNames from 'classnames';

function TypeScriptBasic() {
  /**
   * 関数型コンポーネントのためのフック
   */

  /**
   * 配列やオブジェクトで動的なクラスを指定
   */
  const buttonClass = classNames({
    btn: true,
    'btn-primary': true
  });

  const buttonClass2 = classNames(['hoge', 'fuga']);

  /**
   * useStateを使用したステート管理
   */
  const [count, setCount] = React.useState(0);
  const handleClick = () => setCount(count + 1);

  /**
   * フォームの双方向バインディング
   */
  const [name, setName] = React.useState('');
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

  /**
   * created
   */
  sayHello();

  return (
    // React.Fragmentでルート要素を返却する
    <React.Fragment>
      <h1 className="text-4xl mb-5">TypeScriptBasic</h1>

      <h2 className="text-3xl">配列やオブジェクトで動的なクラスを指定</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
      <button className={buttonClass2}>Button</button>

      <h2 className="text-3xl">ステートを管理する</h2>
      <button onClick={handleClick}>カウント:{count}</button>

      <h2 className="text-3xl">フォームの双方向バインディング</h2>
      <p>双方向バインディング:{name}</p>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        onChange={handleInput}
        value={name}
      />
    </React.Fragment>
  );
}

export default TypeScriptBasic;
