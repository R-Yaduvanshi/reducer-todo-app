import React from "react";
import TodoInput from "./TodoInput";
import Todos from "./Todos";

const TodoBody = () => {
  return (
    <div className="bg-indigo-900 w-7/12 p-5 flex flex-col gap-5 rounded-md">
      <TodoInput />
      <Todos />
    </div>
  );
};

export default TodoBody;
