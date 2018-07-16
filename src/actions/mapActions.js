import * as types from './actionTypes';

export function setMyPosition(position) {
  return {
    type: types.SET_MY_POSITION,
    position
  };
}