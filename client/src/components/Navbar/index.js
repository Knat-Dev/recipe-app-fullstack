import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  appbar: {},
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar elevation={0} position="relative" className={classes.appbar}>
      <Toolbar></Toolbar>
    </AppBar>
  );
};
