import React from 'react';
import { useTodos } from '../../hooks/useTodos';

import TodoForm from './TodoForm';

const TodoCreate = () => {

  const {
    createTodo
  } = useTodos();

  const onFormSubmit = (formValues) => {
    createTodo(formValues);
  }

  return (
    <TodoForm
      onFormSubmit={onFormSubmit}
      buttonText="Add"
      form="todoCreate"
    />
  );
}

export default TodoCreate;
