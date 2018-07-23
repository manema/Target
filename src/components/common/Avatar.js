import React from 'react';
import { string } from 'prop-types';

import '../../styles/avatar.css';
import defaultProfile from './../../images/profile/default_profile.svg';

function Avatar({ avatar }) {
  if (avatar) {
    return (
      <div className="avatar_container" >
        <img src={avatar} alt="fireSpot" />
      </div>
    );
  }
  return (
    <div className="avatar_container" >
      <img src={defaultProfile} alt="fireSpot" />
    </div>
  );
}

Avatar.propTypes = {
  avatar: string,
};

export default Avatar;
