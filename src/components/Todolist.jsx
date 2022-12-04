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

  const handleDelete = () => {
    deleteTodoMutation.mutate(id);
  };

  return (
    <div>
      <div>
        {todo}
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
}

export default Todolist;
