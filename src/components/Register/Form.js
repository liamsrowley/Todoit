import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderInput = ({ input, meta: { error, touched }, type, label }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input type={type} {...input} />
      { touched && error && <span>{error}</span> }
    </div>
  );
}

const Form = ({ handleSubmit, onFormSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field name="email" type="text" label="Email Address" component={renderInput} />
      <Field name="password" type="password" label="Password" component={renderInput} />
      <Field name="passwordConfirm" type="password" label="Confirm Password" component={renderInput} />
      <button>Register</button>
    </form>
  );
}

const validate = (formValues) => {

  const {
    email,
    password,
    passwordConfirm
  } = formValues;

  const errors = {};

  if (!email) {
    errors.email = 'You must enter an email address';
  }

  if (!password) {
    errors.password = 'You must enter a password';
  }

  if (password !== passwordConfirm) {
    errors.password = errors.passwordConfirm = 'Your passwords must match';
  }

  return errors;

}

export default reduxForm({
  form: 'registerForm',
  validate
})(Form);
