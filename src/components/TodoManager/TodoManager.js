import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTodos } from '../../hooks/useTodos';

import TodoCreate from './TodoCreate';
import TodoList from './TodoList';

import {
  Heading
} from '@chakra-ui/core';

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
      <Heading as="h1" size="lg" mb={6}>My Todos</Heading>
      <TodoList todos={todos} />
      <TodoCreate />
    </Fragment>
  );
}

export default TodoManager;
