import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTodos } from '../../hooks/useTodos';

import TodoCreate from './TodoCreate';
import TodoList from './TodoList';

const TodoManager = () => {

  const userId = useSelector(state => state.auth.uid);
  const todos = useSelector(state => Object.values(state.todos));

  const {
    fetchTodos,
    createTodo
  } = useTodos();

  useEffect(() => {
    fetchTodos();
  }, [userId]);

  return (
    <div>
      <TodoList todos={todos} />
      <TodoCreate />
    </div>
  );
}

export default TodoManager;
