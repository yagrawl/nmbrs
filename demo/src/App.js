import React, { Component } from 'react';
import './App.css';
import nmbrs from 'nmbrs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;

    this.setState(
      prevState => ({
        ...prevState,
        input: value
      })
    );
  }

  demoNmbrs() {
    let nmbrsValue = nmbrs(this.state.input);

    return(
      <p>{nmbrsValue}</p>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input
            className={"input-box input-box-option"}
            name={"input"}
            type={"number"}
            value={this.state.input}
            onChange={this.handleChange}
            placeholder={"Enter Input"} />
          {this.demoNmbrs()}
        </header>
      </div>
    );
  }
}

export default App;
