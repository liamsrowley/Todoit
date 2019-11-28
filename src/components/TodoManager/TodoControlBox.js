import React from 'react';

import {
  VisuallyHidden,
  ControlBox,
  Icon
} from '@chakra-ui/core';

const TodoControlBox = ({ onClick, isCompleted }) => {
  return(
    <label>
      <VisuallyHidden as="input" type="checkbox" defaultChecked={isCompleted} />
      <ControlBox
        onClick={onClick}
        borderWidth="1px"
        size="28px"
        rounded="full"
        _checked={{ bg: "green.500", color: "white", borderColor: "green.500" }}
      >
        <Icon name="check" size="16px" />
      </ControlBox>
    </label>
  );
}

export default TodoControlBox;
