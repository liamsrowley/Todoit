import React, { Fragment } from 'react';

import RegisterForm from '../../components/Register/RegisterForm';
import Page from '../../components/UI/Page/Page';



const Register = () => {
  return (
    <Page title="Register an Account">
      <RegisterForm />
    </Page>
  );
}

export default Register;
