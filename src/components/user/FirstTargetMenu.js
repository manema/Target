import React from 'react';
import {
  FormattedMessage
} from 'react-intl';

import smilies from '../../images/smilies/smilies.svg';
import ProfileAvatar from '../common/ProfileAvatar';
import MainBlockMenuPage from '../../containers/MainBlockMenuPage';
import '../../styles/firstTargetMenu.css';

const FirstTargetMenu = () => (
  <div className="first_target_menu">
    <a className="menu_button"> &#9776; </a>
    <span className="ftm_target" ><FormattedMessage id="target.name" /></span>
    <div className="profile_avatar">
      <ProfileAvatar />
    </div>
    <MainBlockMenuPage />
    <div className="ftm_smilies_container" >
      <img src={smilies} alt="fireSpot" />
    </div>  
  </div>
);

export default FirstTargetMenu;
