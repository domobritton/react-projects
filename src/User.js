import React, { Component } from 'react'
import { UserContext } from './UserContext';

export default class User extends Component {
  render() {
    return (
        <UserContext.Consumer>
            {(context) => (
                <div>
                    <h1>{context.user.name}</h1>
                    <h4>{context.user.email}</h4>
                </div>
            )}
        </UserContext.Consumer>
    )
  }
}
