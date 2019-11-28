import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { useAuth } from '../../hooks/useAuth';

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
  const { signOut } = useAuth();

  const handleSignOut = () => {
    console.log("WTF MAN");
    signOut();
  }

  return (
    <Menu>
      <MenuButton>
        <Stack align="center" isInline>
          <Text>{email}</Text>
          <Box as={IoIosArrowDown} size="16px" />
        </Stack>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserHeader;
