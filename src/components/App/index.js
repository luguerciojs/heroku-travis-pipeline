import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './style.css';

/* Components */
import MySelect from '../Select';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Crap del bueno hermano</h1>
        </header>
        <p className="App-intro">
          Zarpado de argentino.
        </p>
        <MySelect/>
      </div>
    );
  }
}

export default App;
