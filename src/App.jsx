import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const App = (props) => (
  <Router>
    <div>
      <Route
        // parsing a date like http://localhost:3000/02-28-1987.html
        path="/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)"
        render={({ match }) => (
          <h1>
            PAGE: {match.params.a} <br />
            SUBPAGE: {match.params.b}
          </h1>
        )}
      />
    </div>
  </Router>
);

export default App;
