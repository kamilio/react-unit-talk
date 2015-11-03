import React, { Component } from 'react';

import User from './User'

export default class UserList extends Component {
  render() {
    const { list, onClick } = this.props;

    return (
      <div>
        {list.map((user, index) => <User {...user} key={user.email} onClick={onClick.bind(null, index)} /> )}
      </div>
    );
  }
}
