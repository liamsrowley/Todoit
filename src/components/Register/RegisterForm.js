import React from 'react';
import { useAuth } from '../../hooks/useAuth';

import Form from './Form';

const RegisterForm = () => {

  const { register } = useAuth();

  const onFormSubmit = ({ email, password }) => {
    register(email, password);
  }

  return (
    <Form onFormSubmit={onFormSubmit} />
  );

}

export default RegisterForm;
