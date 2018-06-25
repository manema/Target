import validate from 'validate.js';

var textEntry = /[a-zA-Z]+/; /* This expression does not evaluate words with accent marks */


export const login = {
  email: {
    presence: { message: 'email.presence' },
    email: { message: 'email.invalid' },
  },
  password: {
    presence: { message: 'password.presence' },
  }
};

export const signUp = {
  name: {
    presence: { message: 'name.presence' },
    format: { pattern: textEntry, message: 'name.valid' }
  },
  email: {
    presence: { message: 'email.presence' },
    email: { message: 'email.invalid' }
  },
  password: {
    presence: { message: 'password.presence' }
  },
  passwordConfirmation: {
    presence: { message: 'passwordConfirmation.presence' },
    equality: { attribute: 'password', message: 'passwordConfirmation.equality' }
  },
};

export const validations = (constraints, props = {}) =>
  data => validate(data.toJS(), constraints, props) || {};
