import axios from "axios";
import React from "react";
import { useQueryClient, useQuery } from "react-query";
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
      {data?.data.map((todo) => {
        return <Todolist key={todo.id} todo={todo.todo}></Todolist>;
      })}
    </div>
  );
}

export default Todo;
