import React, { Component } from 'react';

export default class HistoryItem extends Component {
  render() {
    const { firstname, lastname, onClick } = this.props;

    return (
      <div className="user" onClick={onClick}>
        {firstname} {lastname}
      </div>
    );
  }
}
