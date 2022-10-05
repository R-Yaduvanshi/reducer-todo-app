import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { TodoDataContext } from "../Reducer/TodoContext";
const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const { AddTodos } = useContext(TodoDataContext);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      text: todo,
      status: false,
    };
    AddTodos(newTodo);
    setTodo("");
  };

  return (
    <div className=" bg-indigo-700 p-4 rounded-sm">
      <h1 className="text-white font-bold text-center">Todo Application</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="write here"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 bg-white-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button className="w-full bg-gray-600 rounded-md p-2 text-lg font-semi-bold">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
