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

  const validate = (formValues) => {
    const { title } = formValues;
    const errors = {};

    if (!title) {
      errors.title = 'You must enter a title';
    }

    return errors;
  }

  return (
    <TodoForm
      onFormSubmit={onFormSubmit}
      buttonText="Add Todo"
      form="todoCreate"
      validate={validate}
    />
  );
}

export default TodoCreate;
