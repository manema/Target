import * as types from './actionTypes';

import targetApi from '../api/targetApi';

const getTargets = targets =>
  ({
    type: types.GET_CURRENT_USER_TARGETS,
    targets
  });

export const getUserTargets = () => dispatch =>
  targetApi.getCurrentUserTargets().then((targets) => {
    dispatch(getTargets(targets.targets));
  }).catch((err) => {
    throw err;
  });
