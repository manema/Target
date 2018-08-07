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

const updateUserProfile = user =>
  ({
    type: types.UPDATE_CURRENT_USER_PROFILE,
    user
  });

export const updateCurrentUserProfile = (id, userP) => dispatch =>
  profileApi.updateCurrentUserProfile(id, userP).then(({ user }) => {
    dispatch(updateUserProfile(user));
  }).catch((err) => {
    throw err;
  });
