import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './style.css';

/* API controller */
import getUser from '../../api/user';

/* Components */
import MySelect from '../Select';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: 'Not available',
      userAge: 'Unknown'
    };
  }

  componentDidMount() {
    getUser().then(({ age, name }) => {
      this.setState({
        userAge: age,
        userName: name
      });
    });
  }

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
        <h3>User info</h3>
        <p>Name: {this.state.userName}</p>
      </div>
    );
  }
}

export default App;
