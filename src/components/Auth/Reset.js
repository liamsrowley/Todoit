import React, { Fragment } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useSelector } from 'react-redux';

import Form from './Form';

import {
  Stack
} from '@chakra-ui/core';

const Reset = () => {

  const { sendPasswordResetEmail } = useAuth();
  const isLoading = useSelector(state => state.loading.auth);
  const authError = useSelector(state => state.errors.auth);

  const fieldsToRender = (Field, FormInput) => {
    return (
      <Fragment>
        <Field name="email" type="text" label="Email Address" component={FormInput} />
      </Fragment>
    );
  }

  const validate = (formValues) => {
    const errors = {};
    const { email } = formValues;

    if (!email) {
      errors.email = "You must enter a valid email";
    }

    return errors;
  }

  const onFormSubmit = ({ email }) => {
    sendPasswordResetEmail(email);
  }

  return (
    <Stack>
      <Form
      onFormSubmit={onFormSubmit}
      isLoading={isLoading}
      submissionError={authError}
      buttonText="Send Reset Email"
      renderFields={fieldsToRender}
      form="resetPasswordForm"
      validate={validate}
      />
    </Stack>
  );

}

export default Reset;
