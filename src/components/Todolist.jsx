import React from "react";
import { useQueryClient, useMutation } from "react-query";
import { deleteTodo } from "../api/todo";

function Todolist({ todo, id }) {
  const queryClient = useQueryClient();

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <div>
      <div>
        {todo}
        <button>수정</button>
        <button onClick={() => deleteTodoMutation.mutate(id)}>삭제</button>
      </div>
    </div>
  );
}

export default Todolist;
