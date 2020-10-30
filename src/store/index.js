import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import combinedReducers from '../reducers';
import config from '../config';

export const configureStore = () => {
  const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error,
  });

  const create = () => {
    if (config.env === 'development') {
      return createStore(combinedReducers, composeWithDevTools(
        applyMiddleware(
          thunk,
          logger,
        ),
      ));
    }

    return createStore(combinedReducers, applyMiddleware(thunk));
  };

  const store = create();

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(combinedReducers);
    });
  }

  return store;
};

export default configureStore;
