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

const newTarget = target =>
  ({
    type: types.CREATE_NEW_TARGET,
    target
  });

export const createTarget = target => dispatch =>
  targetApi.createTarget(target).then((rTarget) => {
    dispatch(newTarget(rTarget));
  }).catch((err) => {
    throw err;
  });

const getTopic = topics =>
  ({
    type: types.GET_TOPICS,
    topics
  });

export const getTopics = () => dispatch =>
  targetApi.getTopics().then((topics) => {
    dispatch(getTopic(topics.topics));
  }).catch((err) => {
    throw err;
  });
