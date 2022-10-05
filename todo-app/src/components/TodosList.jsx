import React from "react";
import { useContext } from "react";
import { TodoDataContext } from "../Reducer/TodoContext";
import TodoItem from "./TodoItem";

const TodosList = () => {
  const { todos, ToggleTod, DeleteTodo } = useContext(TodoDataContext);
  return (
    <div className="flex flex-col gap-2 bg-indigo-700 h-full p-4 rounded-sm">
      <h1 className="text-left text-white font-medium">TODOS</h1>

      {todos &&
        todos.map((todo) => <TodoItem key={todo.id} text={todo.text} />)}
    </div>
  );
};

export default TodosList;
