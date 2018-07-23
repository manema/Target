import React from 'react';
import {
  FormattedMessage
} from 'react-intl';
import { Link } from 'react-router-dom';

import smilies from '../../images/smilies/smilies.svg';
import routes from '../../constants/routesPaths';
import '../../styles/welcomeMenu.scss';


const WelcomeMenu = () => (
  <div className="welcome_menu">
    <a href="#menu" className="menu_button"> &#9776; </a> 
    <div className="smilies_container" >
      <img src={smilies} alt="fireSpot" />
    </div>
    <div className="header_container">
      <p>
        <FormattedMessage id="welcome.to" />
        <span className="target" ><FormattedMessage id="target.name" /></span>
      </p>
    </div>
    <span className="introduction_header">
      <FormattedMessage id="header.introduction.message" />
    </span>
    <ul className="introduction_paragraph">
      <li><FormattedMessage id="create.target.introduction" /></li>
    </ul>
    <ul className="introduction_paragraph">
      <li>
        <span>
          <span className="target">
            <FormattedMessage id="target.name" />
          </span> 
          <span>
            <FormattedMessage id="chat.start.introduction" />
          </span>
        </span>
      </li>
    </ul>
    <button type="button" className="got_button_container">
      <Link to={routes.homeMenuNoTargets} className="got_button" > 
        <FormattedMessage id="got.it.button" />
      </Link>
    </button>
  </div>
);

export default WelcomeMenu;
