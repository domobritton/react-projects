import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC';
import Portal from './Portal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
        </header>
        <Toggle>
          {({on, toggle}) => (
          <>
            {on && <h1>Show Me</h1>}
            <button onClick={toggle}>Show / Hide</button>
            <Portal>
              {on && <h1>Hi, I'm in a portal!</h1>}
            </Portal>
          </>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
