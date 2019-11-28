import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useSelector } from 'react-redux';

import Form from './Form';

const SignInForm = () => {

  const { signIn } = useAuth();
  const isLoading = useSelector(state => state.loading.auth);

  const onFormSubmit = ({ email, password }) => {
    signIn(email, password);
  }

  return (
    <Form onFormSubmit={onFormSubmit} isLoading={isLoading} />
  );

}

export default SignInForm;
