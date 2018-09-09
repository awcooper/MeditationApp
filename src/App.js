import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './header';
import ButtonComponent from './button-selector';


class App extends Component {
  render() {
    return (
        <div>
          <HeaderComponent/>
          <ButtonComponent/>
        </div>
    );
  }
}

export default App;
