import React, { Component } from 'react';

import { func, string, number } from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentUserProfile, updateCurrentUserProfile } from '../actions/profileActions';
import EditProfile from '../../src/components/user/EditProfile';

class EditProfilePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: this.props.username,
      name: this.props.name,
      surname: this.props.surname,
      email: this.props.email,
      id: this.props.id,
      gender: this.props.gender,
      readyToDisplay: false
    };
  }
    
  componentWillMount() {
    this.props.getCurrentUserProfile(this.state.id);
    if (this.props.name !== undefined && this.props.avatar !== undefined && this.props.username !== undefined && this.props.surname !== undefined && this.props.email !== undefined && this.props.id !== undefined) {
      this.setState({ readyToDisplay: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.avatar !== this.props.avatar || nextProps.username !== this.props.username) || nextProps.name !== this.props.name || nextProps.surname !== this.props.surname || nextProps.email !== this.props.email || nextProps.id !== this.props.id) {
      this.setState({
        avatar: nextProps.avatar,
        username: nextProps.username,
        name: nextProps.name,
        surname: nextProps.surname,
        email: nextProps.email,
        readyToDisplay: true
      });
    }
  }

  updateUser = user =>
    this.props.updateCurrentUserProfile(this.props.id, user);

  render() {
    const { email, username, name, surname, gender, readyToDisplay, avatar } = this.state;
    return (
      <EditProfile
        email={email}
        username={username}
        name={name}
        surname={surname}
        sex={gender}
        readyToDisplay={readyToDisplay}
        avatar={avatar}
        enableReinitialize
        onSubmit={this.updateUser}
        initialValues={{
            email,
            name,
            surname,
            username,
            gender
        }}
      />
    );
  }
}

EditProfilePage.propTypes = {
  avatar: string,
  id: number,
  username: string,
  name: string,
  surname: string,
  email: string,
  gender: string,
  getCurrentUserProfile: func.isRequired,
  updateCurrentUserProfile: func.isRequired
};
  
const mapState = state => ({
  avatar: state.getIn(['profile', 'user', 'avatar', 'normalUrl']),
  username: state.getIn(['profile', 'user', 'username']),
  name: state.getIn(['profile', 'user', 'firstName']),
  surname: state.getIn(['profile', 'user', 'lastName']),
  email: state.getIn(['profile', 'user', 'email']),
  gender: state.getIn(['profile', 'user', 'gender']),
  id: state.getIn(['session', 'user', 'id'])
});

const mapDispatch = dispatch => ({
  getCurrentUserProfile: id => dispatch(getCurrentUserProfile(id)),
  updateCurrentUserProfile: (id, user) => dispatch(updateCurrentUserProfile(id, user.toJS()))
});

export default connect(mapState, mapDispatch)(EditProfilePage);

