import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FormTypes } from '../../hooks/taskHooks';
import { Task, TaskErrors } from '../../models/task';
import Datepicker from './Datepicker';

const TaskForm = ({
  submitting,
  add,
  register,
  errors,
  onSubmit,
  handleSubmit,
  control,
}: FormTypes<Task, TaskErrors>): JSX.Element => {
  return (
    <>
      <strong>
        <h2 style={{ fontSize: 18 }}>{`${add ? 'Add' : 'Edit'} Task`}</h2>
      </strong>
      {submitting ? (
        add ? (
          'Submitting...'
        ) : (
          'Updating...'
        )
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <>
            <label id="name" htmlFor="name">
              <div>name</div>
              <input
                aria-labelledby="name"
                {...register('name', { required: 'Name is required.' })}
              />
            </label>
            <br />
            <ErrorMessage errors={errors} name="name" />
            <label htmlFor="description">
              <div>description</div>
              <textarea {...register('description')} />
            </label>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                date <span>*</span>
              </label>
              <br />
              <Datepicker control={control} />
            </div>
            <br />

            <br />
            <button type="submit">{add ? 'Add' : 'Edit'}</button>
            <br />

            <br />
          </>
        </form>
      )}
    </>
  );
};

export default TaskForm;
