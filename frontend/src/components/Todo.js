import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Checkbox,
  Button,
} from "@material-ui/core";

import { DeleteOutlined } from "@material-ui/icons";
import getTachesByUser from "../services/TacheService";
import axios from "axios";

export default function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <Grid item md={12} xs={12} sm={12}>
      <Grid container alignItems="center" justify="center">
        <Grid md={6} item style={{ padding: 5 }}>
          <Paper>
            <List>
              <ListItem>
                <Checkbox checked={todo.isCompleted ? true : false} />

                <ListItemText primary={todo.titre} />
                <ListItemText primary={todo.description} />
                <ListItemText primary={todo.deadline} />

                <Button
                  size="small"
                  variant="outlined"
                  style={{ marginRight: "14px" }}
                  onClick={() => completeTodo(index)}
                >
                  Complete
                </Button>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
