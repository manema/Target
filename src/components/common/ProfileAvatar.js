import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import { func, string, number } from 'prop-types';
import { connect } from 'react-redux';
import LogoutButton from '../user/LogoutButton';
import Loading from '../common/Loading';
import { getCurrentUserProfile } from '../../actions/profileActions';
import Avatar from '../common/Avatar';
import Line from '../common/Line';
import './../../styles/profileAvatar.css';

class ProfileAvatar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      avatar: this.props.avatar,
      name: this.props.name,
      id: this.props.id,
      readyToDisplay: false
    };
  }
    
  componentWillMount() {
    const { name, avatar } = this.props;
    this.props.getCurrentUserProfile(this.state.id);
    if (name !== undefined && avatar !== undefined) {
      this.setState({ readyToDisplay: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { name, avatar } = nextProps;
    if ((name !== undefined && avatar !== undefined) || name !== this.props.name || avatar !== this.props.avatar) {
      this.setState({
        avatar: nextProps.avatar,
        name: nextProps.name,
        readyToDisplay: true
      });
    }
  }

  render() {
    const { readyToDisplay, avatar, name } = this.state;
    return (
      <div>
        { !readyToDisplay && <Loading />}
        { readyToDisplay && 
          <div className="profile_avatar_container" >
            <Avatar avatar={avatar} className="avatar_image" />
            <div className="name_container" >
              {name !== '' ? name : 'Target'}
            </div>
            <span className="edit_log_container">
              <button type="button" className="edit_button">
                <FormattedMessage id="edit.button" />
              </button>
              <span> / </span>
              <LogoutButton className="logout_button" />
            </span>
            <div className="profile_line" >
              <Line />
            </div>
          </div>
        }     
      </div> 
    );
  }
}

ProfileAvatar.propTypes = {
  avatar: string,
  id: number,
  name: string,
  getCurrentUserProfile: func.isRequired
};
  
const mapState = state => ({
  avatar: state.getIn(['profile', 'user', 'avatar', 'normalUrl']),
  name: state.getIn(['profile', 'user', 'username']),
  id: state.getIn(['session', 'user', 'id'])
});

const mapDispatch = dispatch => ({
  getCurrentUserProfile: id => dispatch(getCurrentUserProfile(id)),
});

export default connect(mapState, mapDispatch)(ProfileAvatar);
