import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserHeader from '../UserHeader/UserHeader';

import {
  Box,
  Flex,
  Button,
  Stack,
  Link
} from '@chakra-ui/core';

const Header = () => {

  const user = useSelector(state => state.auth);
  const isSignedIn = user.uid;

  return (
    <Box bg="white" w="100%" h="70px">
      <Flex align="center" justify="space-between" h="100%" maxW="960px" mx="auto">
        <Link as={NavLink} to="/" fontWeight="semibold">Todoit</Link>
        <Flex align="center">
          <Stack spacing={4} isInline>
            { !isSignedIn ? (
              <Stack spacing={10} isInline>
                <Link as={NavLink} to="/auth/register">Register</Link>
                <Link as={NavLink} to="/auth/signin">Sign In</Link>
              </Stack>
            ): (
              <UserHeader email={user.email} />
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
