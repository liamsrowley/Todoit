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

const renderInput = ({ input, meta: { touched, error }, label, type, placeholder }) => {
  const isInvalid = error && touched ? true : false;
  return (
    <FormControl isInvalid={isInvalid}>
      { label && <FormLabel htmlFor={input.name}>{label}</FormLabel> }
      <Input size="md" type={type} {...input} isInvalid={isInvalid} placeholder={placeholder} roundedRight="0" />
      { error && <FormErrorMessage>{error}</FormErrorMessage> }
    </FormControl>
  );
}

const TodoForm = ({ handleSubmit, onFormSubmit, buttonText }) => {
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Stack isInline align="center" w="auto">
        <Field name="title" type="text" component={renderInput} placeholder="Add a todo..." />
        <Button variantColor="blue" roundedRight="md" roundedLeft="0" type="submit">
          {buttonText}
        </Button>
      </Stack>
    </form>
  );
}

export default reduxForm()(TodoForm);
