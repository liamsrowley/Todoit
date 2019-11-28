import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import {
  Menu,
  MenuButton,
  Stack,
  MenuList,
  MenuItem,
  Box,
  Text
} from '@chakra-ui/core';

const UserHeader = ({ email }) => {
  return (
    <Menu>
      <MenuButton>
        <Stack align="center" isInline>
          <Text>{email}</Text>
          <Box as={IoIosArrowDown} size="16px" />
        </Stack>
      </MenuButton>
      <MenuList>
        <MenuItem>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserHeader;
