import React, { useEffect } from 'react';
import { Router, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import history from '../history';

import Auth from '../routes/Auth/Auth';
import Todos from '../routes/Todos/Todos';
import Header from './Header/Header';
import Notify from './UI/Notify/Notify';

import { Box } from '@chakra-ui/core';

import './App.css';

const App = () => {

  const { setupAuthListener } = useAuth();

  // Setup a listener to determine if the user is signed in or not
  // and then dispatch appropriate action (SIGN_IN or SIGN_OUT)
  useEffect(() => {
    setupAuthListener();
  }, [setupAuthListener]);

  return (
    <Router history={history}>
      <Box minH="100vh" bg="gray.100" fontFamily="Roboto">
        <Header />
        <Box maxW="960px" mx="auto" bg="white" mt={5} rounded={3} p={10}>
          <Route path="/auth/signin" exact component={Auth} />
          <Route path="/auth/register" exact component={Auth} />
          <Route path="/auth/reset" exact component={Auth} />
          <Route path="/" exact component={Todos} />
        </Box>
      </Box>
      <Notify />
    </Router>
  );
}

export default App;
