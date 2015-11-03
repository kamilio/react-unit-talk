import React from 'react';
import assert from 'assert';
import createComponent from 'react-unit';
import sinon from 'sinon';

import History from '../../src/components/History';
import HistoryItem from '../../src/components/HistoryItem';

describe('History', () => {
  let component;

  const data = [{
    firstname: 'Hello',
    lastname: 'Monkey',
    email: 'monkey@test.test',
  }];

  beforeEach(() => {
    const props = {
      users: data,
      history: [0, 0],
      onClick: () => {},
    }

    component = createComponent.shallow(<History {...props} />);
  });

  it('shows the history items', () => {
    const historyComponents = component.findByComponent(HistoryItem);
    assert.equal(historyComponents.length, 2);
    assert.equal(historyComponents[0].prop('firstname'), 'Hello');
    assert.equal(historyComponents[1].prop('firstname'), 'Hello');
  });
});
