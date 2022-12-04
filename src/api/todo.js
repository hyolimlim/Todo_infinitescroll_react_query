import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/";

export const getTodos = () => {
  return axios.get("todos");
};

export const addTodo = (todo) => {
  return axios.post("todos", todo);
};
