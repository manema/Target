import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';

import { HomeForm } from '../components/user/HomeForm';
import { getMyLocation } from '../utils/helpers';
import { setMyPosition } from '../actions/mapActions';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.getPosition = this.getPosition.bind(this);
    this.state = {
      lat: this.props.currentPosition.lat,
      lng: this.props.currentPosition.lng,
      mapReady: false
    };
  }

  componentDidMount() {
    getMyLocation(this.getPosition, this.handleLocationError);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentPosition !== nextProps.currentPosition) {
      this.setState({
        lat: nextProps.currentPosition.lat,
        lng: nextProps.currentPosition.lng,
        mapReady: true
      });
    }
  }

  getPosition(position) {
    const crd = position.coords;
    const lat = parseFloat(crd.latitude.toFixed(6));
    const lng = parseFloat(crd.longitude.toFixed(6));
    this.props.setMyPosition({ lat, lng });
  }

  handleLocationError(error) {
    alert('You must allow browser gets your location.');
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.warn('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        console.warn('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        console.warn('The request to get user location timed out.');
        break;
      default:
        console.warn('An unknown error occurred.');
    }
  }

  render() {
    return (
      <HomeForm lat={this.state.lat} lng={this.state.lng} mapReady={this.state.mapReady} />
    );
  }
}

HomePage.propTypes = {
  setMyPosition: func.isRequired,
  currentPosition: object.isRequired
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated']),
  currentPosition: state.getIn(['map', 'currentPosition'])
});

const mapDispatch = dispatch => ({
  setMyPosition: position => dispatch(setMyPosition(position)),
});

export default connect(mapState, mapDispatch)(HomePage);
