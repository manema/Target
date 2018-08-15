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
      handleClick={props.handleClick}
      Marker={props.Marker}
      /*
        onMapMounted={props.onMapMounted}
      */
      // onBoundsChanged={props.onBoundsChanged}
      // Marker={[<Marker position={{ lat: -34.892565, lng: -56.160359 }} />, 
      //  <Marker position={{ lat: -34.900000, lng: -56.160359 }} />]}
    >

     
    </MapView>
    }
  </div>

const MapView =
  withGoogleMap(props =>
    <GoogleMap
      center={{ lat: props.lat, lng: props.lng }}
      defaultZoom={13}
      // onZoomChanged={event => console.log(event.latLng.lng())}
      // onIdle={() => this.refs.map.getCenter()}
      // zoom={props.zoom}
      // onIdle={event => console.log(event.latLng.lat())}
      // onClick={map.GoogleMap.getCenter()}
      onClick={event => props.handleClick({lat: event.latLng.lat(), lng: event.latLng.lng() })}
      /*
        ref={props.onMapMounted}
      */
      // onBoundsChanged={props.onBoundsChanged}
    >
      {props.Marker}
    </GoogleMap>);

MapComponent.propTypes = {
  lat: number.isRequired,
  lng: number.isRequired,
  mapReady: bool.isRequired
};

export default MapComponent;
