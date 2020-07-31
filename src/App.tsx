import React from 'react';
import './App.css';
import './assets/scss/index.scss';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from './stores/rootReducer';

import Top from './pages/Top';
import About from './pages/About';
import User from './pages/User';

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

  // マウント後に実行したい処理
  React.useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/">index</Link>
            <Link to="/about">about</Link>
            <Link to={`/user/${randumNum(1, 10)}`}>user</Link>
          </nav>
        </header>
        {count}
        <button onClick={increment}>増やす</button>
        <button onClick={decrement}>減らす</button>
        <Switch>
          <Route path="/" exact children={<Top />} />
          <Route path="/about" children={<About />} />
          <Route path="/user/:id" children={<User />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
