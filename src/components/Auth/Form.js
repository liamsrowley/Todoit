import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../UI/FormInput/FormInput';

import {
  Button,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/core';

const Form = ({ handleSubmit, onFormSubmit, isLoading, submissionError, renderFields, buttonText }) => {
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      { renderFields(Field, FormInput) }
      { submissionError && (
        <FormControl isInvalid mb={6}>
          <FormErrorMessage>{submissionError}</FormErrorMessage>
        </FormControl>
      )}
      <Button variantColor="blue" type="submit" isLoading={isLoading}>{ buttonText }</Button>
    </form>
  );
}

export default reduxForm()(Form);
