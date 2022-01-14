import React, { useContext, useState } from "react";
import { Input, Button, InputGroup } from "reactstrap";
import { TodoContext } from "../context/TodoContext";
import { v4 } from "uuid";
import { ADD_TODO } from "../context/action.types";

function TodoForm() {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todoString === "") return alert("Please enter a todo");
    const todo = {
      todoString,
      id: v4(),
    };
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
    setTodoString("");
  };
  return (
    <InputGroup size="lg">
      <Input
        type="text"
        placeholder="Your next Todo"
        name="todo"
        id="todo"
        onChange={(e) => setTodoString(e.target.value)}
        value={todoString}
      />
      <Button color="warning" onClick={onSubmitHandler}>
        Add
      </Button>
    </InputGroup>
  );
}

export default TodoForm;
