import { useState } from "react";
import TodoBody from "./components/TodoBody";

function App() {
  return (
    <div className="bg-slate-300 h-screen w-full p-10 flex justify-center">
      <TodoBody />
    </div>
  );
}

export default App;
