import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTodos } from '../hooks/useTodos';

import { signIn, signOut, createUser, setupAuthListener } from '../store/actions/auth';

const App = () => {
  const dispatch = useDispatch();

  const {
    createTodo,
    editTodo,
    deleteTodo,
    fetchTodos
  } = useTodos();

  useEffect(() => {
    dispatch(setupAuthListener());
  }, [dispatch]);

  const todo = {
    title: 'My todo',
    dateCreated: Date.now()
  };

  return (
    <div>
      <button onClick={() => dispatch(createUser('liam.rowley@hotmail.co.uk', 'lol1lol'))}>Create User</button>
      <button onClick={() => dispatch(signIn('liam.rowley@hotmail.co.uk', 'lol1lol'))}>Sign In</button>
      <button onClick={() => dispatch(signOut())}>Sign Out</button>
      <button onClick={() => createTodo(todo)}>Create todo as user</button>
      <button onClick={fetchTodos}>Fetch todos created by user</button>
      <button onClick={() => editTodo('6mzf21ha1gCGMRT9Bc8M', { title: 'edited todo bitch'})}>Edit a todo</button>
      <button onClick={() => deleteTodo('kynP2fCEVGtxVXtGUBrl')}>Delete a todo</button>
      App
    </div>
  );
}

export default App;
