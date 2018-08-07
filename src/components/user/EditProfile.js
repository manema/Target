/* eslint-disable */

import React from 'react';
import { string } from 'prop-types';
import { bool, func } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import {
    injectIntl,
    intlShape,
    defineMessages,
    FormattedMessage
} from 'react-intl';
import DropdownList from 'react-widgets/lib/DropdownList';

import Input from '../common/Input';
import smilies from '../../images/smilies/smilies.svg';
import ProfileAvatar from '../common/ProfileAvatar';
import Loading from '../common/Loading';
import { validations, editProfile } from '../../utils/constraints';
import '../../styles/editProfile.css';

const messages = defineMessages({
    email: { id: 'login.form.email' },
    password: { id: 'login.form.password' },
    firstName: { id: 'name.first'},
    lastName: { id: 'name.last'},
    userName: { id: 'user.name'},
    gender: { id: 'user.gender'},
  });

const sexs = [{ sex: 'Male', value: 'male' },
              { sex: 'Female', value: 'female' },
              { sex: 'Other', value: 'other' }];

const EditProfile = props => (
  <form onSubmit={props.handleSubmit}>
    <div className="edit_profile_menu_container" >
        { !props.readyToDisplay && <Loading />}
        { props.readyToDisplay && 
            <div className="edit_profile_menu">
                <div className="top_band">
                    <a className="back_button"> &#60; </a>
                    <span className="ep_edit_profile" ><FormattedMessage id="edit.profile" /></span>
                </div>
                <div className="ep_main_block">
                    <div className="profile_avatar">
                        <ProfileAvatar />
                    </div>
                    <div className="ep_input">
                        <Field
                        name="email"
                        placeholder="Email"
                        label={props.intl.formatMessage(messages.email)}
                        component={Input}
                        type="email"
                        />
                    </div>
                    <div className="ep_input">
                        <Field
                            name="name"
                            placeholder="Name"
                            label={props.intl.formatMessage(messages.firstName)}
                            component={Input}
                            type="text"
                        />
                    </div>
                    <div className="ep_input">
                        <Field
                            name="surname"
                            placeholder="Surname"
                            label={props.intl.formatMessage(messages.lastName)}
                            component={Input}
                            type="text"
                        />
                    </div>
                    <div className="ep_input">
                        <Field
                            name="username"
                            placeholder="Username"
                            label={props.intl.formatMessage(messages.userName)}
                            component={Input}
                            type="text"
                        />
                    </div>
                    <div className="drop_btn">
                        <label className="drop_btn_label">GENDER</label>
                        <Field
                            name="gender"
                            placeholder="Gender"
                            component={DropdownList}
                            data={sexs}
                            valueField="value"
                            textField="sex"
                            defaultValue="male"
                        />
                    </div>
                    <div className="container_submit_button">
                      <button type="submit" className="submit_button">
                        <FormattedMessage id="save.changes" />
                      </button>
                    </div>
                    {props.submitting && <Loading />}
                    <div className="ep_smilies_container" >
                        <img src={smilies} alt="fireSpot" />
                    </div>  
                </div>
            </div>
        }     
    </div> 
  </form>
);

EditProfile.propTypes = {
  handleSubmit: func.isRequired,
  submitting: bool.isRequired
};
/*
EditProfile.propTypes = {
    email: string.isRequired,
    name: string.isRequired,
    surname: string.isRequired,
    username: string.isRequired,
    sex: string.isRequired
}
*/

export default reduxForm({
    form: 'editProfile',
    validate: validations(editProfile, { fullMessages: false })
  })(injectIntl(EditProfile));
