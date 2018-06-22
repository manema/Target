import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';
import { Link } from 'react-router-dom';

import {
  injectIntl,
  FormattedMessage
} from 'react-intl';


import Input from '../common/Input';
import { validations, signUp } from '../../utils/constraints';
import iphoneImage from '../../images/right.png';
import '../../styles/signupPage.css';
import routes from '../../constants/routesPaths';



const sexs = [{ sex: 'Male', value: 'male' },
              { sex: 'Female', value: 'female' },
              { sex: 'Other', value: 'other' }]

const SignUpForm = ({ handleSubmit }) =>
  (
    <form onSubmit={handleSubmit} className="signup_menu">
      <div className="signup_input_area">
        <div className="signup_input_area_main_block">
          <center><p className="signup_title"><FormattedMessage id="signup.title" /></p></center>
          <div>
            <Field
              name="name"
              label="NAME"
              component={Input}
              type="text"
            />
          </div>
          <div>
            <Field
              name="email"
              label="EMAIL"
              component={Input}
              type="email"
            />
          </div>
          <div>
            <Field
              name="password"
              label="PASSWORD"
              component={Input}
              type="password"
            />
          </div>
          <div>
            <Field
              name="passwordConfirmation"
              label="CONFIRM PASSWORD"
              component={Input}
              type="password"
            />
          </div>
          <div className="dropbtn">
            <Field
              name="sex"
              component={DropdownList}
              data={sexs}
              valueField="value"
              textField="sex"
              defaultValue='male'
            />
          </div>
          <div>
            <br />
            <center><button type="submit" className="signup_btn">Sign up</button></center>
            <br />
          </div>
          <div>
            <center>
              <Link to={routes.login}>
                <FormattedMessage className="signin_btn" id="signup.signin" />
              </Link>
            </center>
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
};

export default reduxForm({
  form: 'signUp',
  validate: validations(signUp, { fullMessages: false })
})(injectIntl(SignUpForm));
