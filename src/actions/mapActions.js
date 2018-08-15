import * as types from './actionTypes';

export function setMyPosition(position) {
  return {
    type: types.SET_MY_POSITION,
    position
  };
}

export function setClickedOn(position) {
  return {
    type: types.SET_CLICKED_ON,
    position
  };
}

export function setClickedOff() {
  return {
    type: types.SET_CLICKED_OFF
  };
}
