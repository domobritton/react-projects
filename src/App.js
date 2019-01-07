import React, { Component } from 'react';
import './App.css';
import Toggle from './ToggleRPC';
import Portal from './Portal';
import Modal from './Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
        </header>
        <Toggle>
          {({on, toggle}) => (
            <>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>Still in modal</h1>
              </Modal>
            </>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
