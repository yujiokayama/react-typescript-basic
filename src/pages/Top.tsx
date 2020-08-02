import React from 'react';
import '../App.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../stores/rootReducer';

function Top() {
  return (
    <div>
      <h1>Top</h1>
    </div>
  );
}

export default Top;
