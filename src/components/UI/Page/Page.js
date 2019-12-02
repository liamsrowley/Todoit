import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Heading,
  Stack,
  Flex,
  Button
} from '@chakra-ui/core';

const Page = ({ title, children, requireAuth = false }) => {

  const uid = useSelector(state => state.auth.uid);

  if (requireAuth && !uid) {
    return (
      <Stack d="flex" align="center" justify="center">
        <Heading as="h1" size="md" textAlign="center">Please sign in to view this page</Heading>
        <Button as={Link} variantColor="blue" to="/auth/signin" mt={2}>Sign In</Button>
      </Stack>
    );
  }

  return (
    <Flex direction="column" align="flex-start" justify="flex-start" w="100%">
      <Heading as="h3" size="lg" mb={8}>{title}</Heading>
      <Flex direction="column" w="100%">
        {children}
      </Flex>
    </Flex>
  );
}

export default Page;
