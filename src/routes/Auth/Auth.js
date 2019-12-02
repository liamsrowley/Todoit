import React from 'react';

import Page from '../../components/UI/Page/Page';
import SignIn from '../../components/Auth/SignIn';
import Register from '../../components/Auth/Register';
import Reset from '../../components/Auth/Reset';

const Auth = ({ match: { path }}) => {
  const [, pathName, pathType] = path.split('/');

  let content, pageTitle;

  switch (pathType) {
    case 'register':
      pageTitle="Create an Account";
      content = <Register />;
      break;

    case 'signin':
      pageTitle="Sign into your account";
      content = <SignIn />;
      break;

    case 'reset':
      pageTitle="Reset your password";
      content = <Reset />;
      break;

    default:
      pageTitle="Default Page";
      content = <SignIn />;
      break;
  }

  return (
    <Page title={pageTitle}>
      { content }
    </Page>
  );
}

export default Auth;
