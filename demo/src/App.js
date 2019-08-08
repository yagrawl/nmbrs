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
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus(e) {
    e.target.select();
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
          <p className="title"><span className="main-title">NMBRS</span> | demo</p>
          <p className="details">
            An <a className="hover nodec"
                  href="https://www.npmjs.com/package/nmbrs"
                  target="_blank"
                  rel="noopener noreferrer"> npm module </a>
            &nbsp;to prettify numbers.
          </p>
          <input
            className={"input-box input-box-option"}
            name={"input"}
            type={"number"}
            value={this.state.input}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            placeholder={"Enter a Number"} />
          {this.demoNmbrs()}
          <Twitter title="NMBRS - An npm module to prettify large numbers."
                   url="https://github.com/yagrawl/nmbrs" />
        </header>
      </div>
    );
  }
}

export default App;
