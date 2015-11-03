import React, { Component } from 'react';

import Gravatar from 'react-gravatar'

export default class FocusUser extends Component {
  render() {
    const { firstname, lastname, email} = this.props;

    if (!email) {
      return <div />
    }

    return (
      <div>
        <h1>{firstname} {lastname}</h1>
        <Gravatar email={email} />
      </div>
    );
  }
}
