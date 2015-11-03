import React from 'react';
import assert from 'assert';
import sinon from 'sinon';

import createComponent from 'react-unit';

import User from '../../src/components/User';

describe('User', () => {
  let component;
  let onClickStub;

  beforeEach(() => {
    onClickStub = sinon.stub();
    const props = {
      firstname: 'hello',
      lastname: 'monkey',
      email: 'hello@test.test',
      onClick: onClickStub,
    }

    component = createComponent(<User {...props} />);
  });

  it('shows the firstname and lastname', () => {
    const user = component.findByQuery('.user')[0];
    assert(user);
    assert(user.text.includes('hello'));
    assert(user.text.includes('monkey'));
  });

  it('triggers the callback on click', () => {
    const user = component.findByQuery('.user')[0];
    user.on('click');
    assert.equal(onClickStub.callCount, 1);
  });
});
