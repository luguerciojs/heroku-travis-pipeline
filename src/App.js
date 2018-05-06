import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* Components */
import MySelect from './Select';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Testing staging</h1>
          <h1 className="App-title">Crap del bueno hermano</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Aca agrega tu codigo que seguro esta re robado.
        </p>
        <MySelect/>
      </div>
    );
  }
}

export default App;
