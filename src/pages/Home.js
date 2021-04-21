import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
  return (
    <div>
      {" "}
      <h1>Home</h1>
      <Link to="/login"> Login Page! </Link>
      <Link to="/jobs"> Testing Page! </Link>
    </div>
  );
}
