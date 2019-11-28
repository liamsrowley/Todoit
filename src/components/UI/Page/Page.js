import React from 'react';

import {
  Heading,
  Flex
} from '@chakra-ui/core';

const Page = ({ title, children }) => {
  return (
    <Flex direction="column" align="flex-start" justify="flex-start" w="100%">
      <Heading as="h3" size="lg" mb={3}>{title}</Heading>
      <Flex direction="column" w="100%">
        {children}
      </Flex>
    </Flex>
  );
}

export default Page;
