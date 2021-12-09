import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AjoutTache from "../services/TacheService";

export default function TodoForm(props) {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  var id = localStorage.getItem("id");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titre) return;

    const TodoData = {
      titre,
      description,
      deadline,
    };
    AjoutTache(TodoData, id);

    props.addTodo(titre, description, deadline);
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
                    Add Todo
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
