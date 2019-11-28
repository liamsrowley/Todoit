import React from 'react';

import TodoManager from '../../components/TodoManager/TodoManager';
import Page from '../../components/UI/Page/Page';

const Todos = () => {
  return (
    <Page title="My Todos" requireAuth>
      <TodoManager />
    </Page>
  );
}

export default Todos;
