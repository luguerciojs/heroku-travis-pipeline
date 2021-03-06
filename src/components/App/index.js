import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './style.css';

/* API controller */
import getUser from '../../api/user';

/* Components */
import MySelect from '../Select';
import Title from '../Title';

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
        <Title />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hola que tal</h1>
        </header>
        <p className="App-intro">
          Zarpado de argentino.
        </p>
        <MySelect/>
        <h3>User info</h3>
        <p>Name: {this.state.userName}</p>
        <p>Age: {this.state.userAge}</p>
      </div>
    );
  }
}

export default App;
