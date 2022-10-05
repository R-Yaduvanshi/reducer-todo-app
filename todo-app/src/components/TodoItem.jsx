import React from "react";
import TodosList from "./TodosList";

const TodoItem = ({ text, clickToToggle, clickToDelete, status }) => {
  return (
    <div className="flex flex-row justify-between w-full items-center p-3 bg-gray-300 h-16 rounded-md">
      <text className={status ? "" : "line-through"}>{text}</text>
      <div className="flex gap-3 justify-center align-middle">
        <button
          className="bg-purple-500 h-8 w-24 rounded-lg"
          onClick={clickToToggle}
        >
          Toggle
        </button>

        <button
          className="bg-purple-500 h-8 w-24 rounded-lg"
          onClick={clickToDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
