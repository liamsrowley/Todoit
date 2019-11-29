import React from 'react';

import {
  Input,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/core';

const FormInput = ({ input, meta: { error, touched }, type, label }) => {
  const isInvalid = error && touched ? true : false;
  return (
    <Stack spacing={4} w="100%">
      <FormControl isInvalid={isInvalid}>
        <FormLabel htmlFor={input.name}>{label}</FormLabel>
        <Input size="md" type={type} {...input} isInvalid={isInvalid} />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    </Stack>
  );
}

export default FormInput;
