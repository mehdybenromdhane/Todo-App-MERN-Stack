import React, { useEffect, useState } from "react";
import { Button, Grid, IconButton, TextField } from "@material-ui/core";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function TodoApp() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    var id = localStorage.getItem("id");
    axios
      .get("http://localhost:5000/tache/" + id)
      .then((response) => setDatas(response.data.data.taches));
  }, []);
  console.log(datas);
  const addTodo = (titre, description) => {
    const newTodos = [...datas, { titre, description }];
    setDatas(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...datas];
    newTodos[index].isCompleted = true;
    console.log(newTodos);
    setDatas(newTodos);
  };

  function removeTodo(id, index) {
    var idu = localStorage.getItem("id");

    axios
      .post("http://localhost:5000/tache/remove/" + idu + "/" + id)
      .then((response) => console.log("id", response.data));

    console.log("type of index:", typeof index);
    console.log("in remove todo:", id);
    const newTodos = [...datas];
    newTodos.splice(index, 1);
    setDatas(newTodos);

    console.log(newTodos);
  }

  return (
    // main row
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ backgroundColor: "#ddd" }}
    >
      {/* first column of 12 for header  */}
      <TodoHeader />
      {/* second column for texfield and button */}
      <TodoForm addTodo={addTodo} />
      {/* third coulmn for displaying todolist */}
      {datas.map((todo, index) => (
        <>
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
          <Button onClick={() => removeTodo(todo._id, index)}>
            <IconButton aria-label="Delete a todo">
              <DeleteOutlined />
            </IconButton>
          </Button>

          <Button>
            <IconButton aria-label="Edit a todo">
              <Link to={`/edit/${todo._id}`}>
                <EditOutlined />
              </Link>
            </IconButton>
          </Button>
        </>
      ))}
      {/* end of the grid*/}
    </Grid>
  );
}
