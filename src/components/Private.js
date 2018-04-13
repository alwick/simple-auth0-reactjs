import React, { Component } from 'react';

export default class Private extends Component {
  render() {
    return (
      <div className="App-Content">
        <p className="App-intro">
          Some Super secret information for this user.
        </p>
      </div>
    )
  }
}
