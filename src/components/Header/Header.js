import React from 'react';

import { NavLink } from 'react-router-dom';

import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Link
} from '@chakra-ui/core';

const Header = () => {
  return (
    <Box bg="white" w="100%" h="56px">
      <Flex align="center" justify="space-between" h="100%" maxW="960px" mx="auto">
        <Link as={NavLink} to="/">Todoit</Link>
        <Flex align="center">
          <Stack spacing={4} isInline>
            <Button size="sm" bg="blue.500" color="blue.50">
              <Link as={NavLink} to="/auth/register">Register</Link>
            </Button>
            <Button size="sm" bg="blue.500" color="blue.50">
              <Link as={NavLink} to="/auth/signin">Sign In</Link>
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
