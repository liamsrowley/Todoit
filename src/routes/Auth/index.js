import React from 'react';

import SignIn from '../../components/Auth/SignIn';
import Register from '../../components/Auth/Register';
import Reset from '../../components/Auth/Reset';

const Auth = ({ match: { path }}) => {
  const [, pathName, pathType] = path.split('/');

  switch (pathType) {
    case 'register':
      return <Register />;

    case 'signin':
      return <SignIn />;

    case 'reset':
      return <Reset />;

    default:
      return <SignIn />;
  }
}

export default Auth;
