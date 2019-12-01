import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../UI/FormInput/FormInput';

import {
  Button,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/core';

const Form = ({ handleSubmit, onFormSubmit, isLoading, submissionError }) => {
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field name="email" type="text" label="Email Address" component={FormInput} />
      <Field name="password" type="password" label="Password" component={FormInput} />
      { submissionError && (
        <FormControl isInvalid mb={6}>
          <FormErrorMessage>{submissionError}</FormErrorMessage>
        </FormControl>
      )}
      <Button variantColor="blue" type="submit" isLoading={isLoading}>Sign In</Button>
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
  form: 'signInForm',
  validate
})(Form);
