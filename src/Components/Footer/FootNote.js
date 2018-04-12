import React, { Component } from 'react';

class FootNote extends Component {

  render() {
    return (
    	<div className="footer-title">
    		<p>{this.props.footNote}</p>
    	</div>
    );
  }
}

export default FootNote;