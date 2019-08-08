import React, { Component } from 'react';
import nmbrs from 'nmbrs';
import Twitter from './twitter';

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
      <p className="number">{nmbrsValue}</p>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="title">nmbrs | demo</p>
          <input
            className={"input-box input-box-option"}
            name={"input"}
            type={"number"}
            value={this.state.input}
            onChange={this.handleChange}
            placeholder={"Enter Input"} />
          {this.demoNmbrs()}
          <Twitter title="NMBRS - An npm module to prettify large numbers."
                   url="https://github.com/yagrawl/nmbrs" />
        </header>
      </div>
    );
  }
}

export default App;
