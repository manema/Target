import * as types from './actionTypes';

import profileApi from '../api/profileApi';

const getUserProfile = user => 
  ({ 
    type: types.GET_CURRENT_USER_PROFILE,
    user
  });

export const getCurrentUserProfile = id => dispatch =>  
  profileApi.getCurrentUserProfile(id).then(({ user }) => {
    dispatch(getUserProfile(user));
  }).catch((err) => {
    throw err;
  });

