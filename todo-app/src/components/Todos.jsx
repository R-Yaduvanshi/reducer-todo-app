import React from "react";
import { useContext } from "react";
import { TodoDataContext } from "../Reducer/TodoContext";

const Todos = () => {
  return (
    <div className="flex flex-col gap-2 bg-indigo-700 h-full p-4 rounded-sm">
      <h1 className="text-left text-white font-medium">TODOS</h1>
      <div className="flex flex-row justify-between w-full items-center p-3 bg-gray-300 h-16 rounded-md">
        <text>Apple</text>
        <div className="flex gap-3 justify-center align-middle">
          <button className="bg-purple-500 h-8 w-24 rounded-lg">Toggle</button>
          <button className="bg-purple-500 h-8 w-24 rounded-lg">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todos;
