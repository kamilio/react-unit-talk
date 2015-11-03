import React, { Component } from 'react';

import { getState, setState } from '../state';

import UserList from '../components/UserList';
import FocusUser from '../components/FocusUser';
import History from '../components/History';

// Smart component
export default class Homepage extends Component {
  state = getState();

  handleUserClick(id) {
    const state = this.state;

    setState({
      ...state,
      currentUser: id,
      history: state.history.concat(id),
    });

    this.setState(getState());
  }

  render() {
    const { users, currentUser, history } = this.state;

    return (
      <div className="pure-g">
        <div className="users pure-u-1-3">
          <h2>Users</h2>
          <UserList list={users} onClick={this.handleUserClick.bind(this)}/>
        </div>
        <div className="history pure-u-1-3">
          <h2>History</h2>
          <History history={history} users={users} onClick={this.handleUserClick. bind(this)}/>
        </div>

        <div className="current pure-u-1-3">
          <h2>Selected User</h2>
          <FocusUser {...users[currentUser]} />
        </div>
      </div>
    );
  }
}
