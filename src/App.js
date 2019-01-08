import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring';
import './App.css';
import { Toggle } from 'Utilities';
import User from './User';
import UserProvider from './UserProvider';
import { Card }  from 'Elements'
import { Modal } from 'Elements'
class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="header">
          </header>
          <User />
          <Toggle>
            {({on, toggle}) => (
              <Fragment>
                <button onClick={toggle}>Show / Hide</button>
                {/* <Transition
                  items={on}
                  from={{ opacity: 0, bg: '#82d8d8', height: '0px'}}
                  enter={{ opacity: 1, bg: '#524763', height: '200px'}}
                  leave={{ opacity: 0, bg: '#82d8d8', height: '0px'}}
                >
                {on =>
                  on && (props => 
                  <Card style={{
                    opacity: props.opacity,
                    background: props.bg,
                    overflow: 'hidden',
                    height: props.height
                  }}>
                    <h1>Show Me</h1>
                    <h3>{props.bg}</h3>
                  </Card>
                  )
                }
                </Transition> */}
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
