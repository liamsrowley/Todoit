import React from 'react';

import TodoItem from './TodoItem';
import { List, Box } from '@chakra-ui/core';

const TodoList = ({ todos }) => {

  const renderTodoList = () => todos.map(todo => {
    return <TodoItem key={todo.id} {...todo} />
  })

  return (
    <Box>
      <List>
        {renderTodoList()}
      </List>
    </Box>
  );
}

export default TodoList;
