import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useSelector } from 'react-redux';

import {
  Button,
  Input,
  Stack,
  FormControl,
} from '@chakra-ui/core';

const renderInput = ({ input, meta: { error, touched }, type, label }) => {
  const isInvalid = error && touched ? true : false;
  return (
    <FormControl isInvalid={isInvalid} w="100%">
      <Input size="md" type={type} {...input} isInvalid={isInvalid} roundedRight="0" />
    </FormControl>
  );
}

const TodoForm = ({ handleSubmit, onFormSubmit, buttonText }) => {
  const isLoading = useSelector(state => state.loading.todo);
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Stack isInline align="center" w="100%">
        <Field name="title" type="text" component={renderInput} placeholder="Add a todo..." />
        <Button variantColor="blue" roundedRight="md" roundedLeft="0" type="submit" isLoading={isLoading}>
          {buttonText}
        </Button>
      </Stack>
    </form>
  );
}

export default reduxForm()(TodoForm);
