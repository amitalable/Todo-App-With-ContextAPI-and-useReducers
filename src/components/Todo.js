import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import { TodoContext } from "../context/TodoContext";
import { REMOVE_TODO } from "../context/action.types";

const Todo = () => {
  const { todos, dispatch } = useContext(TodoContext);
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
