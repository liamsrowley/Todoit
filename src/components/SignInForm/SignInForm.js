import React from 'react';
import { useAuth } from '../../hooks/useAuth';

import Form from './Form';

const SignInForm = () => {

  const { signIn } = useAuth();

  const onFormSubmit = ({ email, password }) => {
    signIn(email, password);
  }

  return (
    <Form onFormSubmit={onFormSubmit} />
  );

}

export default SignInForm;
