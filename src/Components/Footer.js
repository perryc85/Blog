import React, { Component } from 'react';
import FootNote from './Footer/FootNote';

class Footer extends Component {

  render() {
    return (
    	<footer> 
    		<FootNote footNote = {this.props.footNote}/>
    	</footer>
    );
  }
}

export default Footer;