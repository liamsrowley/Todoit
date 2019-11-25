import React from 'react';
import { useDispatch } from 'react-redux';

import { createTodo } from '../store/actions/todos';

const App = () => {
  const dispatch = useDispatch();

  const todo = {
    title: 'My todo',
    createdBy: 'Liam Rowley',
    dataCreated: Date.now()
  };

  return (
    <div onClick={() => dispatch(createTodo(todo))}>
      App
    </div>
  );
}

export default App;
