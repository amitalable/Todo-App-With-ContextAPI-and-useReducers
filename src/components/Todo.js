import React, { useContext, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODOS, REMOVE_TODO } from "../context/action.types";

const Todo = () => {
  const { todos, dispatch } = useContext(TodoContext);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos.length > 0) {
      dispatch({ type: ADD_TODOS, payload: JSON.parse(localTodos) });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <ListGroup className="mt-4 items">
      {todos.map((value) => (
        <ListGroupItem className="mt-2" key={value.id}>
          {value.todoString}
          <span
            className="float-right"
            onClick={() => dispatch({ type: REMOVE_TODO, payload: value.id })}
          >
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todo;
