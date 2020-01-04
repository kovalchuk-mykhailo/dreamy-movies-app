import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../App.css';
import Header from './Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Movie from './pages/Movie';

function App() {
  return (
    <Router >
      <div className="App">
        <Header text="Dreamy Movies App" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>

  )
}

export default App;