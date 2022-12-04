import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/todo">
        <button>Todolist</button>
      </Link>
      <Link to="/scroll">
        <button>Scrolltest</button>
      </Link>
    </div>
  );
}

export default Home;
