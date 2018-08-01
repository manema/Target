import { SubmissionError } from 'redux-form/immutable';
import { sessionService } from 'redux-react-session';

import sessionApi from '../api/sessionApi';

export const login = user =>
  () =>
    sessionApi.login({ user }).then(({ data }) => {
      sessionService.saveUser(data);
    }).catch((err) => {
      throw new SubmissionError({
        _error: err.errors
      });
    });

export const loginFacebook = token =>
  () =>
    sessionApi.loginFacebook({ accessToken: token }).then(({ userResponse }) => {
      sessionService.saveUser(userResponse);
    }).catch((err) => {
      throw (err);
    });

export const logout = () => {
  sessionApi.logout().then(() => {
    sessionService.deleteSession();
    sessionService.deleteUser();
  }).catch((err) => {
    throw (err);
  });
};
