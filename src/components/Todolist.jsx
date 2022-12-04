import React from "react";

function Todolist({ todo, key }) {
  return (
    <div>
      <div id={key}>{todo}</div>
    </div>
  );
}

export default Todolist;
