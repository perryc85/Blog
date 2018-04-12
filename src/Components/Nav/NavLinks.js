import React, { Component } from 'react';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class NavLinks extends Component {

  render() {
    return (
        <Router>
        	<div className="links">
                <ul>
                    <li><NavLink to="/#Blog1.js" exact activeStyle={
                        {color:'green'}
                    }>Blog One</NavLink></li>
                    <li><NavLink to="/#Blog2.js" exact activeStyle={
                        {color:'green'}
                    }>Blog Two</NavLink></li>
                    <li><NavLink to="/#Blog3.js" exact activeStyle={
                        {color:'green'}
                    }>Blog Three</NavLink></li>
                </ul>
        	</div>
        </Router>
    );
  }
}

export default NavLinks;