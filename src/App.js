import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring';
import './App.css';
import { Toggle } from 'Utilities';
import User from './User';
import UserProvider from './UserProvider';
import { Card, Modal }  from 'Elements'
import Drag from './Drag';
class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="header">
          </header>
          <Drag />
          <Toggle>
            {({on, toggle}) => (
              <Fragment>
                <button onClick={toggle}>Show / Hide</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Still in modal</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

export default App;
