import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";

function User() {
  const { id }: any = useParams();
  return (
    <div>
      <h1>UserID:{id}</h1>
    </div>
  );
}

export default User;
