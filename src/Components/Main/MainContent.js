import React, { Component } from 'react';
import {Router, Route} from 'react-router';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';

class MainContent extends Component {

  render() {
    return (
    	<div className="main">
            <Blog1/>
            <Blog2/>
            <Blog3/>
    	</div>
    );
  }
}

export default MainContent;