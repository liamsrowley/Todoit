import React, { Fragment } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useSelector } from 'react-redux';

import Form from './Form';

import {
  Stack
} from '@chakra-ui/core';

const Register = () => {

  const { register } = useAuth();
  const isLoading = useSelector(state => state.loading.auth);
  const authError = useSelector(state => state.errors.auth);

  const fieldsToRender = (Field, FormInput) => {
    return (
      <Fragment>
        <Field name="email" type="text" label="Email Address" component={FormInput} />
        <Field name="password" type="password" label="Password" component={FormInput} />
        <Field name="passwordConfirm" type="password" label="Confirm Password" component={FormInput} />
      </Fragment>
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

    if (!passwordConfirm) {
      errors.passwordConfirm = 'You must enter a password';
    }

    if (password !== passwordConfirm) {
      errors.password = errors.passwordConfirm = 'Your passwords must match';
    }

    return errors;
  }

  const onFormSubmit = ({ email, password }) => {
    register(email, password);
  }

  return (
    <Stack>
      <Form
      onFormSubmit={onFormSubmit}
      isLoading={isLoading}
      submissionError={authError}
      buttonText="Register"
      renderFields={fieldsToRender}
      form="registerForm"
      validate={validate}
      />
    </Stack>
  );

}

export default Register;
