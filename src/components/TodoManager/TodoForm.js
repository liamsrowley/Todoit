import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderInput = ({ input, meta: { touched, error }, label, type }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input type={type} {...input} />
      { touched && error && <span>{error}</span> }
    </div>
  );
}

const TodoForm = ({ handleSubmit, onFormSubmit, buttonText }) => {
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field name="title" type="text" component={renderInput} />
      <button>{buttonText}</button>
    </form>
  );
}

export default reduxForm()(TodoForm);
