import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Box,
  Flex,
  Button,
  Stack,
  Link
} from '@chakra-ui/core';

const Header = () => {

  const isSignedIn = useSelector(state => state.auth.uid);

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
              <Fragment>
                <Button size="sm" bg="blue.500" color="blue.50">
                  <Link as={NavLink} to="/auth/register">Sign Out</Link>
                </Button>
              </Fragment>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
