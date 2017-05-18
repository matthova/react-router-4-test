import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import './App.css';

const Links = () => (
  <nav>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
  </nav>
);

const Header = ({ match }) => (
  <div className="header">
    <Route
      path="/:page"
      render={({ match }) => (
        <h1>Page: {match.params.page} header</h1>
      )}
    />
  </div>
);

const Content = ({ match }) => (
  <div className="content">
    <Route
      path="/:page"
      render={({ match }) => (
        <p>Page: {match.params.page} content</p>
      )}
    />
  </div>
);

const App = (props) => (
  <Router>
    <div>
      <Links />
      <Header />
      <Content />
    </div>
  </Router>
);

export default App;
