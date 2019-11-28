import React from 'react';
import { useTodos } from '../../hooks/useTodos';

import TodoForm from './TodoForm';

import {
  Stack
} from '@chakra-ui/core';

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
    <Stack align="center" pl={5}>
      <TodoForm
        onFormSubmit={onFormSubmit}
        initialValues={initialValues}
        buttonText="Save"
        form={`todoEdit${id}`}
      />
    </Stack>
  );
}

export default TodoEdit;
