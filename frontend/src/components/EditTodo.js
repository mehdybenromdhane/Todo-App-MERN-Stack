import React, { useEffect, useState } from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditTodo(props) {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  var str = window.location.pathname;

  let id = str.slice(6);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/tache/" + id)
  //     .then((response) => setDatas(response.data.data.taches));
  // }, []);
  const handleSubmit = (e) => {
    console.log("id", id);
    e.preventDefault();
    if (!titre) return;

    const TodoData = {
      titre,
      description,
      deadline,
    };

    axios
      .put("http://localhost:5000/tache/modifier/" + id, TodoData)
      .then((response) => console.log("id", response.data));

    setTitre("");
    setDescription("");
    setDeadline("");
  };

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Grid item md={12}>
        <Grid container alignItems="center" justify="center">
          <Grid item md={6} style={{ padding: 5 }}>
            <Paper style={{ padding: 16 }}>
              <Grid container>
                <Grid item md={10} style={{ paddingRight: 10 }}>
                  <TextField
                    style={{ marginTop: 20 }}
                    placeholder="Titre"
                    fullWidth
                    defaultValue="rrr"
                    value={titre}
                    onChange={(e) => setTitre(e.target.value)}
                  />
                  <TextField
                    style={{ marginTop: 20 }}
                    placeholder="Description"
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <TextField
                    style={{ marginTop: 20 }}
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    id="datetime-local"
                    label="Deadline"
                    type="datetime-local"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item md={2}>
                  <Button variant="contained" type="submit" color="primary">
                    Edit Todo
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
