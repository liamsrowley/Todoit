import React from 'react';

import TodoForm from './TodoForm';

const TodoCreate = () => {

  const onFormSubmit = (formValues) => {
    console.log(formValues);
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
