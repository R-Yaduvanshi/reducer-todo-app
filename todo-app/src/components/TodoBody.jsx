import React from "react";

const TodoBody = () => {
  return (
    <div className="bg-indigo-900 w-7/12 p-5 flex flex-col gap-5 rounded-md">
      <div className="flex flex-col gap-2 bg-indigo-700 p-4 rounded-sm">
        <h1 className="text-white font-bold text-center">Todo Application</h1>
        <input
          type="text"
          placeholder="write here"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 bg-white-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button className="w-full bg-gray-600 rounded-md p-2 text-lg font-semi-bold">
          Add
        </button>
      </div>
      <div className="flex flex-col gap-2 bg-indigo-700 h-full p-4 rounded-sm">
        <h1 className="text-left text-white font-medium">TODOS</h1>
        <div className="flex flex-row justify-between justify-items-center w-full bg-gray-300 h-16 rounded-md">
          <text>Buy Apple</text>
          <div className="flex gap-3 p-5">
            <button className="bg-purple-500 h-8 w-24 rounded-lg">
              Toggle
            </button>
            <button className="bg-purple-500 h-8 w-24 rounded-lg">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoBody;
