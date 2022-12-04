import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

export const getTodos = () => {
  return axios.get("/todos");
};

export const addTodo = async (todo) => {
  return await axios.post("/todos", todo);
};

export const deleteTodo = async (id) => {
  return await axios.delete(`/todos/${id}`);
};

export const updateTodo = async ({ id, todo }) => {
  return await axios.patch(`/todos/${id}`, { todo: todo });
};
