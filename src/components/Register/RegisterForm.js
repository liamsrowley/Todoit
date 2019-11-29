import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useSelector } from 'react-redux';

import Form from './Form';

const RegisterForm = () => {

  const { register } = useAuth();
  const isLoading = useSelector(state => state.loading.auth);

  const onFormSubmit = ({ email, password }) => {
    register(email, password);
  }

  return (
    <Form onFormSubmit={onFormSubmit} isLoading={isLoading} />
  );

}

export default RegisterForm;
