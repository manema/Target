import React from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from '../components/user/LoginForm';
import { login, loginFacebook } from '../actions/sessionActions';
import routes from '../constants/routesPaths';

const LoginPage = ({ login, loginFacebook, authenticated }) => {
  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div>
      <LoginForm onSubmit={login} logFacebook={loginFacebook} />
    </div>
  );
};

LoginPage.propTypes = {
  login: func.isRequired,
  loginFacebook: func.isRequired,
  authenticated: bool.isRequired,
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated'])
});

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user.toJS())),
  loginFacebook: user => dispatch(loginFacebook(user.accessToken))
});

export default connect(mapState, mapDispatch)(LoginPage);
