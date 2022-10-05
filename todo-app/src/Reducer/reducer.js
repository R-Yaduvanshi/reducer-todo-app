import * as types from "../Reducer/action";
function reducer(state, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case types.TOGGLE_TODO:
      return {};
    case types.DELETE_TODO:
      return {};
  }
}

export default reducer;
