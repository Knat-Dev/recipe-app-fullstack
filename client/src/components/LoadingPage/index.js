import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

export const LoadingPage = () => {
  return (
    <Grid
      container
      style={{ height: '100vh' }}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <CircularProgress size={50} color="primary" />
      </Grid>
    </Grid>
  );
};
