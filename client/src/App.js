import { Grid, makeStyles } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Login } from './pages/Authentication/Login';
import { Register } from './pages/Authentication/Register';

const useStyles = makeStyles((theme) => ({
  fullPage: {
    height: '100vh',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.fullPage}>
      <BrowserRouter>
        <Grid item>
          <Grid item>
            <Navbar />
          </Grid>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Grid>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
