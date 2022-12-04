import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { addTodo } from "../api/todo";
import { v4 } from "uuid";

function Todoinput() {
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const id = v4();

  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoMutation.mutate({ id: id, todo: todoInput });
    setTodoInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={handleSubmit}>입력</button>
    </div>
  );
}

export default Todoinput;
