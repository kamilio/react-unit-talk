// default state

import users from './users';

const defaultState = {
  history: [],
  users: users
}

let state = defaultState;

export function setState(newState) {
  state = newState;
  console.log(state);
  return state;
}

export function getState() {
  return state;
}
