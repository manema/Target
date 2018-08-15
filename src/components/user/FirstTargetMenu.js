/* eslint-disable */
import React from 'react';
import {
  FormattedMessage
} from 'react-intl';
import { bool } from 'prop-types';

// import Loading from '../common/Loading';
import smilies from '../../images/smilies/smilies.svg';
import ProfileAvatar from '../common/ProfileAvatar';
import MainBlockMenuPage from '../../containers/MainBlockMenuPage';
import CreateTargetPage from '../../containers/CreateTargetPage';
import '../../styles/firstTargetMenu.css';

const FirstTargetMenu = ({ clicked }) =>
    <div>
      { clicked.click ? (<CreateTargetPage />
      ) : (<div className="first_target_menu">
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
      )} 
    </div>


FirstTargetMenu.propTypes = {
  clicked: bool.isRequired
}

export default FirstTargetMenu;