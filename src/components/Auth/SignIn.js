import React, { Fragment } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Form from './Form';

import {
  Link as ChakraLink,
  Stack
} from '@chakra-ui/core';

const SignIn = () => {

  const { signIn } = useAuth();
  const isLoading = useSelector(state => state.loading.auth);
  const authError = useSelector(state => state.errors.auth);

  const fieldsToRender = (Field, FormInput) => {
    return (
      <Fragment>
        <Field name="email" type="text" label="Email Address" component={FormInput} />
        <Field name="password" type="password" label="Password" component={FormInput} />
      </Fragment>
    );
  }

  const validate = (formValues) => {
    const errors = {};
    const { email, password } = formValues;

    if (!email) {
      errors.email = "You must enter a valid email";
    }

    if (!password) {
      errors.password = "You must enter a valid password";
    }

    return errors;
  }

  const onFormSubmit = ({ email, password }) => {
    signIn(email, password);
  }

  return (
    <Stack>
      <Form
      onFormSubmit={onFormSubmit}
      isLoading={isLoading}
      submissionError={authError}
      buttonText="Sign In"
      renderFields={fieldsToRender}
      form="signInForm"
      validate={validate}
      />
      <ChakraLink as={Link} to="/auth/reset" mt={4}>Forgot your password?</ChakraLink>
    </Stack>
  );

}

export default SignIn;
