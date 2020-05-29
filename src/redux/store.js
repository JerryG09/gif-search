import thunk from 'redux-thunk';
import rootReducer from './reducers';
import promise from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const middleware = applyMiddleware(thunk, promise);
const enhancer = composeWithDevTools(middleware);
const persistConfig = {
  key: 'search',
  storage,
  // stateReconciler: hardSet
};

const allReducers = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(allReducers, enhancer);
  let persistor = persistStore(store);
  return { store, persistor };
};