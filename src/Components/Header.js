import React, { Component } from 'react';
import Title from './Header/Title';

class Header extends Component {

  render() {

    return (
    	<div>
    	 <header> 
    	 	<Title title={this.props.title}/>
    	 </header>
    	</div> 
    );
  }
}

export default Header;