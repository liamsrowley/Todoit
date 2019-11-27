import React from 'react';
import { useTodos } from '../../hooks/useTodos';

import TodoForm from './TodoForm';

const TodoEdit = ({ id, title }) => {

  const {
    editTodo,
    toggleEditMode
  } = useTodos();

  const onFormSubmit = async (formValues) => {
    toggleEditMode(id, false);
    await editTodo(id, formValues);
  }

  const initialValues = {
    title
  };

  return (
    <TodoForm
      onFormSubmit={onFormSubmit}
      initialValues={initialValues}
      buttonText="Save"
      form={`todoEdit${id}`}
    />
  );
}

export default TodoEdit;
