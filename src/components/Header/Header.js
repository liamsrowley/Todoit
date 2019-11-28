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
        <Link as={NavLink} to="/">Todoit</Link>
        <Flex align="center">
          <Stack spacing={4} isInline>
            { !isSignedIn ? (
              <Fragment>
                <Button size="sm" bg="blue.500" color="blue.50">
                  <Link as={NavLink} to="/auth/register">Register</Link>
                </Button>
                <Button size="sm" bg="blue.500" color="blue.50">
                  <Link as={NavLink} to="/auth/signin">Sign In</Link>
                </Button>
              </Fragment>
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
