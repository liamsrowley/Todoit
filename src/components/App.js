import React, { useEffect } from 'react';
import { Router, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import history from '../history';

import SignIn from '../routes/Auth/SignIn';
import Register from '../routes/Auth/Register';

const App = () => {

  const { setupAuthListener } = useAuth();

  // Setup a listener to determine if the user is signed in or not
  // and then dispatch appropriate action (SIGN_IN or SIGN_OUT)
  useEffect(() => {
    setupAuthListener();
  }, [setupAuthListener]);

  return (
    <Router history={history}>
      <Route path="/auth/signin" exact component={SignIn} />
      <Route path="/auth/register" exact component={Register} />
    </Router>
  );
}

export default App;
