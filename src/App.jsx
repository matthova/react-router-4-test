import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  StaticRouter,
  NativeRouter,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';

const LinksRoutes = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route path="/about" render={() => <h1>About</h1>} />
  </div>
);

const forceRefresh = () => {
  console.log(new Date());
  return true;
};

// Standard, go-to router
const BrowserRouterApp = () => (
  <BrowserRouter forceRefresh={forceRefresh()}>
    <LinksRoutes />
  </BrowserRouter>
);

// For older browsers
const HashRouterApp = () => (
  <HashRouter hashType="noslash">
    <LinksRoutes />
  </HashRouter>
);

// For testing
const MemoryRouterApp = () => (
  <MemoryRouter
    initialEntries={['/', '/about']}
    initialIndex={1}
  >
    <LinksRoutes />
  </MemoryRouter>
);

// For server rendering
const StaticRouterApp = () => (
  <StaticRouter location="/about" context={{}}>
    <LinksRoutes />
  </StaticRouter>
);

// For React Native
const NativeRouterApp = () => (
  <NativeRouter location="/about" context={{}}>
    <LinksRoutes />
  </NativeRouter>
);

export default StaticRouterApp;
