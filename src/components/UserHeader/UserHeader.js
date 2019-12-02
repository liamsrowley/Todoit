import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { useAuth } from '../../hooks/useAuth';

import {
  Menu,
  MenuButton,
  Stack,
  MenuList,
  MenuItem,
  Avatar
} from '@chakra-ui/core';

const UserHeader = ({ email }) => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  }

  return (
    <Menu>
      <MenuButton>
        <Stack align="center" isInline>
          <Avatar size="sm" />
        </Stack>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserHeader;
