import React from 'react';
import { func, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';
import { Link } from 'react-router-dom';

import {
  injectIntl,
  FormattedMessage
} from 'react-intl';

import Input from '../common/Input';
import Loading from '../common/Loading';
import { validations, signUp } from '../../utils/constraints';
import iphoneImage from '../../images/iphone/right.png';
import '../../styles/signupPage.css';
import routes from '../../constants/routesPaths';



const sexs = [{ sex: 'Male', value: 'male' },
              { sex: 'Female', value: 'female' },
              { sex: 'Other', value: 'other' }];

const SignUpForm = ({ handleSubmit, submitting }) =>
  (
    <form onSubmit={handleSubmit} className="signup_menu">
      <div className="signup_input_area">
        <div className="signup_input_area_main_block">
          <p className="signup_title"><FormattedMessage id="signup.title" /></p>
          <div className="signup_input">
            <Field
              name="name"
              label="NAME"
              component={Input}
              type="text"
            />
          </div>
          <div className="signup_input">
            <Field
              name="email"
              label="EMAIL"
              component={Input}
              type="email"
            />
          </div>
          <div className="signup_input">
            <Field
              name="password"
              label="PASSWORD"
              component={Input}
              type="password"
            />
          </div>
          <div className="signup_input">
            <Field
              name="passwordConfirmation"
              label="CONFIRM PASSWORD"
              component={Input}
              type="password"
            />
          </div>
          <div className="drop_btn">
            <label className="drop_btn_label">GENDER</label>
            <Field
              name="sex"
              component={DropdownList}
              data={sexs}
              valueField="value"
              textField="sex"
              defaultValue="male"
            />
          </div>
          <div className="container_signup_btn">
            <button type="submit" className="signup_btn">
              <FormattedMessage id="login.signup" />
            </button>
          </div>
          <div className="line" />
          <div className="container_signin_btn">
            <Link to={routes.login} className="signin_btn">
              <FormattedMessage id="signup.signin" />
            </Link>
            {submitting && <Loading />}
          </div>
        </div>
      </div>
      <div className="signup_image_area">
        <img src={iphoneImage} alt="fireSpot" />
      </div>
    </form>
  );


SignUpForm.propTypes = {
  handleSubmit: func.isRequired,
  submitting: bool.isRequired,
};

export default reduxForm({
  form: 'signUp',
  validate: validations(signUp, { fullMessages: false })
})(injectIntl(SignUpForm));
