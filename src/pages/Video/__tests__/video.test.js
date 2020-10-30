import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Video from '../index';
import { configureStore } from '../../../store';

import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

const mockProps = {
  video: {
    fetching: false,
    fetched: false,
    list: [],
  },
  getVideoList: jest.fn(),
};

const store = configureStore();

describe('Video page', () => {
  it('should be defined', () => {
    expect(Video).toBeDefined();
  });

  test('should run example code', () => {
    expect(mockProps.video).toBeDefined;
    expect(mockProps.getVideoList).toBeDefined;
    expect(mockProps.getVideoList).toMatchSnapshot();
  });

  it('shallow render test', () => {
    shallow(
      <Router>
        <Provider store={store}>
          <Video {...mockProps} />
        </Provider>
      </Router>,
    );
  });
});
