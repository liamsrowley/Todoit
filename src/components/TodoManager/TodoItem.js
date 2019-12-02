import React from 'react';
import { useTodos } from '../../hooks/useTodos';

import TodoEdit from './TodoEdit';
import TodoControlBox from './TodoControlBox';
import { IoIosMore, IoIosTrash, IoIosCreate } from 'react-icons/io';
import {
  Text,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box
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
    toggleEditMode(id, true);
  }

  return (
    <Stack isInline align="center" justify="space-between" py={8} borderBottom="1px" borderColor="gray.200">
      <Stack isInline align="center">
        <TodoControlBox onClick={handleTodoCompletion} isCompleted={isCompleted} />
        { !isEditing ? (
            <Text fontSize="xl" onClick={handleTodoEdit} pl={5}>{title}</Text>
          ) : (
            <TodoEdit id={id} title={title} />
          )
        }
      </Stack>
      <Menu>
        <MenuButton>
          <Box as={IoIosMore} h="20px" w="20px" />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleTodoEdit}>
            <Box as={IoIosCreate} mr={3} />
            Edit
          </MenuItem>
          <MenuItem onClick={handleTodoDelete}>
            <Box as={IoIosTrash} mr={3} />
            Delete
          </MenuItem>
        </MenuList>
    </Menu>
    </Stack>
  );
}

export default TodoItem;
