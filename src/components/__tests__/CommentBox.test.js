import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

describe('CommentBox', () => {
  
  let wrapped;

  beforeEach(() => {
    wrapped = mount(<CommentBox />);
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
  });

  describe('the textarea', () => {
    beforeEach(() => {
      wrapped.find('textarea').simulate('change', {
        // in the actual textarea the target.value is being changed to force a string to be placed in 'new comment'
        target: {
          value: 'new comment'
        }
      });

      wrapped.update();
    });

    it('has a text area that uses can type in', () => {
      // find the prop value in the actual file and check to see the value is what the mock value was
      expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when form is submitted, text area gets emptied', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
      // simulate that the submit button empties the value prop
      wrapped.find('form').simulate('submit');
      wrapped.update();

      expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
  });
});