import React from 'react';
import '../App.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../stores/rootReducer';

import { fetchCSV } from '../stores/modules/Fetch';

function FetchCSV() {
  const { list } = useSelector((state: RootState) => state.Fetch);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // dispatch(fetchCSV('../../public/csv/COVID-19.csv'));
  });
  return (
    <div>
      {list}
      <h1>FetchCSV</h1>
    </div>
  );
}

export default FetchCSV;
