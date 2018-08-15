import Immutable from 'immutable';

import * as types from '../actions/actionTypes';

export const initialState = Immutable.Map({
  currentPosition: { lat: 0, lng: 0 },
  clicked: { click: false },
  clickPosition: { lat: 0, lng: 0 }
});
  
const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MY_POSITION: {
      return state.set('currentPosition', action.position);
    }
    case types.SET_CLICKED_ON: {
      let newState = state.set('clicked', { click: true });
      newState = newState.set('clickPosition', action.position);
      return newState;
    }
    case types.SET_CLICKED_OFF: {
      return state.set('clicked', { click: false });
    }
    default: {
      return state;
    }
  }
};

export default mapReducer;
