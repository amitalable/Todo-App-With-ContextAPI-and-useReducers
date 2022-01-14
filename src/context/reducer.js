import { ADD_TODO, ADD_TODOS, REMOVE_TODO } from "./action.types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodosList = [...state, action.payload];
      localStorage.setItem("todos", JSON.stringify(newTodosList));
      return newTodosList;

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case ADD_TODOS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
