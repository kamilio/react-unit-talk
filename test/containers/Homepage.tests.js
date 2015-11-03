import React from 'react';
import assert from 'assert';
import createComponent from 'react-unit';
import sinon from 'sinon';

import Homepage from '../../src/containers/Homepage';
import History from '../../src/components/History';
import UserList from '../../src/components/UserList';
import FocusUser from '../../src/components/FocusUser';

describe('Homepage', () => {
  let component;

  beforeEach(() => {
    component = createComponent.shallow(<Homepage />);
  });

  it('renders the History', () => {
    assert.equal(component.findByComponent(History).length, 1);
    assert.deepEqual(component.findByComponent(History)[0].prop('history'), []);
  });

  it('renders the FocusUser', () => {
    assert.equal(component.findByComponent(FocusUser).length, 1);
  });

  it('renders the UserList', () => {
    assert.equal(component.findByComponent(UserList).length, 1);
  });

  it('changes state when handle function is called', () => {
    assert.equal(component.findByComponent(History)[0].prop('history').length, 0);


    const handleFn = component.findByComponent(UserList)[0].prop('onClick');
    handleFn(5);
    component = component.renderNew();
    assert.equal(component.findByComponent(History)[0].prop('history').length, 1);
    assert.equal(component.findByComponent(History)[0].prop('history')[0], 5);
  });
});
