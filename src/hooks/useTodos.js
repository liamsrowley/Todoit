import { useDispatch } from 'react-redux';
import { createTodo, editTodo, deleteTodo, fetchUserTodos } from '../store/actions/todos';

export const useTodos = () => {

  const dispatch = useDispatch();

  const doCreateTodo = (todo) => {
    dispatch(createTodo(todo));
  }

  const doEditTodo = (id, formValues) => {
    dispatch(editTodo(id, formValues));
  }

  const doDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  }

  const doFetchUserTodos = () => {
    dispatch(fetchUserTodos());
  }

  return {
    createTodo: doCreateTodo,
    editTodo: doEditTodo,
    deleteTodo: doDeleteTodo,
    fetchTodos: doFetchUserTodos
  }

}
