import React from 'react';
import assert from 'assert';
import createComponent from 'react-unit';
import sinon from 'sinon';

import User from '../../src/components/User';

describe('User', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      firstname: 'Hello',
      lastname: 'Goodbye',
      onClick: sinon.stub(),
    };

    component = createComponent(<User {...props} />);
  });

  it('shows one item', () => {
    const user = component.findByQuery('.user')[0];
    assert(user);
    assert(user.text.includes('Hello'));
    assert(user.text.includes('Goodbye'));
  });

  it('triggers the function on click', () => {
    const user = component.findByQuery('.user')[0];
    user.on('click');
    assert.equal(props.onClick.callCount, 1);
  });
});
