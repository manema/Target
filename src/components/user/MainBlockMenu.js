import React from 'react';
import { bool, array } from 'prop-types';
import _ from 'lodash';
import {
  FormattedMessage
} from 'react-intl';

import Loading from '../common/Loading';
import '../../styles/firstTargetMenu.css';

const MainBlockMenu = props => (
  <div className="main_block_container">
    {!props.readyToDisplay && <Loading />}
    {props.readyToDisplay && _.isEmpty(props.targets) &&
      <div className="no_targets_container">
        <div className="create_target_message">
          <FormattedMessage id="create.first.target" />
        </div>
        <div className="popular_targets_message">
          <FormattedMessage id="popular.targets" />
        </div>
        <ul className="target_list">
          <li><FormattedMessage id="target.football" /></li>
          <li><FormattedMessage id="target.travel" /></li>
          <li><FormattedMessage id="target.music" /></li>
        </ul> 
      </div>
    }
    {props.readyToDisplay && !_.isEmpty(props.targets) && <div className="no_matches_container"><FormattedMessage id="target.no.matches" /></div>}
  </div>
);

MainBlockMenu.propTypes = {
  readyToDisplay: bool.isRequired,
  targets: array.isRequired
};

export default MainBlockMenu;
