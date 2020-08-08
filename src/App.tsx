import React from 'react';
import './App.css';
import './tailwind.output.css';
import './assets/scss/index.scss';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from './stores/rootReducer';

import Top from './pages/top';
import About from './pages/about';
import User from './pages/user';
import TypeScriptBasic from './pages/typescript-basic';
import FetchCSV from './pages/fetch-csv';

import {
  incrementCounter,
  decrementCounter,
  fetchAPI
} from './stores/modules/Counter';

function App() {
  const randumNum = (min: number, max: number): number => {
    return Math.floor(Math.random() * 10);
  };

  const { count, list } = useSelector((state: RootState) => state.Counter);
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementCounter(1));
  const decrement = () => dispatch(decrementCounter(1));

  // after mounted
  React.useEffect(() => {
    // dispatch(fetchAPI());
  });

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/">index</Link>
            <Link to="/about">about</Link>
            <Link to={`/user/${randumNum(1, 10)}`}>user</Link>
            <Link to={`/typescript-basic`}>TyepScriptの基本</Link>
            <Link to={`/fetch-csv`}>CSVファイルを取得する</Link>
          </nav>
        </header>
        {count}
        {/* {list.map((v: any) => (
          <li key={v.id}>
            {v.id}
            {v.name}
            {v.age}
          </li>
        ))} */}
        <button onClick={increment}>増やす</button>
        <button onClick={decrement}>減らす</button>
        <Switch>
          <Route path="/" exact children={<Top />} />
          <Route path="/about" children={<About />} />
          <Route path="/user/:id" children={<User />} />
          <Route path="/typescript-basic" children={<TypeScriptBasic />} />
          <Route path="/fetch-csv" children={<FetchCSV />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
