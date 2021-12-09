import React, { memo } from "react";

import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";

const TodoHeader = memo((props) => {
  return (
    <Grid md={12} xs={12} sm={12} item>
      <Grid container alignItems="center" justify="center">
        <Grid item md={6} style={{ padding: 5, margin: 5 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography>App Todo</Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Grid>
  );
});

export default TodoHeader;
