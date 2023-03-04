import React from "react";
import TodoElems from "../TodoElems/TodoElems";

function TodoList({ todo }) {
  return (
    <div>
      {todo.map((post) => (
        <TodoElems id={post.id} completed={post.completed} title={post.title} />
      ))}
    </div>
  );
}

export default TodoList;
