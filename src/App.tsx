import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TestComp, TestCompWithStyle } from './TestComp';

// ok
class TestCompChild extends TestComp<{ someVal: string }> {}

// Type error: Type 'ComponentType<Pick<TestCompWithStyleProps<{}>, "text" | "onClick"> & StyledComponentProps<"typo">>' is not a constructor function type.  TS2507
class TestCompWithStyleChild extends TestCompWithStyle<{ someVal: string }> {}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <TestCompChild
          classes={{ typo: 'toto' }}
          text="Hello from comp"
          onClick={val => {
            val.someVal; // ok
            val.test; // error type as expected
          }}
        />
      </div>
    );
  }
}

export default App;
