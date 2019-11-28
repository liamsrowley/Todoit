import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/core';

const renderInput = ({ input, meta: { error, touched }, type, label }) => {
  const isInvalid = error && touched ? true : false;
  return (
    <Stack spacing={4}>
      <FormControl isInvalid={isInvalid}>
        <FormLabel htmlFor={input.name}>{label}</FormLabel>
        <Input size="md" type={type} {...input} isInvalid={isInvalid} />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    </Stack>
  );
}

const Form = ({ handleSubmit, onFormSubmit, isLoading }) => {
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field name="email" type="text" label="Email Address" component={renderInput} />
      <Field name="password" type="password" label="Password" component={renderInput} />
      <Field name="passwordConfirm" type="password" label="Confirm Password" component={renderInput} />
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
