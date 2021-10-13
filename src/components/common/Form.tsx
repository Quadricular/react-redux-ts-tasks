import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FormTypes } from '../../hooks/taskHooks';
import { Task, TaskErrors } from '../../models/task';

const TaskForm = ({
  currentData,
  add,
  register,
  errors,
  handleSubmit,
}: FormTypes<Task, TaskErrors>): JSX.Element => {
  console.log(currentData);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <>
        <strong>
          <p>{`${add ? 'Add' : 'Edit'} Task`}</p>
        </strong>
        <input {...register('name', { required: 'Name is required.' })} />
        <br />
        <button type="submit">{add ? 'Add' : 'Edit'}</button>
        <br />
        <ErrorMessage errors={errors} name="name" />
        <br />
      </>
    </form>
  );
};

export default TaskForm;
