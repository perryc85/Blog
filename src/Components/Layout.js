import React, { Component } from 'react';
import Main from './Main';
import Footer from "./Footer";
import Header from "./Header";
import Nav from './Nav';


class Layout extends Component {
  render() {
  	const title = "Charlie's Point 2018!";
  	const footNote = "© 2018 | Charlie's Point.com";
    return (
      <div>
      	<Header title ={title}/>
      	<Main/>
      	<Nav/>
      	<Footer footNote = {footNote}/>
      </div>
    );
  }
}

export default Layout;