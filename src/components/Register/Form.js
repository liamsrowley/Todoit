import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../UI/FormInput/FormInput';

import {
  Button
} from '@chakra-ui/core';

const Form = ({ handleSubmit, onFormSubmit, isLoading }) => {
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field name="email" type="text" label="Email Address" component={FormInput} />
      <Field name="password" type="password" label="Password" component={FormInput} />
      <Field name="passwordConfirm" type="password" label="Confirm Password" component={FormInput} />
      <Button variantColor="blue" type="submit" isLoading={isLoading}>Register</Button>
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
