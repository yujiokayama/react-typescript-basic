import React from "react";
import "./App.css";
import "./tailwind.output.css";
import "./assets/scss/index.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Top from "./pages/top";
import User from "./pages/user";
import TypeScriptBasic from "./pages/typescript-basic";
import ReactBasic from "./pages/react-basic";
import TestCrud from "./pages/test-crud";

function App() {
  function randumNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <header>
          <nav>
            <ul className="flex">
              <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" to="/">
                  index
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  className="text-blue-500 hover:text-blue-800"
                  to={`/user/${randumNum(1, 10)}`}
                >
                  動的ルーティングのテスト
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  className="text-blue-500 hover:text-blue-800"
                  to={`/react-basic`}
                >
                  Reactの基本
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  className="text-blue-500 hover:text-blue-800"
                  to={`/typescript-basic`}
                >
                  TyepScriptの基本
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  className="text-blue-500 hover:text-blue-800"
                  to={`/test-crud`}
                >
                  REST APIをCRUD操作する
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/" exact children={<Top />} />
          <Route path="/user/:id" children={<User />} />
          <Route path="/react-basic" children={<ReactBasic />} />
          <Route path="/typescript-basic" children={<TypeScriptBasic />} />
          <Route path="/test-crud" children={<TestCrud />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
