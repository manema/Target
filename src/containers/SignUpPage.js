import React from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signUp } from '../actions/userActions';
import SignUpForm from '../components/user/SignUpForm';
import routes from '../constants/routesPaths';

const signUpPage = ({ signUp, authenticated }) => {
  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div>
      <SignUpForm onSubmit={signUp} />
    </div>
  );
};

signUp.propTypes = {
  signUp: func.isRequired,
  authenticated: bool.isRequired
};

const mapState = state => ({
    authenticated: state.getIn(['session', 'authenticated'])
});

const mapDispatch = dispatch => ({
  signUp: user => dispatch(signUp(user.toJS()))
});

export default connect(mapState, mapDispatch)(signUpPage);
