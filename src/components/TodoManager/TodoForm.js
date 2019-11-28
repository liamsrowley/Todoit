import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/core';

const renderInput = ({ input, meta: { touched, error }, label, type }) => {
  const isInvalid = error && touched ? true : false;
  return (
    <Stack spacing={4}>
      <FormControl isInvalid={isInvalid}>
        <FormLabel htmlFor={input.name}>{label}</FormLabel>
        <Input size="md" type={type} {...input} isInvalid={isInvalid} />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    </Stack>
  );
}

const TodoForm = ({ handleSubmit, onFormSubmit, buttonText }) => {
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field name="title" type="text" component={renderInput} />
      <button>
        <Button variantColor="blue">
          {buttonText}
        </Button>
      </button>
    </form>
  );
}

export default reduxForm()(TodoForm);
