import React, { Component } from 'react';
import Homepage from './containers/Homepage'

export default class App extends Component {
  render() {
    return (
        <div>
          <h1>Awesome People here at JS Meetup Stuttgart</h1>
          <Homepage />
        </div>
    );
  }
}
