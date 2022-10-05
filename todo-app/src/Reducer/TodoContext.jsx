import { useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";
import * as types from "./action";
export const TodoDataContext = createContext();
const initialState = {
  todos: [], //{id: , text: , status: falsde} //
};
export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Add Todos
  const AddTodos = (todo) => {
    dispatch({
      type: types.ADD_TODO,
      payload: todo,
    });
  };

  //Todo Toggle
  const ToggleTodo = (todoID) => {
    dispatch({
      type: types.TOGGLE_TODO,
      payload: todoID,
    });
  };

  // Delete Todo
  const DeleteTodo = (todoID) => {
    dispatch({
      type: types.DELETE_TODO,
      payload: todoID,
    });
  };
  return (
    <TodoDataContext.Provider
      value={{
        todos: state.todos,
        AddTodos,
        ToggleTodo,
        DeleteTodo,
      }}
    >
      {children}
    </TodoDataContext.Provider>
  );
};
