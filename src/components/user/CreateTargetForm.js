/* eslint-disable */
import React from 'react';
import { func, string, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from 'react-intl';

import Loading from '../common/Loading';
import Input from '../common/Input';
import smiliesImage from '../../images/smilies/smilies.svg';
import List from '../common/List';

const messages = defineMessages({
  area: { id: 'area.lenght' },
  title: { id: 'target.title' },
});

export const CreateTargetForm = props =>
  (
    <form onSubmit={props.handleSubmit} className="create_target_menu">
      {props.error && <strong>{props.error}</strong>}
          <div className="input">
            <Field
              parse={value => Number(value)}
              name="radius"
              label={props.intl.formatMessage(messages.area)}
              component={Input}
              type="number"
            />
          </div>
          <div className="input">
            <Field
              name="title"
              label={props.intl.formatMessage(messages.title)}
              component={Input}
              type="text"
            />
          </div>
          <div>
            <Field
              name="topic_id"
              component={List}
              data={props.data}
              valueField="id"
              textField="label"
            />
          </div>
          <div className="container_submit_button">
            <button type="submit" className="submit_button">
              <FormattedMessage id="save target" />
            </button>
          </div>
          <div className="load_btn">
            {props.submitting && <Loading size="0.25" />}
          </div>
          <div className="signin_smilies">
            <img src={smiliesImage} alt="fireSpot" />
          </div>
    </form>
  );

CreateTargetForm.propTypes = {
    handleSubmit: func.isRequired,
    intl: intlShape.isRequired,
    submitting: bool.isRequired,
    error: string
};

export default reduxForm({
  form: 'createTarget'
})(injectIntl(CreateTargetForm));
