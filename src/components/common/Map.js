import React, { Component } from 'react';
import { array, func, object } from 'prop-types';
import { connect } from 'react-redux';
import { Marker } from 'react-google-maps';

import { getMyLocation } from '../../utils/helpers';
import { setMyPosition, setClickedOn } from '../../actions/mapActions';
import MapComponent from '../common/MapComponent';

class Map extends Component {
  constructor(props, context) {
    super(props, context);
    this.getPosition = this.getPosition.bind(this);
    const { targets } = this.props;
    console.log(targets);
    const tList = [];
    targets.map(elem => tList.push(<Marker position={{ lat: elem.target.lat, lng: elem.target.lng }} />));
    
    // const refs = {};
    this.state = {
      lat: this.props.currentPosition.lat,
      lng: this.props.currentPosition.lng,
      Marker: tList,
      mapReady: false,
      /*
      bounds: null,
      center: null,
      onMapMounted: (ref) => {
        refs.map = ref;
      },
      onBoundsChanged: () => {
        this.setState({
          bounds: refs.map.getBounds(),
          center: refs.map.getCenter(),
        });
        console.log(this.state.center);
      }
      */
    };
    // console.log(this.state.center);
  }

  componentDidMount() {
    getMyLocation(this.getPosition, this.handleLocationError);
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.currentPosition !== nextProps.currentPosition) || (this.props.targets !== nextProps.targets)) {
      const { targets } = nextProps;
      const tList = [];
      targets.map(elem => tList.push(<Marker position={{ lat: elem.target.lat, lng: elem.target.lng }} />));
      this.setState({
        lat: nextProps.currentPosition.lat,
        lng: nextProps.currentPosition.lng,
        Marker: tList,
        mapReady: true
      });
    }
    if ((this.props.targets.length) < (nextProps.targets.length)) {
      const { clickPosition } = nextProps;
      const latAux = clickPosition.lat;
      const lngAux = clickPosition.lng;
      this.setState({
        lat: latAux,
        lng: lngAux,
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
        // alert('You must allow browser gets your location.');
        break;
      case error.POSITION_UNAVAILABLE:
        alert('Position currently unavailable.');
        break;
      case error.TIMEOUT:
        alert('The request to get user location timed out.');
        break;
      default:
        alert('An unknown error occurred.');
    }
  }

  render() {
    return (
      <MapComponent 
        lat={this.state.lat} 
        lng={this.state.lng} 
        mapReady={this.state.mapReady}
        handleClick={this.props.setClickedOn}
        Marker={this.state.Marker}
        // onMapMounted={this.state.onMapMounted}
        // onBoundsChanged={this.state.onBoundsChanged}
      />
    );
  }
}

Map.propTypes = {
  clickPosition: func.isRequired,
  setMyPosition: func.isRequired,
  setClickedOn: func.isRequired,
  currentPosition: object.isRequired,
  targets: array
};

const mapState = state => ({
  currentPosition: state.getIn(['map', 'currentPosition']),
  targets: state.getIn(['target', 'targets']),
  clickPosition: state.getIn(['map', 'clickPosition'])
});

const mapDispatch = dispatch => ({
  setMyPosition: position => dispatch(setMyPosition(position)),
  setClickedOn: position => dispatch(setClickedOn(position))
});

export default connect(mapState, mapDispatch)(Map);
