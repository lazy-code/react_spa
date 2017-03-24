import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home';
import Stuff from './components/Stuff';
import Contact from './components/Contact';

import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/stuff' component={Stuff} />
      <Route path='/contact' component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);