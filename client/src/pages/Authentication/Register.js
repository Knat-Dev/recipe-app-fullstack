import React from 'react';
import { Button, FormControl, Paper, Typography } from '@material-ui/core';

export const Register = () => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 450,
      }}
    >
      <FormControl margin="normal">
        <Typography variant="h5" align="center" color="primary">
          Register
        </Typography>
      </FormControl>

      <FormControl margin="normal" fullWidth>
        <Button color="primary" variant="contained" onClick={() => {}}>
          VERIFY
        </Button>
      </FormControl>
    </Paper>
  );
};
