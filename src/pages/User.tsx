import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

function User() {
  const { id } = useParams();
  return (
    <div>
      <h1>User{id}</h1>
    </div>
  );
}

export default User;
