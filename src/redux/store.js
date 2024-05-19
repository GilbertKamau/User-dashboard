import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './userReducer';
import loanReducer from './loanReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
  users: userReducer,
  loans: loanReducer,
  settings: settingsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
