import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { bool, number } from 'prop-types';

import Loading from '../common/Loading';

const MapComponent = props =>
  <div className="map_area">
    {!props.mapReady && <Loading />}
    {props.mapReady && 
    <MapView
      lat={props.lat}
      lng={props.lng}
      containerElement={ <div style={{ height: '100%', width: '100%' }} /> }
      mapElement={<div style={{ height: '100%' }} />}
    />}
  </div>

const MapView =
  withGoogleMap(props => 
    <GoogleMap
      center={{ lat: props.lat, lng: props.lng }}
      defaultZoom={13} 
    />);

MapComponent.propTypes = {
  lat: number.isRequired,
  lng: number.isRequired,
  mapReady: bool.isRequired
};

export default MapComponent;
