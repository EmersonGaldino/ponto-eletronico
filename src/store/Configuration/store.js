import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducers from './combinedReducers';
import rootSaga from './rootSaga';
import createSaga from 'redux-saga';
import { loadState, saveState } from '../../common/Utils';
import throttle from 'lodash.throttle';

const sagaMiddleware = createSaga();

const persistedState = loadState();

const store = createStore(
  combinedReducers,
  persistedState,
  compose(applyMiddleware(sagaMiddleware))
);

store.subscribe(
  throttle(() => {
    saveState({
      ...store.getState(),
    });
  }, 1000)
);

sagaMiddleware.run(rootSaga);

export { store };
