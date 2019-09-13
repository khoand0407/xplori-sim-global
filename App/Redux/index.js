import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import configureStore from './CreateStore';
import rootSaga from '../Sagas';
import ReduxPersist from '../Config/ReduxPersist';

const navReducer = require('./NavigationRedux').reducer;
const githubReducer = require('./GithubRedux').reducer;
const searchReducer = require('./SearchRedux').reducer;

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: navReducer,
  github: githubReducer,
  search: searchReducer,
});

export default () => {
  let finalReducers = reducers;
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  /* eslint-disable prefer-const */
  let { store, sagasManager, sagaMiddleware } = configureStore(
    finalReducers,
    rootSaga,
  );

  if (module.hot) {
    module.hot.accept(() => {
      /* eslint-disable import/no-self-import */
      /* eslint-disable global-require */
      const nextRootReducer = require('./').reducers;
      store.replaceReducer(nextRootReducer);

      /* eslint-disable global-require */
      const newYieldedSagas = require('../Sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas);
      });
    });
  }

  return store;
};
