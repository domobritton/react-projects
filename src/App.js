import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
        </header>
        <Toggle>
          {({on, toggle}) => (
          <>
            {on && <h1>Show Me</h1>}
            <button onClick={toggle}>Show / Hide</button>
          </>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
