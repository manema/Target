import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';


import { getMyLocation } from '../../utils/helpers';
import { setMyPosition } from '../../actions/mapActions';
import MapComponent from '../common/MapComponent';

class Map extends Component {
  constructor(props, context) {
    super(props, context);
    this.getPosition = this.getPosition.bind(this);
    const { lat, lng } = this.props.currentPosition;
    this.state = {
      lat: lat,
      lng: lng,
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
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log('You must allow browser gets your location.');
        break;
      case error.POSITION_UNAVAILABLE:
        console.log('Position currently unavailable.');
        break;
      case error.TIMEOUT:
        console.log('The request to get user location timed out.');
        break;
      default:
        console.log('An unknown error occurred.');
    }
  }

  render() {
    const { lat, lng, mapReady } = this.state;
    return (
      <MapComponent lat={lat} lng={lng} mapReady={mapReady} />
    );
  }
}

Map.propTypes = {
  setMyPosition: func.isRequired,
  currentPosition: object.isRequired,
};

const mapState = state => ({
  currentPosition: state.getIn(['map', 'currentPosition'])
});

const mapDispatch = dispatch => ({
  setMyPosition: position => dispatch(setMyPosition(position)),
});

export default connect(mapState, mapDispatch)(Map);
