import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { sessionImmutableReducer as session } from 'redux-react-session';

import router from './routerReducer';
import map from './mapReducer';

const rootReducer = combineReducers({
  form,
  session,
  router,
  map
});

export default rootReducer;
