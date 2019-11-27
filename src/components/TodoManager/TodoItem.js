import React from 'react';
import { useTodos } from '../../hooks/useTodos';

import TodoEdit from './TodoEdit';

const TodoItem = ({ id, title, isCompleted, isEditing = false }) => {

  const {
    editTodo,
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
    <div>
      <div>
      <div onClick={handleTodoCompletion}>Mark Complete</div>
        { isEditing && <TodoEdit id={id} title={title} /> }
        {title}
        { isCompleted && 'This todo is completed' }
      </div>
      <div>
        <button onClick={handleTodoEdit}>Edit</button>
        <button onClick={handleTodoDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
