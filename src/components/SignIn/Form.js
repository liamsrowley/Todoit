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
      <button>Sign In</button>
    </form>
  );
}

const validate = (formValues) => {

  const {
    email,
    password
  } = formValues;

  const errors = {};

  if (!email) {
    errors.email = 'You must enter an email address';
  }

  if (!password) {
    errors.password = 'You must enter a password';
  }

  return errors;

}

export default reduxForm({
  form: 'registerForm',
  validate
})(Form);
