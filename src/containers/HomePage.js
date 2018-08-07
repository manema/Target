import React, { Component } from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { HomeForm } from '../components/user/HomeForm';
import routes from '../constants/routesPaths';

class HomePage extends Component {
  componentDidMount() {
    if (!this.props.authenticated) {
      return <Redirect to={routes.login} />;
    }
  }

  render() {
    return (
      <HomeForm />
    );
  }
}

HomePage.propTypes = {
  authenticated: bool.isRequired
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated']),
  currentPosition: state.getIn(['map', 'currentPosition'])
});

export default connect(mapState)(HomePage);
