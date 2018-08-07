import Immutable from 'immutable';

import * as types from '../actions/actionTypes';

export const initialState = Immutable.fromJS({
  user: {
    id: '0',
    email: '',
    firstName: '',
    lastName: '',
    fullName: '',
    username: '',
    gender: '',
    avatar: {
      originalUrl: null,
      normalUrl: null,
      smallThumbUrl: null
    }
}
});
  
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CURRENT_USER_PROFILE: {
      return state.set('user', Immutable.fromJS(action.user));
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;
