import Immutable from 'immutable';

import * as types from '../actions/actionTypes';

export const initialState = Immutable.Map({
    targets: [
        {
          target: {
            id: 3,
            title: 'new target',
            lat: -54.2874,
            lng: 23.28394,
            radius: 234,
            topic_id: 2
          }
        },
        {
          target: {
            id: 4,
            title: 'other target 1',
            lat: -53.2234,
            lng: 43.38473,
            radius: 1,
            topic_id: 1
          }
        },
        {
          target: {
            id: 5,
            title: 'other_target 2',
            lat: -94.5566,
            lng: -94.5566,
            radius: 27384.4,
            topic_id: 2
          }
        }
      ]
});
  
const targetReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CURRENT_USER_TARGETS: {
      return state.set('targets', action.targets);
    }
    default: {
      return state;
    }
  }
};

export default targetReducer;
