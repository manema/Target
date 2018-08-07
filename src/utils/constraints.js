import validate from 'validate.js';

var textEntry = /[a-zA-Z]+/; /* This expression does not evaluate words with accent marks */
var textAndNumberEntry = /[a-zA-Z0-9]+/;

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
    presence: { message: 'password.presence' },
    length: { minimum: 8, message: 'password.length' }
  },
  passwordConfirmation: {
    presence: { message: 'passwordConfirmation.presence' },
    equality: { attribute: 'password', message: 'passwordConfirmation.equality' }
  },
};

export const editProfile = {
  username: {
    presence: { message: 'username.presence' },
    format: { pattern: textAndNumberEntry, message: 'username.valid' }
  },
  name: {
    presence: { message: 'name.presence' },
    format: { pattern: textEntry, message: 'name.valid' }
  },
  surname: {
    presence: { message: 'surname.presence' },
    format: { pattern: textEntry, message: 'surname.valid' }
  },
  email: {
    presence: { message: 'email.presence' },
    email: { message: 'email.invalid' },
  },
  password: {
    presence: { message: 'password.presence' },
  }
};

export const validations = (constraints, props = {}) =>
  data => validate(data.toJS(), constraints, props) || {};
