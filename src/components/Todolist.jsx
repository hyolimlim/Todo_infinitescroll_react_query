import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { deleteTodo, updateTodo } from "../api/todo";

function Todolist({ todo, id }) {
  const queryClient = useQueryClient();

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const [isClicked, setIsClicked] = useState(false);

  const [updateInput, setUpdateInput] = useState(todo);

  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <div>
      {!isClicked ? (
        <div>
          <p>{todo}</p>
          <button onClick={() => setIsClicked(true)}>수정</button>
          <button onClick={() => deleteTodoMutation.mutate(id)}>삭제</button>
        </div>
      ) : (
        <div>
          <input
            value={updateInput}
            onChange={(e) => setUpdateInput(e.target.value)}
          />
          <button
            onClick={() => {
              updateTodoMutation.mutate({ id: id, todo: updateInput });
              setIsClicked(false);
            }}
          >
            수정
          </button>
          <button onClick={() => deleteTodoMutation.mutate(id)}>삭제</button>
        </div>
      )}
    </div>
  );
}

export default Todolist;
