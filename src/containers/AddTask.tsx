import React from 'react';
import { useAddTask } from '../hooks/taskHooks';
import { ErrorMessage } from '@hookform/error-message';

export default function AddTask(): JSX.Element {
  const { register, errors, handleSubmit, submitting } = useAddTask();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <>
          <input {...register('name', { required: 'Name is required.' })} />

          <button type="submit">Add Todo</button>
          <br />
          <ErrorMessage errors={errors} name="name" />
          <br />
          {submitting ? <>Submitting....</> : <></>}
        </>
      </form>
    </div>
  );
}
