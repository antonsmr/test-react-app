import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Upload from '../index';
import { configureStore } from '../../../store';

import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

const mockProps = {
  upload: {
    uploading: false,
    uploaded: false,
  },
  uploadVideo: jest.fn(),
};

const store = configureStore();

describe('Upload page', () => {
  it('should be defined', () => {
    expect(Upload).toBeDefined();
  });

  test('should run example code', () => {
    expect(mockProps.upload).toBeDefined;
    expect(mockProps.uploadVideo).toBeDefined;
    expect(mockProps.uploadVideo).toMatchSnapshot();
  });

  it('shallow render test', () => {
    shallow(
      <Router>
        <Provider store={store}>
          <Upload {...mockProps} />
        </Provider>
      </Router>,
    );
  });
});
