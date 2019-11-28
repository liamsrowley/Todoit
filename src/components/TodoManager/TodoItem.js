import React from 'react';
import { useTodos } from '../../hooks/useTodos';

import TodoEdit from './TodoEdit';
import { IoIosCreate, IoIosTrash } from 'react-icons/io';
import {
  Box,
  Text,
  Flex,
  Stack,
  IconButton
} from '@chakra-ui/core';

const TodoItem = ({ id, title, isCompleted, isEditing = false }) => {

  const {
    deleteTodo,
    toggleCompletion,
    toggleEditMode
  } = useTodos();

  const handleTodoDelete = () => {
    deleteTodo(id);
  }

  const handleTodoCompletion = () => {
    toggleCompletion(id, isCompleted);
  }

  const handleTodoEdit = () => {
    toggleEditMode(id, !isEditing);
  }

  return (
    <Flex align="center" justify="space-between" padding={[3, 6]}>
      <Box>
        { isEditing && <TodoEdit id={id} title={title} /> }
        <Text fontSize="xl">{title}</Text>
      </Box>
      <Stack isInline spacing={2}>
        <IconButton
          onClick={handleTodoEdit}
          aria-label="Edit Todo"
          icon={IoIosCreate}
        />
        <IconButton
          onClick={handleTodoDelete}
          aria-label="Delete Todo"
          icon={IoIosTrash}
        />
      </Stack>
    </Flex>
  );
}

export default TodoItem;
