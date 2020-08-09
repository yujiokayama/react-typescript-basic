import React from "react";
import "./App.css";
import "./tailwind.output.css";
import "./assets/scss/index.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Top from "./pages/top";
import User from "./pages/user";
import TypeScriptBasic from "./pages/typescript-basic";
import ReactBasic from "./pages/react-basic";
import FetchCSV from "./pages/fetch-csv";

function App() {
  const randumNum = (min: number, max: number): number => {
    return Math.floor(Math.random() * 10);
  };

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
                  user
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
                  to={`/fetch-csv`}
                >
                  CSVファイルを取得する
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
          <Route path="/fetch-csv" children={<FetchCSV />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
