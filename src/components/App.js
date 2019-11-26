import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { createTodo } from '../store/actions/todos';
import { signIn, signOut, createUser, setupAuthListener } from '../store/actions/auth';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setupAuthListener());
  }, []);

  const todo = {
    title: 'My todo',
    createdBy: 'Liam Rowley',
    dataCreated: Date.now()
  };

  return (
    <div>
      <button onClick={() => dispatch(createUser('liam.rowley@hotmail.co.uk', 'lol1lol'))}>Create User</button>
      <button onClick={() => dispatch(signIn('liam.rowley@hotmail.co.uk', 'lol1lol'))}>Sign In</button>
      <button onClick={() => dispatch(signOut())}>Sign Out</button>
      App
    </div>
  );
}

export default App;
