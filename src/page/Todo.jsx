import React from "react";
import { useQuery } from "react-query";
import TodoInput from "../components/TodoInput";
import Todolist from "../components/Todolist";
import { getTodos } from "../api/todo";

function Todo() {
  const { isLoading, data, isError, error } = useQuery(["todos"], getTodos);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h1>Todolist</h1>
      <TodoInput />
      {data?.data.map((todo) => (
        <Todolist todo={todo.todo} key={todo.id} id={todo.id} />
      ))}
    </div>
  );
}

export default Todo;
