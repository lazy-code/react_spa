import React, { Component } from 'react';
import './App.css';
import { Link, IndexLink } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/stuff" activeClassName="active">Stuff</Link></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;