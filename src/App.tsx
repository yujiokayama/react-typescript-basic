import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Top from './pages/Top';
import About from './pages/About';
import User from './pages/User';

function App() {
  const randumNum = (min: number, max: number): number => {
    return Math.floor(Math.random() * 10);
  };
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
