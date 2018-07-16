import { Iterable } from 'immutable';
import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';

export const parseInputErrors = (error) => {
  if (!error) {
    return;
  }
  if (Iterable.isIterable(error)) {
    return error.first();
  } else if (Array.isArray(error)) {
    return error[0];
  }
  return error;
};

export const applyQueryParams = (url, params = {}) => {
  if (isEmpty(params)) {
    return url;
  }
  const queryParams = queryString.stringify(params);
  return `${url}?${queryParams}`;
};

export const getMyLocation = (success, error) => navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 });