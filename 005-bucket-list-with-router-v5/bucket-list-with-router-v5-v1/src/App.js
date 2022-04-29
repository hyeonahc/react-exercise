import React from 'react';
import { Route, Link } from 'react-router-dom';
import Cat from './Cat';
import Dog from './Dog';
import Home from './Home';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cat/">Cat</Link>
        </li>
        <li>
          <Link to="/dog/">Dog</Link>
        </li>
      </ul>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cat/:cat_name">
        <Cat />
      </Route>
      <Route path="/dog/:dog_name" component={Dog} />
    </div>
  );
};

export default App;
