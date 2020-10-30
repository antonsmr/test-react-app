import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from '../index';
import { configureStore } from '../../../store';

import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

const store = configureStore();

describe('Home page', () => {
  it('should be defined', () => {
    expect(Home).toBeDefined();
  });

  it('shallow render test', () => {
    shallow(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>,
    );
  });
});
