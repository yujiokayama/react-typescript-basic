import React from "react";
import "./App.css";
import "./tailwind.output.css";
import "./assets/scss/index.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "./context/TestContext";
import ThemeSwitchButton from "./components/ThemeSwitchButton";

import Top from "./pages/Top";
import User from "./pages/User";
import ReactBasic from "./pages/ReactBasic";
import TestCrud from "./pages/TestCrud";
import TestHooks from "./pages/TestHooks";

function App() {
  function randomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <ThemeProvider>
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
                    to={`/user/${randomNum(1, 10)}`}
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
                    to={`/test-crud`}
                  >
                    REST APIをCRUD操作する
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    className="text-blue-500 hover:text-blue-800"
                    to={`/test-hooks`}
                  >
                    React Hooksを試す
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Route path="/" exact children={<Top />} />
            <Route path="/user/:id" children={<User />} />
            <Route path="/react-basic" children={<ReactBasic />} />
            <Route path="/test-crud" children={<TestCrud />} />
            <Route path="/test-hooks" children={<TestHooks />} />
          </Switch>

          <ThemeSwitchButton />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
