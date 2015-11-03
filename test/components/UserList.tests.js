import React from 'react';
import createComponent from 'react-unit';
import UserList from '../../src/components/UserList';
import User from '../../src/components/User';
import assert from 'assert';

describe('UserList', () => {
  const data = [{
    firstname: 'Hello',
    lastname: 'Monkey',
    email: 'monkey@test.test',
  }];

  const onClick = () => {};

  let component;

  beforeEach(() => {
    component = createComponent.shallow(<UserList list={data} onClick={onClick} />);
  });

  it('renders the User once and pass the rigth props', () => {
    // findByQuery()
    const userComponent = component.findByComponent(User)[0];
    assert(userComponent);
    assert.equal(userComponent.prop('firstname'), 'Hello');
    assert.equal(userComponent.prop('lastname'), 'Monkey');
    assert.equal(userComponent.prop('email'), 'monkey@test.test');
  });
});
