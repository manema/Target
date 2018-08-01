import Immutable from 'immutable';

import * as types from '../actions/actionTypes';

export const initialState = Immutable.Map({
  currentPosition: { lat: 0, lng: 0 }
});
  
const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MY_POSITION: {
      return state.set('currentPosition', action.position);
    }
    default: {
      return state;
    }
  }
};

export default mapReducer;
