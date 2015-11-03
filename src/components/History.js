import React, { Component } from 'react';
import HistoryItem from './HistoryItem'

export default class History extends Component {
  render() {
    const { history, users, onClick } = this.props;

    return (
      <div>
        {history.map((id, counter) => <HistoryItem {...users[id]} onClick={onClick.bind(null, id)} key={counter}/>)}
      </div>
    );
  }
}
