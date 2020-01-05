import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import MovieDetails from '../pages/MovieDetails';
import NavBar from '../NavBar';

function App() {
  return (
    <Router >
      <div>
        <NavBar text="Dreamy Movies App" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:movieId" component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;