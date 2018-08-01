import { SubmissionError } from 'redux-form/immutable';
import { sessionService } from 'redux-react-session';

import sessionApi from '../api/sessionApi';

export const signUp = user =>
  () =>
    sessionApi.signUp({ user }).then(({ data }) => {
      sessionService.saveUser(data);
    }).catch((err) => {
      throw new SubmissionError(err.errors);
    });
