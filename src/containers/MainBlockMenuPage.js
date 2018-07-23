import React, { Component } from 'react';
import { func, array } from 'prop-types';
import { connect } from 'react-redux';

import { getUserTargets } from '../actions/targetActions';
import MainBlockMenu from '../components/user/MainBlockMenu';

class MainBlockMenuPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      targets: this.props.targets,
      readyToDisplay: false
    };
  }
    
  componentWillMount() {
    this.props.getUserTargets();
  }
    
  componentWillReceiveProps(nextProps) {
    if (this.props.targets !== nextProps.targets) {
      this.setState({
        targets: nextProps.targets,
        readyToDisplay: true
      });
    }
  }

  render() {
    return (<MainBlockMenu targets={this.state.targets} readyToDisplay={this.state.readyToDisplay} />);
  }
}

MainBlockMenuPage.propTypes = {
  targets: array.isRequired,
  getUserTargets: func.isRequired
};

const mapState = state => ({
  targets: state.getIn(['target', 'targets'])
});

const mapDispatch = dispatch => ({
  getUserTargets: () => dispatch(getUserTargets()),
});

export default connect(mapState, mapDispatch)(MainBlockMenuPage);
