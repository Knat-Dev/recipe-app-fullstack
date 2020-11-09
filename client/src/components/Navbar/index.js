import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  appbar: {
    // position: 'relative',
    // zIndex: theme.zIndex.drawer + 1,
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar elevation={0} position="absolute" className={classes.appbar}>
      <Toolbar></Toolbar>
    </AppBar>
  );
};
