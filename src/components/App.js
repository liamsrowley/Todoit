import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTodos } from '../hooks/useTodos';
import { useAuth } from '../hooks/useAuth';

const App = () => {
  const dispatch = useDispatch();

  const {
    createTodo,
    editTodo,
    deleteTodo,
    fetchTodos,
    toggleCompletion
  } = useTodos();

  const {
    signIn,
    signOut,
    register,
    setupAuthListener
  } = useAuth();

  useEffect(() => {
    setupAuthListener();
  }, [dispatch, setupAuthListener]);

  const todo = {
    title: 'My todo',
  };

  return (
    <div>
      <button onClick={() => register('liam.rowley@hotmail.co.uk', 'lol1lol')}>Create User</button>
      <button onClick={() => signIn('liam.rowley@hotmail.co.uk', 'lol1lol')}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
      <button onClick={() => createTodo(todo)}>Create todo as user</button>
      <button onClick={fetchTodos}>Fetch todos created by user</button>
      <button onClick={() => editTodo('6mzf21ha1gCGMRT9Bc8M', { title: 'edited todo bitch'})}>Edit a todo</button>
      <button onClick={() => deleteTodo('kynP2fCEVGtxVXtGUBrl')}>Delete a todo</button>
      <button onClick={() => toggleCompletion('Arl7p70i7xTn0yGVxgMG', false)}>Mark todo as completed</button>
      App
    </div>
  );
}

export default App;
