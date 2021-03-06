import {Map} from 'immutable';
import {combineReducers} from 'redux-loop';
import AuthStateReducer from '../modules/auth/AuthState';
import NavigationStateReducer from '../modules/navigation/NavigationState';
import GridStateReducer from '../modules/grid/GridState';
import ListStateReducer from '../modules/list/ListState';
import SessionStateReducer, {RESET_STATE} from '../modules/session/SessionState';

const reducers = {
  // Authentication/login state
  auth: AuthStateReducer,

  // navigationState
  navigation: NavigationStateReducer,

  session: SessionStateReducer,

  grid: GridStateReducer,

  list: ListStateReducer

};

// initial state, accessor and mutator for supporting root-level
// immutable data with redux-loop reducer combinator
const immutableStateContainer = Map();
const getImmutable = (child, key) => child ? child.get(key) : void 0;
const setImmutable = (child, key, value) => child.set(key, value);

const namespacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable
);

export default function mainReducer(state, action) {
  if (action.type === RESET_STATE) {
    return namespacedReducer(action.payload, action);
  }

  return namespacedReducer(state || void 0, action);
}
