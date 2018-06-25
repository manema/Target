import React from 'react';
import { func, string, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { Link } from 'react-router-dom';
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from 'react-intl';

import Loading from '../common/Loading';
import Input from '../common/Input';
import { validations, login } from '../../utils/constraints';
import iphoneImage from '../../images/iphone/right.png';
import smiliesImage from '../../images/smilies/smilies.svg';
import routes from '../../constants/routesPaths';
import '../../styles/loginPage.css';

const messages = defineMessages({
  email: { id: 'login.form.email' },
  password: { id: 'login.form.password' },
  header_introduction: { id: 'header.introduction.message' },
  introduction: { id: 'introduction.message' },
  password_forgot: { id: 'password.forgot' },
  facebook_connection: { id: 'connection.facebook' }
});

export const LoginForm = ({ handleSubmit, error, submitting, intl }) => (
  <form onSubmit={handleSubmit} className="signin_menu">
    <div className="signin_input_area">
      <div className="signin_input_area_main_block">
        <div className="signin_smilies">
          <img src={smiliesImage} alt="fireSpot" />
        </div>
        <div className="signin_title">
          <span>TARGET MVD</span>
        </div>
        <span className="introduction_header">{intl.formatMessage(messages.header_introduction)}</span>
        <span className="introduction">{intl.formatMessage(messages.introduction)}</span>
        {error && <strong>{error}</strong>}
        <div className="input">
          <Field
            name="email"
            label={intl.formatMessage(messages.email)}
            component={Input}
            type="email"
          />
        </div>
        <div className="input">
          <Field
            name="password"
            label={intl.formatMessage(messages.password)}
            component={Input}
            type="password"
          />
        </div>
        <div className="container_submit_button">
          <center>
            <button type="submit" className="submit_button">
              <FormattedMessage id="login.form.submit" />
            </button>
          </center>
        </div>
        <span className="psw_button">{intl.formatMessage(messages.password_forgot)}</span>
        <span className="fbk_signin">{intl.formatMessage(messages.facebook_connection)}</span>
        <div className="line">
        </div>
        <div>
          <Link to={routes.signUp} className="signup_button">
            <FormattedMessage id="login.signup" />
          </Link>
        </div>
        {submitting && <Loading />}
      </div>
    </div>
    <div className="signin_image_area">
      <img src={iphoneImage} alt="fireSpot" />
    </div>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  intl: intlShape.isRequired,
  submitting: bool.isRequired,
  error: string
};

export default reduxForm({
  form: 'login',
  validate: validations(login, { fullMessages: false })
})(injectIntl(LoginForm));
