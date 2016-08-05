'use strict'

import {Map, fromJS} from 'immutable';

// Initial state
const initialState = Map({
  isLoggedIn: false,
  currentUser: null,
});

// Actions
const USER_LOGIN_SUCCESS = 'AppState/USER_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = 'AppState/USER_LOGIN_ERROR';
const USER_LOGIN_SKIP = 'AppState/USER_LOGIN_SKIP';

export function onUserLoginSuccess(profile, token) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {
      profile: fromJS(profile),
    }
  };
}

export function onUserLoginError(error) {
  return {
    type: USER_LOGIN_ERROR,
    payload: error,
    error: true
  };
}

export function onUserLoginSkip() {
  return {
    type: USER_LOGIN_SKIP
  };
}

// Reducer
export default function AuthStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return state
        .set('isLoggedIn', true)
        .set('currentUser', action.payload.profile)
    case USER_LOGIN_ERROR:
      return initialState;
    case USER_LOGIN_SKIP:
      return state
        .set('isLoggedIn', true)
    default:
      return state;
  }
}