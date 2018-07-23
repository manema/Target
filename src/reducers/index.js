import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { sessionImmutableReducer as session } from 'redux-react-session';

import router from './routerReducer';
import map from './mapReducer';
import profile from './profileReducer';
import target from './targetReducer';

const rootReducer = combineReducers({
  form,
  session,
  router,
  map,
  profile,
  target
});

export default rootReducer;
