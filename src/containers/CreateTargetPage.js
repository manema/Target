
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, func, object } from 'prop-types';

import CreateTargetForm from '../components/user/CreateTargetForm';
import { getTopics, createTarget, getUserTargets } from '../actions/targetActions';
import { setClickedOff } from '../actions/mapActions';

class CreateTargetPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.newTarget = this.newTarget.bind(this);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.props.getTopics();
  }
  
  componentWillReceiveProps(nextProps) {
    if ((this.props.topics !== nextProps.topics)) {
      const { topics } = nextProps;
      const dataAux = [];
      for (let value of topics) {
        dataAux.push(value.topic);
      }
      this.setState({
        data: dataAux
      });
    }
  }

  newTarget(data) {
    data = data.toJS();
    const { clickPosition } = this.props;
    data.lat = clickPosition.lat;
    data.lng = clickPosition.lng;
    const nTarget = { target: data }
    this.props.createTarget(nTarget);
    this.props.setClickedOff();
    this.props.getUserTargets();
  }

  render() {
    return(
      <CreateTargetForm data={this.state.data} onSubmit={this.newTarget} />
    )
  }
}

CreateTargetPage.propTypes = {
  getUserTargets: func.isRequired,
  createTarget: func.isRequired,
  setClickedOff: func.isRequired,
  getTopics: func.isRequired,
  clickPosition: object,
  topics: array
}

const mapState = state => ({
  topics: state.getIn(['target', 'topics']),
  clickPosition: state.getIn(['map', 'clickPosition'])
});

const mapDispatch = dispatch => ({
    getUserTargets: () => dispatch(getUserTargets()),
    createTarget: data => dispatch(createTarget(data)),
    setClickedOff: () => dispatch(setClickedOff()),
    getTopics: () => dispatch(getTopics())
});

export default connect(mapState, mapDispatch)(CreateTargetPage);
