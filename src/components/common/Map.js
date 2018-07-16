import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const Map = 
    withGoogleMap(props => 
      <GoogleMap
        center={{ lat: props.lat, lng: props.lng }}
        defaultZoom={13} 
      />);

export default Map;

