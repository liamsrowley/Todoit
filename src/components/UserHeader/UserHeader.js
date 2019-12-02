import React from 'react';

import { useAuth } from '../../hooks/useAuth';

import {
  Menu,
  MenuButton,
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
        <Avatar size="sm" />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserHeader;
