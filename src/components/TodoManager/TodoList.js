import React from 'react';

import TodoItem from './TodoItem';
import { List } from '@chakra-ui/core';

const TodoList = ({ todos }) => {

  const renderTodoList = () => todos.map(todo => {
    return <TodoItem key={todo.id} {...todo} />
  })

  return (
    <List mb={6}>
      {renderTodoList()}
    </List>
  );
}

export default TodoList;
