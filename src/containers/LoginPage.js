import React from 'react';
import { bool, func, object } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import LoginForm from '../components/user/LoginForm';
import { login, loginFacebook } from '../actions/sessionActions';
import routes from '../constants/routesPaths';

const LoginPage = ({ login, loginFacebook, authenticated, user }) => {
  if (authenticated && !_.isEmpty(user)) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div>
      <LoginForm onSubmit={login} logFacebook={() => loginFacebook} />
    </div>
  );
};

LoginPage.propTypes = {
  login: func.isRequired,
  loginFacebook: func.isRequired,
  authenticated: bool.isRequired,
  user: object.isRequired
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated']),
  user: state.getIn(['session', 'user']).toJS()
});

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user.toJS())),
  loginFacebook: user => dispatch(loginFacebook(user.accessToken))
});

export default connect(mapState, mapDispatch)(LoginPage);
