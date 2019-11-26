import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {

  const renderTodoList = () => todos.map(todo => {
    return <TodoItem key={todo.id} {...todo} />
  })

  return (
    <div>
      { renderTodoList() }
    </div>
  );
}

export default TodoList;
