import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from './styles.module.css';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Movie from '../pages/Movie';
import NavBar from '../NavBar';

function App() {
  return (
    <Router >
      <div className={styles.App}>
        <NavBar text="Dreamy Movies App" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;