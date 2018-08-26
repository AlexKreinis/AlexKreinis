import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Body from './Body'
import Top from './Top'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Bot from './Bot'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Top/>
       <Body/>
       <AboutMe/>
       <Contact/>
       <Bot/>
      </div>
    );
  }
}

export default App;
