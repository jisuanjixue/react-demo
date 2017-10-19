import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const HelloReact = (props) => {
  const styleObj = {
    color: "green",
    fontSize: "24px",
    backgroundColor: "red",
    width: "500px",
    margin: "0 auto",
  };
  return (
     <div style={styleObj}>
      <h1>hello, {props.name}! age is: {props.age}</h1>
      <p className="white">welcome to React world!...</p>
     </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    }
  }
  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         hello, react!
        </p>
        <input type="test" placeholder="input sth." onChange={this.handleChange.bind(this)} />
        <HelloReact name={this.state.name} age={18} />
      </div>
    );
  }
}

export default App;
