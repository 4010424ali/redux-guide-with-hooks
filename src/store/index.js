import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import gameReducer from './reducer/gameReducer';
import personReuducer from './reducer/personReducer';
import userReducer from './reducer/userReducer';
import thunk from 'redux-thunk';
// Combine the the all reducer
const allReducer = combineReducers({
  game: gameReducer,
  person: personReuducer,
  user: userReducer
});

// Initailze the state
const initailzeState = {
  game: { name: 'football' },
  person: { name: 'Ali hamza Chatha' },
  user: []
};

const middleware = [thunk];

const store = createStore(
  allReducer,
  initailzeState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  //
);

export default store;
