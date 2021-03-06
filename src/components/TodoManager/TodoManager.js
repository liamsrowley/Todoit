import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTodos } from '../../hooks/useTodos';

import TodoCreate from './TodoCreate';
import TodoList from './TodoList';

const TodoManager = () => {

  const userId = useSelector(state => state.auth.uid);
  const todos = useSelector(state => Object.values(state.todos));

  const {
    fetchTodos,
  } = useTodos();

  useEffect(() => {
    fetchTodos();
  }, [userId]);

  return (
    <Fragment>
      <TodoList todos={todos} />
      <TodoCreate />
    </Fragment>
  );
}

export default TodoManager;
