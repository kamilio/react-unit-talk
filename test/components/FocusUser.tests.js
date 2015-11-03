import React from 'react';
import createComponent from 'react-unit';
import assert from 'assert';

import Gravatar from 'react-gravatar'

import FocusUser from '../../src/components/FocusUser';

describe('FocusUser', () => {
  let component;
  const props = {
    user: {
      firstname: 'Hello',
      lastname: 'Monkey',
      email: 'monkey@test.test',
    }
  }

  describe('given user', () => {
    beforeEach(() => {
      component = createComponent.shallow(<FocusUser {...props.user} />);
    });


    it('renders the gravatar', () => {
      assert.equal(component.findByComponent(Gravatar).length, 1)
    });

    it('renders the fullname', () => {
      assert(component.findByQuery('h1')[0]);
      assert.equal(component.findByQuery('h1')[0].text, 'Hello   Monkey');
    });
  });

  describe('no user', () => {
    it('does not render stuff', () => {
      component = createComponent.shallow(<FocusUser />);
      assert.equal(component.findByComponent(Gravatar).length, 0)
    });
  });

});
