import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentBox';

it('shows a comment box', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find('CommentBox').length).toEqual(1);
  expect(wrapped.find('CommentList').length).toEqual(1);
});