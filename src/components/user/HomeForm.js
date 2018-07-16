import React from 'react';
import { number, bool } from 'prop-types';
import {
  FormattedMessage
} from 'react-intl';

import Map from '../common/Map';
import Loading from '../common/Loading';
import LogoutButton from '../user/LogoutButton';
import '../../styles/homePage.css';

export const HomeForm = ({ lat, lng, mapReady }) => (
  <form className="home_menu">
    <div className="menu_area">
      <div>
        <p><FormattedMessage id="home.welcome" /></p>
        <LogoutButton />
      </div>
    </div>
    <div className="map_area">
      {!mapReady && <Loading />}
      {mapReady && <Map
        lat={lat}
        lng={lng}
        containerElement={ <div style={{ height: '100%', width: '100%' }} /> }
        mapElement={<div style={{ height: '100%' }} />}
      />}
    </div>
  </form>
);

HomeForm.propTypes = {
  lat: number.isRequired,
  lng: number.isRequired,
  mapReady: bool.isRequired
};

